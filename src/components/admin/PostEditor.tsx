// src/components/admin/PostEditor.tsx (FIXED)
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import api from '../../lib/api';
import { useAuth } from './Dashboard';

interface Category {
  id: number;
  name: string;
  slug: string;
  description?: string;
}

const PostEditor: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const isEditMode = !!id;

  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [tagInput, setTagInput] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    category_id: '',
    featured_image: '',
    status: 'draft' as 'draft' | 'published',
    meta_title: '',
    meta_description: '',
    meta_keywords: '',
    tags: [] as string[]
  });

  useEffect(() => {
    loadCategories();
    if (isEditMode) {
      loadPost();
    }
  }, [id]);

  const loadCategories = async () => {
    try {
      const response = await api.getCategories();
      if (response.success) {
        setCategories(response.data);
      }
    } catch (err) {
      console.error('Failed to load categories:', err);
    }
  };

  const loadPost = async () => {
    if (!id) return;
    
    try {
      setLoading(true);
      
      // ✅ FIXED: Get all posts and find the one by ID
      const response = await api.getPostsWithPagination({ status: 'published', limit: 1000 });
      
      if (response.success && response.data.posts) {
        const post = response.data.posts.find(p => p.id === parseInt(id));
        
        if (post) {
          setFormData({
            title: post.title || '',
            slug: post.slug || '',
            excerpt: post.excerpt || '',
            content: post.content || '',
            category_id: post.category_id?.toString() || '',
            featured_image: post.featured_image || '',
            status: (post.status as 'draft' | 'published') || 'draft',
            meta_title: post.meta_title || post.title || '',
            meta_description: post.meta_description || post.excerpt || '',
            meta_keywords: post.meta_keywords || '',
            tags: post.tags?.map((t: any) => typeof t === 'string' ? t : t.name) || []
          });
        } else {
          console.error('Post not found');
          alert('Post not found');
          navigate('/admin/posts');
        }
      }
    } catch (err) {
      console.error('Failed to load post:', err);
      alert('Failed to load post');
    } finally {
      setLoading(false);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploading(true);
      const response = await api.uploadImage(file);
      
      if (response.success && response.data?.url) {
        setFormData(prev => ({ ...prev, featured_image: response.data.url }));
      }
    } catch (err) {
      console.error('Failed to upload image:', err);
      alert('Image upload failed. Please enter image URL manually.');
    } finally {
      setUploading(false);
    }
  };

  const handleAddTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()]
      }));
      setTagInput('');
    }
  };

  const handleRemoveTag = (tag: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(t => t !== tag)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.content) {
      alert('Title and content are required');
      return;
    }

    try {
      setSaving(true);
      
      // ✅ FIXED: Generate slug properly
      const slug = formData.slug || generateSlug(formData.title);
      
      // ✅ FIXED: Create FormData (your PHP expects this)
      const postFormData = new FormData();
      postFormData.append('title', formData.title);
      postFormData.append('slug', slug);
      postFormData.append('content', formData.content);
      postFormData.append('excerpt', formData.excerpt || formData.content.substring(0, 200));
      postFormData.append('status', formData.status);
      
      if (formData.category_id) {
        postFormData.append('category_id', formData.category_id);
      }
      
      if (formData.featured_image) {
        postFormData.append('featured_image', formData.featured_image);
      }
      
      // SEO fields
      postFormData.append('meta_title', formData.meta_title || formData.title);
      postFormData.append('meta_description', formData.meta_description || formData.excerpt);
      postFormData.append('meta_keywords', formData.meta_keywords);
      
      // Tags
      if (formData.tags.length > 0) {
        postFormData.append('tags', JSON.stringify(formData.tags));
      }

      console.log('Submitting post with slug:', slug);

      if (isEditMode && id) {
        const response = await api.updatePost(parseInt(id), postFormData);
        if (response.success) {
          alert('Post updated successfully!');
          navigate('/admin/posts');
        } else {
          throw new Error(response.message || 'Failed to update post');
        }
      } else {
        const response = await api.createPost(postFormData);
        if (response.success) {
          alert('Post created successfully!');
          navigate('/admin/posts');
        } else {
          throw new Error(response.message || 'Failed to create post');
        }
      }
    } catch (err: any) {
      alert(err.message || 'Failed to save post');
      console.error('Save error:', err);
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600 font-medium">Loading post...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Top Navigation */}
      <nav className="bg-white/80 backdrop-blur-lg shadow-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-6">
              <Link to="/admin" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                    Blog Admin
                  </h1>
                </div>
              </Link>
              
              <div className="hidden md:flex items-center gap-4 text-sm">
                <Link to="/admin" className="text-slate-600 hover:text-slate-900 font-medium">
                  Dashboard
                </Link>
                <Link to="/admin/posts" className="text-blue-600 font-semibold">
                  Posts
                </Link>
                <Link to="/admin/categories" className="text-slate-600 hover:text-slate-900 font-medium">
                  Categories
                </Link>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 bg-slate-100 rounded-full px-4 py-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  {user?.name?.charAt(0).toUpperCase()}
                </div>
                <span className="text-slate-700 font-medium text-sm">{user?.name}</span>
              </div>
              <button
                onClick={handleLogout}
                className="text-red-600 hover:text-red-700 font-medium text-sm px-4 py-2 rounded-lg hover:bg-red-50 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Link 
              to="/admin/posts"
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white transition-colors"
            >
              <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <h2 className="text-3xl font-bold text-slate-900">
                  {isEditMode ? 'Edit Post' : 'Create New Post'}
                </h2>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                  formData.status === 'published' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {formData.status === 'published' ? 'Published' : 'Draft'}
                </span>
              </div>
              <p className="text-slate-600 mt-1">
                {isEditMode ? 'Update your blog post' : 'Write something amazing'}
              </p>
            </div>
          </div>
        </div>

        {/* Editor Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Main Content Card */}
          <div className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 p-6 md:p-8">
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Post Content
            </h3>

            <div className="space-y-6">
              {/* Title */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => {
                    const newTitle = e.target.value;
                    setFormData(prev => ({ 
                      ...prev, 
                      title: newTitle,
                      // Auto-generate slug if slug is empty
                      slug: prev.slug ? prev.slug : generateSlug(newTitle)
                    }));
                  }}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all text-lg font-medium"
                  placeholder="Enter an engaging title"
                />
              </div>

              {/* Slug */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Slug
                </label>
                <input
                  type="text"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                  placeholder="auto-generated-from-title"
                />
                <p className="mt-2 text-xs text-slate-500">
                  Current slug: <span className="font-mono text-blue-600">{formData.slug || generateSlug(formData.title) || 'will-be-generated'}</span>
                </p>
              </div>

              {/* Excerpt */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Excerpt
                </label>
                <textarea
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all resize-none"
                  placeholder="Brief summary of your post (shown in listings)"
                />
              </div>

              {/* Content */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Content *
                </label>
                <textarea
                  required
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  rows={20}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all resize-none font-mono text-sm"
                  placeholder="Write your post content here... (HTML/Markdown supported)"
                />
                <p className="mt-2 text-xs text-slate-500 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Supports HTML and Markdown formatting
                </p>
              </div>
            </div>
          </div>

          {/* Media & Organization Card */}
          <div className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 p-6 md:p-8">
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Media & Organization
            </h3>

            <div className="space-y-6">
              {/* Featured Image */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Featured Image
                </label>
                
                <div className="space-y-4">
                  {/* Image Upload */}
                  <div className="flex gap-3">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      disabled={uploading}
                      className="hidden"
                      id="image-upload"
                    />
                    <label
                      htmlFor="image-upload"
                      className="flex-1 px-4 py-3 bg-slate-50 border-2 border-dashed border-slate-300 rounded-xl cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition-all text-center"
                    >
                      <div className="flex items-center justify-center gap-2 text-slate-600">
                        {uploading ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                            <span className="font-medium">Uploading...</span>
                          </>
                        ) : (
                          <>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                            <span className="font-medium">Upload Image</span>
                          </>
                        )}
                      </div>
                    </label>
                  </div>

                  {/* Or Image URL */}
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-slate-200"></div>
                    </div>
                    <div className="relative flex justify-center text-xs">
                      <span className="bg-white px-2 text-slate-500">or enter URL</span>
                    </div>
                  </div>

                  <input
                    type="url"
                    value={formData.featured_image}
                    onChange={(e) => setFormData({ ...formData, featured_image: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                    placeholder="https://example.com/image.jpg"
                  />

                  {/* Image Preview */}
                  {formData.featured_image && (
                    <div className="relative group">
                      <img 
                        src={formData.featured_image} 
                        alt="Preview"
                        className="w-full h-64 object-cover rounded-xl border-2 border-slate-200"
                        onError={(e) => {
                          e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23f1f5f9" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%2394a3b8" font-family="sans-serif" font-size="18"%3EImage not found%3C/text%3E%3C/svg%3E';
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, featured_image: '' })}
                        className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600 shadow-lg"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Category & Status Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Category
                  </label>
                  <select
                    value={formData.category_id}
                    onChange={(e) => setFormData({ ...formData, category_id: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                  >
                    <option value="">Select a category</option>
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Status
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      status: e.target.value as 'draft' | 'published' 
                    })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                  >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                  </select>
                </div>
              </div>

              {/* Tags */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Tags
                </label>
                <div className="flex gap-2 mb-3">
                  <input
                    type="text"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                    placeholder="Add a tag and press Enter"
                    className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                  />
                  <button
                    type="button"
                    onClick={handleAddTag}
                    className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-semibold"
                  >
                    Add
                  </button>
                </div>
                {formData.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {formData.tags.map(tag => (
                      <span 
                        key={tag}
                        className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg text-sm font-medium border border-blue-200"
                      >
                        {tag}
                        <button
                          type="button"
                          onClick={() => handleRemoveTag(tag)}
                          className="text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* SEO Settings Card */}
          <div className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 p-6 md:p-8">
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              SEO Settings
            </h3>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Meta Title
                </label>
                <input
                  type="text"
                  value={formData.meta_title}
                  onChange={(e) => setFormData({ ...formData, meta_title: e.target.value })}
                  placeholder={formData.title || 'Post title'}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                />
                <p className="text-xs text-slate-500 mt-2">Recommended: 50-60 characters</p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Meta Description
                </label>
                <textarea
                  value={formData.meta_description}
                  onChange={(e) => setFormData({ ...formData, meta_description: e.target.value })}
                  rows={3}
                  placeholder="Brief description for search engines"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all resize-none"
                />
                <p className="text-xs text-slate-500 mt-2">Recommended: 150-160 characters</p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Meta Keywords
                </label>
                <input
                  type="text"
                  value={formData.meta_keywords}
                  onChange={(e) => setFormData({ ...formData, meta_keywords: e.target.value })}
                  placeholder="keyword1, keyword2, keyword3"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                />
                <p className="text-xs text-slate-500 mt-2">Comma-separated keywords</p>
              </div>
            </div>
          </div>

          {/* Action Buttons - Sticky on mobile */}
          <div className="sticky bottom-4 bg-white rounded-2xl shadow-2xl border border-slate-200 p-6">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                type="submit"
                disabled={saving}
                className="w-full sm:flex-1 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-blue-200/50 hover:shadow-xl hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {saving ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Saving...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {isEditMode ? 'Update Post' : 'Publish Post'}
                  </span>
                )}
              </button>

              <Link
                to="/admin/posts"
                className="w-full sm:w-auto px-8 py-4 bg-slate-100 text-slate-700 rounded-xl font-semibold hover:bg-slate-200 transition-colors text-center"
              >
                Cancel
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostEditor;
