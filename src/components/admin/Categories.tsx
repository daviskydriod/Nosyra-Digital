// src/components/admin/Categories.tsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../lib/api';
import { useAuth } from './Dashboard';

interface Category {
  id: number;
  name: string;
  slug: string;
  description?: string;
  post_count?: number;
}

const Categories: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    description: ''
  });
  const [deleteConfirm, setDeleteConfirm] = useState<number | null>(null);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      setLoading(true);
      const response = await api.getCategories();
      if (response.success) {
        setCategories(response.data);
      }
    } catch (err) {
      console.error('Failed to load categories:', err);
    } finally {
      setLoading(false);
    }
  };

  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const slug = formData.slug || generateSlug(formData.name);
      
      if (editingCategory) {
        const response = await api.updateCategory(editingCategory.id, {
          ...formData,
          slug
        });
        if (response.success) {
          setCategories(categories.map(cat => 
            cat.id === editingCategory.id ? response.data : cat
          ));
        }
      } else {
        const response = await api.createCategory({
          ...formData,
          slug
        });
        if (response.success) {
          setCategories([...categories, response.data]);
        }
      }
      
      closeModal();
    } catch (err) {
      console.error('Failed to save category:', err);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const response = await api.deleteCategory(id);
      if (response.success) {
        setCategories(categories.filter(cat => cat.id !== id));
        setDeleteConfirm(null);
      }
    } catch (err) {
      console.error('Failed to delete category:', err);
    }
  };

  const openModal = (category?: Category) => {
    if (category) {
      setEditingCategory(category);
      setFormData({
        name: category.name,
        slug: category.slug,
        description: category.description || ''
      });
    } else {
      setEditingCategory(null);
      setFormData({
        name: '',
        slug: '',
        description: ''
      });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingCategory(null);
    setFormData({
      name: '',
      slug: '',
      description: ''
    });
  };

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

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
                <Link to="/admin/posts" className="text-slate-600 hover:text-slate-900 font-medium">
                  Posts
                </Link>
                <Link to="/admin/categories" className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-1">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Categories</h2>
            <p className="text-slate-600">Organize your blog content</p>
          </div>
          <button
            onClick={() => openModal()}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-purple-200/50 hover:shadow-xl hover:scale-[1.02] transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            New Category
          </button>
        </div>

        {/* Categories Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-600"></div>
          </div>
        ) : categories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div 
                key={category.id} 
                className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 p-6 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                  </div>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-semibold">
                    {category.post_count || 0} posts
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {category.name}
                </h3>
                
                <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                  {category.description || 'No description provided'}
                </p>

                <div className="flex items-center gap-2 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => openModal(category)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition-colors font-medium text-sm"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    Edit
                  </button>

                  {deleteConfirm === category.id ? (
                    <div className="flex-1 flex items-center gap-1">
                      <button
                        onClick={() => handleDelete(category.id)}
                        className="flex-1 px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium text-xs"
                      >
                        Confirm
                      </button>
                      <button
                        onClick={() => setDeleteConfirm(null)}
                        className="flex-1 px-3 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition-colors font-medium text-xs"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setDeleteConfirm(category.id)}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors font-medium text-sm"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      Delete
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <svg className="w-20 h-20 text-slate-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            <h3 className="text-xl font-bold text-slate-900 mb-2">No categories yet</h3>
            <p className="text-slate-600 mb-6">Create your first category to organize your content</p>
            <button
              onClick={() => openModal()}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Create First Category
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-slate-900">
                  {editingCategory ? 'Edit Category' : 'New Category'}
                </h3>
                <button
                  onClick={closeModal}
                  className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors"
                >
                  <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Category Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all"
                    placeholder="e.g., Technology, Travel, Food"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Slug
                  </label>
                  <input
                    type="text"
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all"
                    placeholder="Auto-generated from name"
                  />
                  <p className="mt-2 text-xs text-slate-500">
                    Leave empty to auto-generate from name
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Description
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all resize-none"
                    placeholder="Brief description of this category"
                  />
                </div>

                <div className="flex items-center gap-3 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
                  >
                    {editingCategory ? 'Update Category' : 'Create Category'}
                  </button>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="flex-1 bg-slate-100 text-slate-700 px-6 py-3 rounded-xl font-semibold hover:bg-slate-200 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;
