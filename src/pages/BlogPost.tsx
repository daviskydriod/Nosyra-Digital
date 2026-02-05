import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Calendar, 
  Eye, 
  User, 
  Tag,
  Share2,
  Clock
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import GlassCard from '@/components/ui/GlassCard';
import AnimatedSection from '@/components/ui/AnimatedSection';
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
      <Layout>
        <div className="flex items-center justify-center min-h-screen">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-cyan/30 border-t-cyan rounded-full"
          />
        </div>
      </Layout>
    );
  }

  if (error || !post) {
    return (
      <Layout>
        <section className="relative min-h-[70vh] flex items-center pt-32 pb-20">
          <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
                Post <span className="text-gradient">Not Found</span>
              </h1>
              <p className="text-muted-foreground text-lg mb-8">{error}</p>
              <Link 
                to="/blog" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-cyan/10 text-cyan hover:bg-cyan/20 rounded-lg transition-all duration-300 border border-cyan/20"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Blog
              </Link>
            </motion.div>
          </div>
        </section>
      </Layout>
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
    <Layout>
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

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 flex items-center gap-2 text-sm text-muted-foreground"
          >
            <Link to="/" className="hover:text-cyan transition-colors">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-cyan transition-colors">Blog</Link>
            {post.category_slug && (
              <>
                <span>/</span>
                <Link 
                  to={`/blog/category/${post.category_slug}`} 
                  className="hover:text-cyan transition-colors"
                >
                  {post.category_name}
                </Link>
              </>
            )}
          </motion.nav>

          {/* Post Header */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {post.category_name && (
                <Link 
                  to={`/blog/category/${post.category_slug}`}
                  className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-cyan bg-cyan/10 rounded-full border border-cyan/20 hover:bg-cyan/20 transition-all"
                >
                  {post.category_name}
                </Link>
              )}
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6 leading-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-cyan" />
                  <span className="text-sm">{post.author_name || 'Nosyra Digital'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-cyan" />
                  <time dateTime={post.published_at || post.created_at} className="text-sm">
                    {formatDate(post.published_at || post.created_at)}
                  </time>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-cyan" />
                  <span className="text-sm">{post.views} views</span>
                </div>
                <button className="flex items-center gap-2 text-cyan hover:text-cyan/80 transition-colors">
                  <Share2 className="w-4 h-4" />
                  <span className="text-sm">Share</span>
                </button>
              </div>
            </motion.div>

            {/* Featured Image */}
            {post.featured_image && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-12 rounded-2xl overflow-hidden border border-cyan/10"
              >
                <img 
                  src={post.featured_image} 
                  alt={post.title}
                  className="w-full h-auto"
                  loading="eager"
                />
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Post Content */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fadeUp">
              <GlassCard className="p-8 md:p-12 mb-12">
                <div 
                  className="prose prose-lg max-w-none prose-headings:font-poppins prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-cyan prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-code:text-cyan prose-code:bg-cyan/10 prose-code:px-2 prose-code:py-1 prose-code:rounded"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </GlassCard>
            </AnimatedSection>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <AnimatedSection animation="fadeUp" delay={0.1}>
                <GlassCard className="p-6 mb-12">
                  <div className="flex items-center gap-2 mb-4">
                    <Tag className="w-5 h-5 text-cyan" />
                    <h3 className="text-lg font-poppins font-semibold">Tags</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span 
                        key={tag.slug}
                        className="px-3 py-1.5 text-sm bg-cyan/10 text-cyan rounded-full border border-cyan/20 hover:bg-cyan/20 transition-all cursor-pointer"
                      >
                        #{tag.name}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </AnimatedSection>
            )}

            {/* Author Bio Card */}
            <AnimatedSection animation="fadeUp" delay={0.2}>
              <GlassCard className="p-8 mb-12" gradient>
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan to-navy flex items-center justify-center text-2xl font-bold text-white shrink-0">
                    {(post.author_name || 'N')[0]}
                  </div>
                  <div>
                    <h3 className="text-xl font-poppins font-semibold mb-2">
                      {post.author_name || 'Nosyra Digital'}
                    </h3>
                    <p className="text-muted-foreground">
                      Digital marketing expert passionate about helping businesses grow their online presence through innovative strategies and creative solutions.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {post.related_posts && post.related_posts.length > 0 && (
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background to-card/50" />
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <AnimatedSection>
                <div className="text-center mb-12">
                  <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-cyan bg-cyan/10 rounded-full border border-cyan/20">
                    Continue Reading
                  </span>
                  <h2 className="text-3xl md:text-4xl font-poppins font-bold">
                    Related <span className="text-gradient">Articles</span>
                  </h2>
                </div>
              </AnimatedSection>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {post.related_posts.map((relatedPost, index) => (
                  <AnimatedSection 
                    key={relatedPost.id}
                    animation="scaleIn"
                    delay={index * 0.1}
                  >
                    <Link to={`/blog/${relatedPost.slug}`}>
                      <GlassCard className="p-0 overflow-hidden h-full group hover:scale-105 transition-all duration-300">
                        {relatedPost.featured_image && (
                          <div className="aspect-video overflow-hidden">
                            <img 
                              src={relatedPost.featured_image}
                              alt={relatedPost.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                        )}
                        <div className="p-6">
                          <h3 className="font-poppins font-semibold text-lg mb-2 group-hover:text-cyan transition-colors line-clamp-2">
                            {relatedPost.title}
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                            {relatedPost.excerpt}
                          </p>
                          <span className="text-cyan text-sm font-medium inline-flex items-center gap-1">
                            Read More
                            <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </div>
                      </GlassCard>
                    </Link>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Back to Blog */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan/10 text-cyan hover:bg-cyan/20 rounded-lg transition-all duration-300 border border-cyan/20 hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to All Posts
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;
