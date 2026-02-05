// src/components/BlogPost.tsx

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import api from '../lib/api';
import { Post } from '../types/blog';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (slug) {
      loadPost(slug);
    }
  }, [slug]);

  const loadPost = async (slug: string) => {
    try {
      setLoading(true);
      const response = await api.getPostBySlug(slug);
      
      if (response.success) {
        setPost(response.data);
      } else {
        setError('Post not found');
      }
    } catch (err) {
      setError('Failed to load post');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-6">{error}</p>
          <Link 
            to="/blog" 
            className="text-blue-600 hover:text-blue-700 font-semibold"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.featured_image,
    "datePublished": post.published_at,
    "dateModified": post.updated_at,
    "author": {
      "@type": "Person",
      "name": post.author_name || "Nosyra Digital"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Nosyra Digital",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.nosyradigital.com.ng/logo.png"
      }
    },
    "description": post.meta_description || post.excerpt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.nosyradigital.com.ng/blog/${post.slug}`
    }
  };

  return (
    <>
      <Helmet>
        <title>{post.meta_title || post.title} | Nosyra Digital Blog</title>
        <meta name="description" content={post.meta_description || post.excerpt} />
        {post.meta_keywords && <meta name="keywords" content={post.meta_keywords} />}
        
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        {post.featured_image && <meta property="og:image" content={post.featured_image} />}
        <meta property="og:url" content={`https://www.nosyradigital.com.ng/blog/${post.slug}`} />
        <meta property="article:published_time" content={post.published_at || post.created_at} />
        {post.category_name && <meta property="article:section" content={post.category_name} />}
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        {post.featured_image && <meta name="twitter:image" content={post.featured_image} />}
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        
        {/* Canonical URL */}
        <link rel="canonical" href={`https://www.nosyradigital.com.ng/blog/${post.slug}`} />
      </Helmet>

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-600">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-blue-600">Blog</Link>
          {post.category_slug && (
            <>
              <span className="mx-2">/</span>
              <Link to={`/blog/category/${post.category_slug}`} className="hover:text-blue-600">
                {post.category_name}
              </Link>
            </>
          )}
          <span className="mx-2">/</span>
          <span className="text-gray-800">{post.title}</span>
        </nav>

        {/* Post Header */}
        <header className="mb-8">
          {post.category_name && (
            <Link 
              to={`/blog/category/${post.category_slug}`}
              className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mb-4 hover:bg-blue-200 transition"
            >
              {post.category_name}
            </Link>
          )}
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-gray-600 text-sm">
            <span>By {post.author_name || 'Nosyra Digital'}</span>
            <span>•</span>
            <time dateTime={post.published_at || post.created_at}>
              {formatDate(post.published_at || post.created_at)}
            </time>
            <span>•</span>
            <span>{post.views} views</span>
          </div>
        </header>

        {/* Featured Image */}
        {post.featured_image && (
          <div className="mb-12 rounded-lg overflow-hidden">
            <img 
              src={post.featured_image} 
              alt={post.title}
              className="w-full h-auto"
              loading="eager"
            />
          </div>
        )}

        {/* Post Content */}
        <div 
          className="prose prose-lg max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mb-12 pt-8 border-t">
            <h3 className="text-lg font-semibold mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span 
                  key={tag.slug}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  #{tag.name}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Related Posts */}
        {post.related_posts && post.related_posts.length > 0 && (
          <div className="mt-16 pt-8 border-t">
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {post.related_posts.map((relatedPost) => (
                <Link 
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="group"
                >
                  {relatedPost.featured_image && (
                    <div className="aspect-video mb-3 rounded-lg overflow-hidden">
                      <img 
                        src={relatedPost.featured_image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </>
  );
};

export default BlogPost;
