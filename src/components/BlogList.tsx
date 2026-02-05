// src/components/BlogList.tsx

import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import api from '../lib/api';
import { PostPreview, Pagination } from '../types/blog';

const BlogList: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [posts, setPosts] = useState<PostPreview[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [loading, setLoading] = useState(true);

  const currentPage = parseInt(searchParams.get('page') || '1');
  const searchQuery = searchParams.get('search') || '';

  useEffect(() => {
    loadPosts();
  }, [currentPage, searchQuery]);

  const loadPosts = async () => {
    try {
      setLoading(true);
      const response = await api.getPosts({
        page: currentPage,
        search: searchQuery || undefined
      });

      if (response.success) {
        setPosts(response.data.posts);
        setPagination(response.data.pagination);
      }
    } catch (err) {
      console.error('Failed to load posts:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const search = formData.get('search') as string;
    
    if (search) {
      setSearchParams({ search, page: '1' });
    } else {
      setSearchParams({});
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <>
      <Helmet>
        <title>Blog | Nosyra Digital - Web Design & Digital Solutions</title>
        <meta 
          name="description" 
          content="Explore insights, tips, and trends in web design, digital marketing, and technology from Nosyra Digital." 
        />
        <link rel="canonical" href="https://www.nosyradigital.com.ng/blog" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
            <p className="text-xl text-blue-100 max-w-2xl">
              Insights, tips, and trends in web design and digital innovation
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Search */}
          <form onSubmit={handleSearch} className="mb-12">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  name="search"
                  placeholder="Search articles..."
                  defaultValue={searchQuery}
                  className="w-full px-6 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button 
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Search
                </button>
              </div>
            </div>
          </form>

          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-600 text-lg">No articles found</p>
            </div>
          ) : (
            <>
              {/* Posts Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {posts.map((post) => (
                  <article 
                    key={post.id}
                    className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
                  >
                    <Link to={`/blog/${post.slug}`}>
                      {post.featured_image ? (
                        <div className="aspect-video overflow-hidden">
                          <img 
                            src={post.featured_image}
                            alt={post.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>
                      ) : (
                        <div className="aspect-video bg-gradient-to-br from-blue-500 to-indigo-600"></div>
                      )}
                    </Link>

                    <div className="p-6">
                      {post.category_name && (
                        <Link 
                          to={`/blog/category/${post.category_slug}`}
                          className="inline-block text-blue-600 text-sm font-semibold mb-2 hover:text-blue-700"
                        >
                          {post.category_name}
                        </Link>
                      )}

                      <Link to={`/blog/${post.slug}`}>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition line-clamp-2">
                          {post.title}
                        </h2>
                      </Link>

                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <time dateTime={post.published_at}>
                          {formatDate(post.published_at)}
                        </time>
                        <span>{post.views} views</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              {pagination && pagination.pages > 1 && (
                <div className="flex justify-center items-center gap-2">
                  <button
                    onClick={() => setSearchParams({ 
                      page: String(currentPage - 1),
                      ...(searchQuery && { search: searchQuery })
                    })}
                    disabled={currentPage === 1}
                    className="px-4 py-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition"
                  >
                    Previous
                  </button>

                  {Array.from({ length: pagination.pages }, (_, i) => i + 1)
                    .filter(page => 
                      page === 1 || 
                      page === pagination.pages || 
                      Math.abs(page - currentPage) <= 2
                    )
                    .map((page, idx, arr) => (
                      <React.Fragment key={page}>
                        {idx > 0 && arr[idx - 1] !== page - 1 && (
                          <span className="px-2">...</span>
                        )}
                        <button
                          onClick={() => setSearchParams({ 
                            page: String(page),
                            ...(searchQuery && { search: searchQuery })
                          })}
                          className={`px-4 py-2 rounded-lg transition ${
                            currentPage === page
                              ? 'bg-blue-600 text-white'
                              : 'border border-gray-300 hover:bg-gray-50'
                          }`}
                        >
                          {page}
                        </button>
                      </React.Fragment>
                    ))}

                  <button
                    onClick={() => setSearchParams({ 
                      page: String(currentPage + 1),
                      ...(searchQuery && { search: searchQuery })
                    })}
                    disabled={currentPage === pagination.pages}
                    className="px-4 py-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogList;
