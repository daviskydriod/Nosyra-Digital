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
    const headers: HeadersInit = { ...options.headers };

    // Only set JSON content type if body is NOT FormData
    if (options.body && !(options.body instanceof FormData)) {
      headers['Content-Type'] = 'application/json';
    }

    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }

    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        ...options,
        headers,
        credentials: 'include', // include cookies/session
      });

      // Safely parse JSON (handles empty body, e.g. preflight)
      const text = await response.text();
      const data = text ? JSON.parse(text) : {};

      if (!response.ok) {
        throw new Error(data.message || 'Request failed');
      }

      return data;
    } catch (error: any) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // ------------------------
  // Public endpoints
  // ------------------------
  async getPosts(params?: { page?: number; category?: string; search?: string }) {
    const query = new URLSearchParams();
    if (params?.page) query.append('page', params.page.toString());
    if (params?.category) query.append('category', params.category);
    if (params?.search) query.append('search', params.search);

    return this.request(`/posts${query.toString() ? `?${query.toString()}` : ''}`);
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

  // ------------------------
  // Admin endpoints
  // ------------------------
  async login(username: string, password: string) {
    return this.request(`?action=login`, {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });
  }

  async createPost(postData: { title: string; content: string }) {
    return this.request(`?action=createPost`, {
      method: 'POST',
      body: JSON.stringify(postData),
    });
  }

  async updatePost(id: number, postData: { title: string; content: string }) {
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
    if (this.token) headers['Authorization'] = `Bearer ${this.token}`;

    const response = await fetch(`${this.baseUrl}?action=uploadImage`, {
      method: 'POST',
      body: formData,
      headers,
      credentials: 'include',
    });

    // Safely parse JSON
    const text = await response.text();
    return text ? JSON.parse(text) : {};
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
