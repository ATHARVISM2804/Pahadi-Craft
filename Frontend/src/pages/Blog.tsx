import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { blogPosts } from '../data/blog';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const openModal = (post) => setSelectedPost(post);
  const closeModal = () => setSelectedPost(null);

  return (
    <div className="min-h-screen pt-20 bg-[#FFF8F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif text-[#5A4232] mb-4">Our Blog</h1>
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
                className="cursor-pointer bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-[#C9A66B] text-white px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span>•</span>
                    <span>{post.author}</span>
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
      className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={closeModal}
    >
      <motion.div
        className="bg-[#FCE9D8] max-w-2xl w-full rounded-xl overflow-hidden shadow-lg relative" // skin-tone background
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={selectedPost.image}
          alt={selectedPost.title}
          className="w-full h-64 object-cover rounded-t-xl"
        />
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

    </div>
  );
};

export default Blog;
