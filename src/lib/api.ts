// src/lib/api.ts (FIXED VERSION)
const API_BASE_URL = 'https://blog.nosyradigital.com.ng/blog/blog/routes/auth.php';

interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

class ApiClient {
  private baseUrl: string;
  private token: string | null;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.token = localStorage.getItem('auth_token');
  }

  setToken(token: string) {
    this.token = token;
    localStorage.setItem('auth_token', token);
  }

  clearToken() {
    this.token = null;
    localStorage.removeItem('auth_token');
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const headers: HeadersInit = {
      ...options.headers,
    };

    // Only set JSON content type if body is NOT FormData
    if (options.body && !(options.body instanceof FormData)) {
      headers['Content-Type'] = 'application/json';
    }

    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }

    try {
      const url = `${this.baseUrl}${endpoint}`;
      console.log('API Request:', { url, method: options.method || 'GET', headers });

      const response = await fetch(url, {
        ...options,
        headers,
        credentials: 'include',
      });

      console.log('API Response Status:', response.status);

      // Safely parse JSON
      const text = await response.text();
      console.log('API Response Body:', text);

      let data: ApiResponse<T>;
      try {
        data = text ? JSON.parse(text) : { success: false, message: 'Empty response' };
      } catch (parseError) {
        console.error('JSON Parse Error:', parseError);
        throw new Error('Invalid response from server');
      }

      if (!response.ok) {
        throw new Error(data.message || `Request failed with status ${response.status}`);
      }

      return data;
    } catch (error: any) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // ------------------------
  // Public endpoints (if you have them)
  // ------------------------
  async getPosts(params?: { page?: number; category?: string; search?: string }) {
    const query = new URLSearchParams();
    if (params?.page) query.append('page', params.page.toString());
    if (params?.category) query.append('category', params.category);
    if (params?.search) query.append('search', params.search);

    const endpoint = query.toString() ? `?action=getPosts&${query.toString()}` : '?action=getPosts';
    return this.request(endpoint);
  }

  async getPostBySlug(slug: string) {
    return this.request(`?action=getPost&slug=${slug}`);
  }

  async getCategories() {
    return this.request('?action=getCategories');
  }

  async getCategoryPosts(slug: string, page?: number) {
    const query = page ? `&page=${page}` : '';
    return this.request(`?action=getCategoryPosts&slug=${slug}${query}`);
  }

  // ------------------------
  // Admin endpoints
  // ------------------------
  async login(username: string, password: string): Promise<ApiResponse> {
    try {
      console.log('Attempting login for:', username);
      
      const response = await this.request<{ token: string; user: any }>('?action=login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
      });

      console.log('Login response:', response);

      if (response.success && response.data?.token) {
        this.setToken(response.data.token);
      }

      return response;
    } catch (error: any) {
      console.error('Login error:', error);
      throw error;
    }
  }

  async createPost(postData: { title: string; content: string }): Promise<ApiResponse> {
    return this.request('?action=createPost', {
      method: 'POST',
      body: JSON.stringify(postData),
    });
  }

  async updatePost(id: number, postData: { title: string; content: string }): Promise<ApiResponse> {
    return this.request(`?action=updatePost&id=${id}`, {
      method: 'PUT',
      body: JSON.stringify(postData),
    });
  }

  async deletePost(id: number): Promise<ApiResponse> {
    return this.request(`?action=deletePost&id=${id}`, {
      method: 'DELETE',
    });
  }

  async uploadImage(file: File): Promise<ApiResponse> {
    const formData = new FormData();
    formData.append('image', file);

    const headers: HeadersInit = {};
    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }

    try {
      const response = await fetch(`${this.baseUrl}?action=uploadImage`, {
        method: 'POST',
        body: formData,
        headers,
        credentials: 'include',
      });

      const text = await response.text();
      const data = text ? JSON.parse(text) : { success: false, message: 'Empty response' };

      if (!response.ok) {
        throw new Error(data.message || 'Upload failed');
      }

      return data;
    } catch (error: any) {
      console.error('Upload error:', error);
      throw error;
    }
  }

  async createCategory(name: string, description?: string): Promise<ApiResponse> {
    return this.request('?action=createCategory', {
      method: 'POST',
      body: JSON.stringify({ name, description }),
    });
  }

  // Helper method to check if user is logged in
  isAuthenticated(): boolean {
    return !!this.token;
  }

  // Helper method to get current token
  getToken(): string | null {
    return this.token;
  }
}

export const api = new ApiClient(API_BASE_URL);
export default api;
