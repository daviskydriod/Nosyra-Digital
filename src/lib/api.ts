// src/lib/api.ts (UPDATED FOR BLOG VIEWING)
const API_BASE_URL = 'https://blog.nosyradigital.com.ng/blog/blog/routes/auth.php';

interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

interface Post {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featured_image?: string;
  category_id?: number;
  category_name?: string;
  category_slug?: string;
  author_name?: string;
  views: number;
  published_at?: string;
  created_at: string;
  updated_at: string;
  meta_title?: string;
  meta_description?: string;
  meta_keywords?: string;
  tags?: Array<{ id: number; name: string; slug: string }>;
  related_posts?: Post[];
}

interface Category {
  id: number;
  name: string;
  slug: string;
  description?: string;
  post_count?: number;
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
      console.log('API Request:', { url, method: options.method || 'GET' });

      const response = await fetch(url, {
        ...options,
        headers,
        credentials: 'include',
      });

      console.log('API Response Status:', response.status);

      // Safely parse JSON
      const text = await response.text();
      console.log('API Response Body:', text.substring(0, 200) + '...'); // Log first 200 chars

      let data: ApiResponse<T>;
      try {
        data = text ? JSON.parse(text) : { success: false, message: 'Empty response' };
      } catch (parseError) {
        console.error('JSON Parse Error:', parseError);
        console.error('Response text:', text);
        return {
          success: false,
          error: 'Invalid response from server',
          message: 'Failed to parse server response'
        };
      }

      if (!response.ok) {
        throw new Error(data.message || `Request failed with status ${response.status}`);
      }

      return data;
    } catch (error: any) {
      console.error('API Error:', error);
      return {
        success: false,
        error: error.message || 'Network error',
        message: error.message || 'Failed to connect to server'
      };
    }
  }

  // ------------------------
  // PUBLIC BLOG ENDPOINTS (For viewing posts)
  // ------------------------

  /**
   * Get all blog posts
   * @param params - Optional filters (page, category, search)
   */
  async getPosts(params?: { 
    page?: number; 
    category?: string; 
    search?: string;
    limit?: number;
    status?: 'published' | 'draft';
  }): Promise<ApiResponse<Post[]>> {
    try {
      const query = new URLSearchParams();
      query.append('action', 'getPosts');
      
      if (params?.page) query.append('page', params.page.toString());
      if (params?.category) query.append('category', params.category);
      if (params?.search) query.append('search', params.search);
      if (params?.limit) query.append('limit', params.limit.toString());
      if (params?.status) query.append('status', params.status);
      else query.append('status', 'published'); // Default to published only

      const response = await this.request<Post[]>(`?${query.toString()}`);
      
      // Ensure we return an array
      if (response.success && !response.data) {
        response.data = [];
      }
      
      return response;
    } catch (error: any) {
      console.error('getPosts error:', error);
      return {
        success: false,
        data: [],
        error: error.message
      };
    }
  }

  /**
   * Get a single post by slug
   * @param slug - Post slug/URL identifier
   */
  async getPostBySlug(slug: string): Promise<ApiResponse<Post>> {
    try {
      console.log('Fetching post by slug:', slug);
      
      const response = await this.request<Post>(`?action=getPost&slug=${encodeURIComponent(slug)}`);
      
      if (response.success && response.data) {
        // Increment view count (optional - your backend might handle this)
        console.log('Post loaded successfully:', response.data.title);
      }
      
      return response;
    } catch (error: any) {
      console.error('getPostBySlug error:', error);
      return {
        success: false,
        data: null as any,
        error: error.message
      };
    }
  }

  /**
   * Get all categories
   */
  async getCategories(): Promise<ApiResponse<Category[]>> {
    try {
      const response = await this.request<Category[]>('?action=getCategories');
      
      // Ensure we return an array
      if (response.success && !response.data) {
        response.data = [];
      }
      
      return response;
    } catch (error: any) {
      console.error('getCategories error:', error);
      return {
        success: false,
        data: [],
        error: error.message
      };
    }
  }

  /**
   * Get posts by category slug
   * @param slug - Category slug
   * @param page - Optional page number for pagination
   */
  async getPostsByCategory(slug: string, page?: number): Promise<ApiResponse<{
    category: Category;
    posts: Post[];
  }>> {
    try {
      const query = new URLSearchParams();
      query.append('action', 'getCategoryPosts');
      query.append('slug', encodeURIComponent(slug));
      if (page) query.append('page', page.toString());

      const response = await this.request<{ category: Category; posts: Post[] }>(`?${query.toString()}`);
      
      // Ensure proper structure
      if (response.success && !response.data) {
        response.data = {
          category: null as any,
          posts: []
        };
      }
      
      return response;
    } catch (error: any) {
      console.error('getPostsByCategory error:', error);
      return {
        success: false,
        data: {
          category: null as any,
          posts: []
        },
        error: error.message
      };
    }
  }

  /**
   * Search posts
   * @param searchTerm - Search query
   */
  async searchPosts(searchTerm: string): Promise<ApiResponse<Post[]>> {
    try {
      const query = new URLSearchParams();
      query.append('action', 'searchPosts');
      query.append('q', encodeURIComponent(searchTerm));
      query.append('status', 'published');

      const response = await this.request<Post[]>(`?${query.toString()}`);
      
      if (response.success && !response.data) {
        response.data = [];
      }
      
      return response;
    } catch (error: any) {
      console.error('searchPosts error:', error);
      return {
        success: false,
        data: [],
        error: error.message
      };
    }
  }

  /**
   * Get featured/popular posts
   * @param limit - Number of posts to return
   */
  async getFeaturedPosts(limit: number = 3): Promise<ApiResponse<Post[]>> {
    try {
      const query = new URLSearchParams();
      query.append('action', 'getFeaturedPosts');
      query.append('limit', limit.toString());

      const response = await this.request<Post[]>(`?${query.toString()}`);
      
      if (response.success && !response.data) {
        response.data = [];
      }
      
      return response;
    } catch (error: any) {
      console.error('getFeaturedPosts error:', error);
      return {
        success: false,
        data: [],
        error: error.message
      };
    }
  }

  /**
   * Get related posts for a specific post
   * @param postId - ID of the current post
   * @param limit - Number of related posts to return
   */
  async getRelatedPosts(postId: number, limit: number = 3): Promise<ApiResponse<Post[]>> {
    try {
      const query = new URLSearchParams();
      query.append('action', 'getRelatedPosts');
      query.append('postId', postId.toString());
      query.append('limit', limit.toString());

      const response = await this.request<Post[]>(`?${query.toString()}`);
      
      if (response.success && !response.data) {
        response.data = [];
      }
      
      return response;
    } catch (error: any) {
      console.error('getRelatedPosts error:', error);
      return {
        success: false,
        data: [],
        error: error.message
      };
    }
  }

  // ------------------------
  // ADMIN ENDPOINTS
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

  async createPost(postData: FormData): Promise<ApiResponse> {
    try {
      const headers: HeadersInit = {};
      if (this.token) {
        headers['Authorization'] = `Bearer ${this.token}`;
      }

      const response = await fetch(`${this.baseUrl}?action=createPost`, {
        method: 'POST',
        body: postData,
        headers,
        credentials: 'include',
      });

      const text = await response.text();
      const data = text ? JSON.parse(text) : { success: false, message: 'Empty response' };

      return data;
    } catch (error: any) {
      console.error('Create post error:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  async updatePost(id: number, postData: FormData): Promise<ApiResponse> {
    try {
      const headers: HeadersInit = {};
      if (this.token) {
        headers['Authorization'] = `Bearer ${this.token}`;
      }

      const response = await fetch(`${this.baseUrl}?action=updatePost&id=${id}`, {
        method: 'POST',
        body: postData,
        headers,
        credentials: 'include',
      });

      const text = await response.text();
      const data = text ? JSON.parse(text) : { success: false, message: 'Empty response' };

      return data;
    } catch (error: any) {
      console.error('Update post error:', error);
      return {
        success: false,
        error: error.message
      };
    }
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

  async updateCategory(id: number, name: string, description?: string): Promise<ApiResponse> {
    return this.request(`?action=updateCategory&id=${id}`, {
      method: 'POST',
      body: JSON.stringify({ name, description }),
    });
  }

  async deleteCategory(id: number): Promise<ApiResponse> {
    return this.request(`?action=deleteCategory&id=${id}`, {
      method: 'DELETE',
    });
  }

  // Helper methods
  isAuthenticated(): boolean {
    return !!this.token;
  }

  getToken(): string | null {
    return this.token;
  }

  /**
   * Test API connection
   */
  async testConnection(): Promise<ApiResponse> {
    try {
      const response = await this.request('?action=health');
      return response;
    } catch (error: any) {
      return {
        success: false,
        error: 'Cannot connect to API server',
        message: error.message
      };
    }
  }
}

export const api = new ApiClient(API_BASE_URL);
export default api;
