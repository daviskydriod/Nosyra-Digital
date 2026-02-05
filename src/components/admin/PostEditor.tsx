// src/components/admin/PostEditor.tsx

import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../lib/api';
import { Category } from '../../types/blog';

// Note: Install react-quill for rich text editing
// npm install react-quill

const PostEditor: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id?: string }>();
  const isEdit = !!id;

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    featured_image: '',
    category_id: '',
    status: 'draft' as 'draft' | 'published',
    meta_title: '',
    meta_description: '',
    meta_keywords: '',
    tags: [] as string[]
  });

  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [tagInput, setTagInput] = useState('');

  useEffect(() => {
    loadCategories();
    if (isEdit) {
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
    try {
      const response = await api.getPostBySlug(id!);
      if (response.success) {
        const post = response.data;
        setFormData({
          title: post.title,
          content: post.content,
          excerpt: post.excerpt || '',
          featured_image: post.featured_image || '',
          category_id: post.category_id?.toString() || '',
          status: post.status,
          meta_title: post.meta_title || post.title,
          meta_description: post.meta_description || '',
          meta_keywords: post.meta_keywords || '',
          tags: post.tags?.map((t: any) => t.name) || []
        });
      }
    } catch (err) {
      console.error('Failed to load post:', err);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploading(true);
      const response = await api.uploadImage(file);
      
      if (response.success) {
        setFormData(prev => ({ ...prev, featured_image: response.data.url }));
      }
    } catch (err) {
      alert('Failed to upload image');
      console.error(err);
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
      setLoading(true);
      
      const postData = {
        ...formData,
        category_id: formData.category_id ? parseInt(formData.category_id) : null,
        meta_title: formData.meta_title || formData.title,
        meta_description: formData.meta_description || formData.excerpt
      };

      let response;
      if (isEdit) {
        response = await api.updatePost(parseInt(id!), postData);
      } else {
        response = await api.createPost(postData);
      }

      if (response.success) {
        alert(isEdit ? 'Post updated successfully!' : 'Post created successfully!');
        navigate('/admin/posts');
      }
    } catch (err: any) {
      alert(err.message || 'Failed to save post');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="lg:pl-64">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
          <div className="px-4 md:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => navigate('/admin/posts')}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <div>
                  <h1 className="text-xl md:text-2xl font-bold text-gray-900">
                    {isEdit ? 'Edit Post' : 'Create New Post'}
                  </h1>
                  <p className="text-sm text-gray-600 hidden md:block">
                    {isEdit ? 'Update your blog post' : 'Write and publish a new blog post'}
                  </p>
                </div>
              </div>

              {/* Mobile status indicator */}
              <div className="md:hidden">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                  formData.status === 'published' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {formData.status === 'published' ? 'Published' : 'Draft'}
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-4 md:p-6 lg:p-8">
          <div className="max-w-5xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Main Content Card */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-6">Post Content</h2>
                
                <div className="space-y-6">
                  {/* Title */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Title *
                    </label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Enter post title"
                      required
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Content *
                    </label>
                    <textarea
                      value={formData.content}
                      onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                      rows={15}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm transition-all"
                      placeholder="Write your content here..."
                      required
                    />
                    <p className="text-sm text-gray-500 mt-2 flex items-start gap-2">
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Use HTML for formatting. For rich text editor, integrate React Quill.</span>
                    </p>
                  </div>

                  {/* Excerpt */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Excerpt
                    </label>
                    <textarea
                      value={formData.excerpt}
                      onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Brief summary of the post (optional)"
                    />
                  </div>
                </div>
              </div>

              {/* Media & Organization Card */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-6">Media & Organization</h2>
                
                <div className="space-y-6">
                  {/* Featured Image */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Featured Image
                    </label>
                    <div className="space-y-3">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        disabled={uploading}
                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 disabled:opacity-50"
                      />
                      {uploading && (
                        <div className="flex items-center gap-2 text-sm text-blue-600">
                          <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Uploading...
                        </div>
                      )}
                      {formData.featured_image && (
                        <div className="relative group">
                          <img 
                            src={formData.featured_image} 
                            alt="Preview" 
                            className="max-w-full h-auto rounded-lg border border-gray-200"
                          />
                          <button
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, featured_image: '' }))}
                            className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Category */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category
                    </label>
                    <select
                      value={formData.category_id}
                      onChange={(e) => setFormData(prev => ({ ...prev, category_id: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select a category</option>
                      {categories.map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                      ))}
                    </select>
                  </div>

                  {/* Tags */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tags
                    </label>
                    <div className="flex gap-2 mb-3">
                      <input
                        type="text"
                        value={tagInput}
                        onChange={(e) => setTagInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                        placeholder="Add a tag"
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                      <button
                        type="button"
                        onClick={handleAddTag}
                        className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
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
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:p-6">
                <div className="flex items-center gap-2 mb-6">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <h2 className="text-lg font-semibold text-gray-900">SEO Settings</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Meta Title
                    </label>
                    <input
                      type="text"
                      value={formData.meta_title}
                      onChange={(e) => setFormData(prev => ({ ...prev, meta_title: e.target.value }))}
                      placeholder={formData.title || 'Post title'}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                    <p className="text-xs text-gray-500 mt-1">Recommended: 50-60 characters</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Meta Description
                    </label>
                    <textarea
                      value={formData.meta_description}
                      onChange={(e) => setFormData(prev => ({ ...prev, meta_description: e.target.value }))}
                      rows={3}
                      placeholder="Brief description for search engines"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                    <p className="text-xs text-gray-500 mt-1">Recommended: 150-160 characters</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Meta Keywords
                    </label>
                    <input
                      type="text"
                      value={formData.meta_keywords}
                      onChange={(e) => setFormData(prev => ({ ...prev, meta_keywords: e.target.value }))}
                      placeholder="keyword1, keyword2, keyword3"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Actions - Sticky on mobile */}
              <div className="sticky bottom-0 bg-white rounded-xl shadow-lg border border-gray-200 p-4 md:p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  {/* Status Selector */}
                  <div className="flex items-center gap-4">
                    <label className="text-sm font-medium text-gray-700">
                      Status:
                    </label>
                    <select
                      value={formData.status}
                      onChange={(e) => setFormData(prev => ({ 
                        ...prev, 
                        status: e.target.value as 'draft' | 'published' 
                      }))}
                      className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="draft">Draft</option>
                      <option value="published">Published</option>
                    </select>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => navigate('/admin/posts')}
                      className="flex-1 md:flex-none px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex-1 md:flex-none px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Saving...
                        </>
                      ) : (
                        <>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {isEdit ? 'Update Post' : 'Create Post'}
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PostEditor;
