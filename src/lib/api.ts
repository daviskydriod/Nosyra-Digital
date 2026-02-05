// src/lib/api.ts
const API_BASE_URL = 'https://blog.nosyradigital.com.ng/blog/routes/auth.php';

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
      'Content-Type': 'application/json',
      ...options.headers,
    };

    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }

    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        ...options,
        headers,
        credentials: 'include', // sends cookies if any
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Request failed');
      }

      return data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // Public endpoints
  async getPosts(params?: { page?: number; category?: string; search?: string }) {
    const queryParams = new URLSearchParams();
    if (params?.page) queryParams.append('page', params.page.toString());
    if (params?.category) queryParams.append('category', params.category);
    if (params?.search) queryParams.append('search', params.search);

    const query = queryParams.toString();
    return this.request(`/posts${query ? `?${query}` : ''}`);
  }

  async getPostBySlug(slug: string) {
    return this.request(`/posts/${slug}`);
  }

  async getCategories() {
    return this.request('/categories');
  }

  async getCategoryPosts(slug: string, page?: number) {
    const query = page ? `?page=${page}` : '';
    return this.request(`/categories/${slug}/posts${query}`);
  }

  // Admin endpoints
  async login(username: string, password: string) {
    // point to ?action=login
    return this.request(`?action=login`, {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });
  }

  async createPost(postData: any) {
    return this.request(`?action=createPost`, {
      method: 'POST',
      body: JSON.stringify(postData),
    });
  }

  async updatePost(id: number, postData: any) {
    return this.request(`?action=updatePost&id=${id}`, {
      method: 'PUT',
      body: JSON.stringify(postData),
    });
  }

  async deletePost(id: number) {
    return this.request(`?action=deletePost&id=${id}`, {
      method: 'DELETE',
    });
  }

  async uploadImage(file: File) {
    const formData = new FormData();
    formData.append('image', file);

    const headers: HeadersInit = {};
    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }

    const response = await fetch(`${this.baseUrl}?action=uploadImage`, {
      method: 'POST',
      headers,
      body: formData,
      credentials: 'include',
    });

    return response.json();
  }

  async createCategory(name: string, description?: string) {
    return this.request(`?action=createCategory`, {
      method: 'POST',
      body: JSON.stringify({ name, description }),
    });
  }
}

export const api = new ApiClient(API_BASE_URL);
export default api;
