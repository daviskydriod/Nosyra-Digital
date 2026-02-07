import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search, 
  Calendar, 
  Eye, 
  ArrowRight,
  TrendingUp,
  Sparkles
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import AnimatedSection from '@/components/ui/AnimatedSection';
import api from '../lib/api';
import { Post } from '../types/blog';

const BlogListing: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [featuredPost, setFeaturedPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    loadPosts();
    loadCategories();
  }, []);

  const loadPosts = async () => {
    try {
      setLoading(true);
      const response = await api.getPosts();
      
      if (response.success) {
        setPosts(response.data);
        // Set the first post as featured
        if (response.data.length > 0) {
          setFeaturedPost(response.data[0]);
        }
      }
    } catch (err) {
      console.error('Failed to load posts:', err);
    } finally {
      setLoading(false);
    }
  };

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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category_slug === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Separate featured post from regular posts
  const regularPosts = filteredPosts.filter(post => post.id !== featuredPost?.id);

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

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-cyan bg-cyan/10 rounded-full border border-cyan/20"
            >
              Our Blog
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6"
            >
              Insights & <span className="text-gradient">Updates</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              Stay updated with the latest trends, tips, and insights in digital marketing, web development, and design.
            </motion.p>

         
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-cyan text-white'
                  : 'bg-cyan/10 text-cyan hover:bg-cyan/20 border border-cyan/20'
              }`}
            >
              All Posts
            </button>
            {categories.map((category) => (
              <button
                key={category.slug}
                onClick={() => setSelectedCategory(category.slug)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === category.slug
                    ? 'bg-cyan text-white'
                    : 'bg-cyan/10 text-cyan hover:bg-cyan/20 border border-cyan/20'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && searchTerm === '' && selectedCategory === 'all' && (
        <section className="py-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-card/30 to-transparent" />
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <AnimatedSection>
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-5 h-5 text-cyan" />
                <span className="text-sm font-medium text-cyan">Featured Article</span>
              </div>
              
              <Link to={`/blog/${featuredPost.slug}`}>
                <GlassCard className="p-0 overflow-hidden group hover:scale-[1.02] transition-all duration-500" gradient>
                  <div className="grid lg:grid-cols-2 gap-0">
                    {featuredPost.featured_image && (
                      <div className="aspect-video lg:aspect-auto overflow-hidden">
                        <img 
                          src={featuredPost.featured_image}
                          alt={featuredPost.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    )}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      {featuredPost.category_name && (
                        <span className="inline-block w-fit px-3 py-1 mb-4 text-sm font-medium text-cyan bg-cyan/10 rounded-full border border-cyan/20">
                          {featuredPost.category_name}
                        </span>
                      )}
                      <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 group-hover:text-cyan transition-colors">
                        {featuredPost.title}
                      </h2>
                      <p className="text-muted-foreground mb-6 line-clamp-3">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-cyan" />
                          {formatDate(featuredPost.published_at || featuredPost.created_at)}
                        </div>
                        <div className="flex items-center gap-2">
                          <Eye className="w-4 h-4 text-cyan" />
                          {featuredPost.views} views
                        </div>
                      </div>
                      <span className="text-cyan font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                        Read Full Article
                        <ArrowRight className="w-5 h-5" />
                      </span>
                    </div>
                  </div>
                </GlassCard>
              </Link>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* All Posts Grid */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            badge="Latest Posts"
            title={searchTerm ? "Search Results" : "Recent Articles"}
            subtitle={searchTerm ? `Found ${regularPosts.length} articles` : "Explore our latest insights and updates"}
          />

          {regularPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No articles found. Try adjusting your search or filters.</p>
            </div>
          ) : (
            <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post, index) => (
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
                        {post.category_name && (
                          <span className="inline-block px-3 py-1 mb-3 text-xs font-medium text-cyan bg-cyan/10 rounded-full border border-cyan/20">
                            {post.category_name}
                          </span>
                        )}
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


    </Layout>
  );
};

export default BlogListing;
