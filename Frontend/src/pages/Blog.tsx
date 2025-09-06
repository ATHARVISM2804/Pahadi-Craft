import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { blogPosts } from '../data/blog';
import { ArrowRight, Calendar, User, Tag, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const openModal = (post) => setSelectedPost(post);
  const closeModal = () => setSelectedPost(null);

  const featuredPost = blogPosts[0];
  const slideImages = blogPosts.slice(0, 6).map((post) => post.image);

  return (
    <div className="min-h-screen pt-20 bg-[#FFF8F2]">
      {/* Hero Section with Elegant Typography and Design */}
      <section className="relative py-20 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-[#C9A66B]/20 -z-10"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-[#5A4232]/10 -z-10"></div>
          <div className="absolute top-1/4 right-1/4 w-48 h-48 rounded-full bg-[#C9A66B]/10 -z-10"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-[#C9A66B]/20 text-[#C9A66B] text-sm font-medium mb-4">
                Crafting Stories
              </span>
              <h1 className="text-5xl md:text-6xl font-serif text-[#5A4232] mb-6 leading-tight">
                Insights, Tips & <span className="italic">Stories</span>
              </h1>
              <p className="text-[#7A6A5A] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Explore inspiration and creativity from the heart of Pahadicraft, where tradition meets modern elegance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Blog Banner - Enhanced with premium styling */}
      <section className="container mx-auto px-4 py-8 -mt-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#5A4232]/80 to-transparent z-10"></div>
          <img
            src={featuredPost.image}
            alt={featuredPost.title}
            className="w-full h-[500px] object-cover object-center transform transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 z-20">
            <div className="max-w-2xl">
              <span className="inline-block py-1 px-3 rounded-full bg-white/20 text-white text-sm font-medium mb-4 backdrop-blur-sm">
                {featuredPost.category}
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-4 leading-tight">
                {featuredPost.title}
              </h2>
              <p className="text-white/90 text-lg mb-6 line-clamp-3">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center gap-4 text-white/80 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{new Date(featuredPost.date).toLocaleDateString('en-US', { 
                    day: 'numeric', 
                    month: 'long', 
                    year: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span className="text-sm">{featuredPost.author}</span>
                </div>
              </div>
              <button 
                onClick={() => openModal(featuredPost)}
                className="flex items-center gap-2 py-3 px-6 bg-white text-[#5A4232] rounded-full hover:bg-[#C9A66B] hover:text-white transition-all duration-300"
              >
                Read Full Story <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Blog Grid Section - Redesigned with more premium card layouts */}
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-serif text-[#5A4232]">
              <span className="text-[#C9A66B]">✦</span> Latest Articles
            </h2>
            <div className="hidden md:flex items-center gap-2">
              <button className="h-10 w-10 rounded-full border border-[#C9A66B] flex items-center justify-center text-[#5A4232] hover:bg-[#C9A66B] hover:text-white transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="h-10 w-10 rounded-full border border-[#C9A66B] flex items-center justify-center text-[#5A4232] hover:bg-[#C9A66B] hover:text-white transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => openModal(post)}
                className="group cursor-pointer bg-white/60 backdrop-blur-sm rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute top-4 right-4 z-10">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/80 backdrop-blur-sm text-[#5A4232] text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-[#7A6A5A] text-sm mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'short'
                      })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-serif text-[#5A4232] mb-3 line-clamp-2 group-hover:text-[#C9A66B] transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-[#7A6A5A] mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-[#C9A66B] text-sm font-medium group-hover:underline">
                      Read more
                    </span>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#F5E9DA] text-[#C9A66B] group-hover:bg-[#C9A66B] group-hover:text-white transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <button className="py-3 px-8 bg-[#F5E9DA] text-[#5A4232] rounded-full hover:bg-[#C9A66B] hover:text-white transition-colors font-medium">
              Load More Articles
            </button>
          </div>
        </motion.div>
      </div>

      {/* Curated Collections Section - New premium section */}
      <section className="py-16 bg-[#5A4232]/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-[#C9A66B]/20 text-[#C9A66B] text-sm font-medium mb-2">
              Explore by Theme
            </span>
            <h2 className="text-3xl font-serif text-[#5A4232] mb-4">Curated Collections</h2>
            <p className="text-[#7A6A5A] max-w-2xl mx-auto">
              Dive into our carefully curated collections of articles, organized by theme to inspire your creative journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Sustainability', 'Traditional Crafts', 'Home Decor', 'Fragrance Stories'].map((category, idx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative h-64 rounded-xl overflow-hidden cursor-pointer group"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#5A4232]/90 to-transparent z-10"></div>
                <img 
                  src={slideImages[idx % slideImages.length]} 
                  alt={category}
                  className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                  <h3 className="text-xl font-serif text-white mb-2">{category}</h3>
                  <div className="flex items-center gap-2 text-white/80 text-sm">
                    <Tag className="w-3 h-3" />
                    <span>12 Articles</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Quote - Premium design element */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <blockquote className="max-w-4xl mx-auto text-center relative">
            <div className="absolute -top-10 left-0 md:left-10 text-9xl text-[#C9A66B]/20 font-serif">"</div>
            <p className="text-2xl md:text-3xl text-[#5A4232] italic font-serif leading-relaxed relative z-10">
              Craftsmanship is the bridge that connects our ancestral wisdom with contemporary living, 
              transforming simple moments into extraordinary experiences.
            </p>
            <footer className="mt-6 text-[#7A6A5A]">
              <cite className="font-medium">— Pahadi Craft Artisans</cite>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Sliding Image Section - Enhanced with premium styling */}
      <div className="py-16 bg-[#F5E9DA]/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-serif text-[#5A4232]">
              <span className="text-[#C9A66B]">✦</span> Visual Stories
            </h3>
          </div>
          
          <div className="relative overflow-hidden">
            <div className="flex w-max gap-6 animate-[slide-left_40s_linear_infinite] hover:pause">
              {[...slideImages, ...slideImages].map((src, idx) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  key={idx}
                  className="relative h-72 w-80 rounded-xl overflow-hidden shadow-lg"
                >
                  <img
                    src={src}
                    alt={`Slide ${idx + 1}`}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-medium">Discover the story</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section - New premium section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-[#5A4232] rounded-2xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-serif text-white mb-4">
                  Subscribe to our Newsletter
                </h3>
                <p className="text-white/80 mb-6">
                  Be the first to receive our latest stories, product updates and exclusive offers.
                </p>
                <form className="space-y-4">
                  <div>
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#C9A66B]"
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="px-6 py-3 bg-[#C9A66B] text-white rounded-lg hover:bg-[#C9A66B]/80 transition-colors"
                  >
                    Subscribe Now
                  </button>
                </form>
              </div>
              <div className="hidden md:block relative h-full min-h-[300px]">
                <img 
                  src={slideImages[0]} 
                  alt="Newsletter" 
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl relative"
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 z-20 bg-white/80 backdrop-blur-sm p-2 rounded-full text-[#5A4232] hover:bg-[#5A4232] hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="relative h-80">
                <img 
                  src={selectedPost.image} 
                  alt={selectedPost.title} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium mb-2">
                    {selectedPost.category}
                  </span>
                  <h2 className="text-3xl font-serif text-white">{selectedPost.title}</h2>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <img 
                      src={selectedPost.avatar || slideImages[0]} 
                      alt={selectedPost.author} 
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium text-[#5A4232]">{selectedPost.author}</p>
                      <p className="text-sm text-gray-500">
                        {new Date(selectedPost.date).toLocaleDateString('en-US', { 
                          day: 'numeric', 
                          month: 'long', 
                          year: 'numeric' 
                        })}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="p-2 rounded-full bg-[#F5E9DA] text-[#5A4232]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </button>
                    <button className="p-2 rounded-full bg-[#F5E9DA] text-[#5A4232]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </button>
                    <button className="p-2 rounded-full bg-[#F5E9DA] text-[#5A4232]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                
                <article className="prose prose-lg prose-headings:font-serif prose-headings:text-[#5A4232] prose-p:text-[#7A6A5A] max-w-none">
                  <p className="text-[#4B3B2A] whitespace-pre-line leading-relaxed">{selectedPost.content}</p>
                </article>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-serif text-[#5A4232] mb-3">Related Articles</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Aromatherapy', 'Sustainable Living', 'Craftsmanship', 'Natural Ingredients'].map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-[#F5E9DA] text-[#5A4232] rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Blog;



