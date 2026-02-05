// src/types/blog.ts

export interface Post {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featured_image?: string;
  category_id?: number;
  category_name?: string;
  category_slug?: string;
  author_id?: number;
  author_name?: string;
  status: 'draft' | 'published';
  views: number;
  meta_title?: string;
  meta_description?: string;
  meta_keywords?: string;
  created_at: string;
  updated_at: string;
  published_at?: string;
  tags?: Tag[];
  related_posts?: PostPreview[];
}

export interface PostPreview {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  featured_image?: string;
  category_name?: string;
  category_slug?: string;
  author_name?: string;
  published_at: string;
  views: number;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  description?: string;
  post_count?: number;
  created_at: string;
}

export interface Tag {
  id?: number;
  name: string;
  slug: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
  name: string;
  role: 'admin' | 'editor';
}

export interface Pagination {
  page: number;
  limit: number;
  total: number;
  pages: number;
}

export interface PostsResponse {
  posts: PostPreview[];
  pagination: Pagination;
}
