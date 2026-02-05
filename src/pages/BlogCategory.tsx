import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Eye, 
  ArrowLeft,
  Folder
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import AnimatedSection from '@/components/ui/AnimatedSection';
import api from '../lib/api';
import { Post } from '../types/blog';

const BlogCategory: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [posts, setPosts] = useState<Post[]>([]);
  const [category, setCategory] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (slug) {
      loadCategoryPosts(slug);
    }
  }, [slug]);

  const loadCategoryPosts = async (categorySlug: string) => {
    try {
      setLoading(true);
      const response = await api.getPostsByCategory(categorySlug);
      
      if (response.success) {
        setPosts(response.data.posts);
        setCategory(response.data.category);
      } else {
        setError('Category not found');
      }
    } catch (err) {
      setError('Failed to load category posts');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
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

  if (error || !category) {
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
                Category <span className="text-gradient">Not Found</span>
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

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 flex items-center justify-center gap-2 text-sm text-muted-foreground"
            >
              <Link to="/" className="hover:text-cyan transition-colors">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-cyan transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-foreground">{category.name}</span>
            </motion.nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center justify-center gap-2 mb-6"
            >
              <Folder className="w-6 h-6 text-cyan" />
              <span className="px-4 py-1.5 text-sm font-medium text-cyan bg-cyan/10 rounded-full border border-cyan/20">
                Category
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6"
            >
              {category.name}
            </motion.h1>
            
            {category.description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
              >
                {category.description}
              </motion.p>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8"
            >
              <p className="text-muted-foreground">
                <span className="text-cyan font-semibold">{posts.length}</span> {posts.length === 1 ? 'article' : 'articles'} in this category
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <GlassCard className="max-w-md mx-auto p-12">
                <Folder className="w-16 h-16 text-cyan/50 mx-auto mb-4" />
                <p className="text-muted-foreground text-lg mb-6">
                  No articles found in this category yet.
                </p>
                <Link 
                  to="/blog"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-cyan/10 text-cyan hover:bg-cyan/20 rounded-lg transition-all duration-300 border border-cyan/20"
                >
                  <ArrowLeft className="w-5 h-5" />
                  View All Posts
                </Link>
              </GlassCard>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, index) => (
                <AnimatedSection 
                  key={post.id}
                  animation="scaleIn"
                  delay={index * 0.1}
                >
                  <Link to={`/blog/${post.slug}`}>
                    <GlassCard className="p-0 overflow-hidden h-full group hover:scale-105 transition-all duration-300">
                      {post.featured_image && (
                        <div className="aspect-video overflow-hidden">
                          <img 
                            src={post.featured_image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      )}
                      <div className="p-6">
                        <h3 className="font-poppins font-semibold text-xl mb-3 group-hover:text-cyan transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-cyan/10">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-3 h-3" />
                            {formatDate(post.published_at || post.created_at)}
                          </div>
                          <div className="flex items-center gap-2">
                            <Eye className="w-3 h-3" />
                            {post.views}
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Back to Blog */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan/10 text-cyan hover:bg-cyan/20 rounded-lg transition-all duration-300 border border-cyan/20 hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5" />
            View All Categories
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default BlogCategory;
