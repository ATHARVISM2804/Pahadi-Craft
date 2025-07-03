import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { blogPosts } from '../data/blog';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const openModal = (post) => setSelectedPost(post);
  const closeModal = () => setSelectedPost(null);

  const featuredPost = blogPosts[0];
  const slideImages = blogPosts.slice(0, 6).map((post) => post.image);

  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: ['0%', '-50%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
          duration: 30,
        },
      },
    });
  }, [controls]);

  return (
    <div className="min-h-screen pt-20 bg-[#FFF8F2]">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-[#FFF0E6] to-[#FFF8F2]">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          className="text-5xl font-serif text-[#5A4232] mb-4"
        >
          Insights, Tips & Stories Behind Our Products
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.4, duration: 0.6 }} 
          className="text-gray-700 text-lg"
        >
          Explore inspiration and creativity from the heart of Pahadicraft.
        </motion.p>
      </section>

      {/* Featured Blog Banner */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="relative rounded-xl overflow-hidden shadow-xl mb-12">
          <img
            src={featuredPost.image}
            alt={featuredPost.title}
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-6">
            <h2 className="text-3xl font-serif text-white mb-2">{featuredPost.title}</h2>
            <p className="text-white text-sm max-w-xl">{featuredPost.excerpt}</p>
          </div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-[#5A4232] mb-4">✨ Latest from the Blog</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover tips, tricks, and inspiration for creating the perfect ambiance in your space.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={() => openModal(post)}
                className="cursor-pointer bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all"
              >
                <div className="relative h-48">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 bg-[#C9A66B] text-white px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                    <img src={post.avatar} alt={post.author} className="w-6 h-6 rounded-full" />
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <h2 className="text-xl font-serif text-[#5A4232] mb-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-[#FCE9D8] max-w-2xl w-full rounded-xl overflow-hidden shadow-lg relative"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-64 object-cover rounded-t-xl" />
              <div className="p-6">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>{new Date(selectedPost.date).toLocaleDateString()}</span>
                  <span>{selectedPost.author}</span>
                </div>
                <h2 className="text-2xl font-serif text-[#5A4232] mb-4">{selectedPost.title}</h2>
                <p className="text-[#4B3B2A] whitespace-pre-line">{selectedPost.content}</p>
                <button
                  onClick={closeModal}
                  className="mt-6 px-4 py-2 bg-[#C9A66B] text-white rounded hover:bg-[#5A4232] transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sliding Image Section */}
      <div className="mt-20 max-w-7xl mx-auto px-4">
        <h3 className="text-2xl font-serif text-[#5A4232] mb-6 text-center flex items-center justify-center gap-2">
          <span role="img" aria-label="gallery">🖼️</span> Captured Moments
        </h3>

        <div className="relative overflow-hidden group rounded-xl border border-[#EBD6BD] shadow-md">
          <motion.div
            className="flex gap-4 w-max"
            animate={controls}
            onMouseEnter={() => controls.stop()}
            onMouseLeave={() => {
              controls.start({
                x: ['0%', '-50%'],
                transition: {
                  x: {
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'linear',
                    duration: 30,
                  },
                },
              });
            }}
          >
            {[...slideImages, ...slideImages].map((src, idx) => (
              <motion.img
                key={idx}
                src={src}
                alt={`Slide ${idx + 1}`}
                className="h-48 w-72 object-cover rounded-lg shadow-md"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-20 py-12 bg-[#FFF0E6] rounded-lg mx-6">
        <h3 className="text-2xl font-serif text-[#5A4232] mb-4">
          Loved this story? Shop our hand-picked collection inspired by it.
        </h3>
        <a
          href="/shop"
          className="inline-block px-6 py-3 bg-[#C9A66B] text-white rounded hover:bg-[#5A4232] transition-colors"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default Blog;


