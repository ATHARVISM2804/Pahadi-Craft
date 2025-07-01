import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, X } from 'lucide-react';
import { products, categories } from '../data/products';
import { useCartStore } from '../store/cartStore';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addItem } = useCartStore();

  const handleAddToCart = (product) => {
    addItem(product);
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-20 bg-[#FFF8F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-serif text-[#5A4232] mb-8 text-center">
            Our Collection
          </h1>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div className="relative">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5E9DA] text-[#5A4232] hover:bg-[#e8d9c5] transition"
              >
                <Filter className="w-4 h-4" />
                {selectedCategory === 'All' ? 'All Filters' : selectedCategory}
              </button>
              {showFilters && (
                <div className="absolute mt-3 z-10 w-[300px] sm:w-[500px] md:w-[700px] lg:w-[900px] p-4 rounded-xl backdrop-blur-md bg-[#5A4232]/30 shadow-xl">
                  <h2 className="text-lg font-serif text-white mb-4">Select a Category</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 max-h-[300px] overflow-y-auto">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          setSelectedCategory(category);
                          setShowFilters(false);
                        }}
                        className={`text-sm px-3 py-2 rounded-full transition ${
                          selectedCategory === category
                            ? 'bg-white text-[#5A4232]'
                            : 'bg-white/20 text-[#5A4232] hover:bg-white/30'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="relative w-full sm:w-1/2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C9A66B] focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-xl overflow-hidden shadow hover:shadow-md cursor-pointer transition-all"
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedProduct(product)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-60 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-serif text-[#5A4232] font-semibold mb-1">{product.name}</h3>
                  <p className="text-sm text-[#6B5849] mb-2">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-base font-semibold text-[#C9A66B]">₹{product.price}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(product);
                      }}
                      className="bg-[#5A4232] text-white text-sm px-4 py-1 rounded-full hover:bg-[#7a5b45] transition"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#FFF8F2]/70 backdrop-blur-xl border border-[#5A4232]/10 rounded-2xl p-6 max-w-md w-full relative shadow-xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-3 right-3 text-[#5A4232] hover:text-black"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-2xl font-serif font-bold text-[#5A4232] mb-1">
                {selectedProduct.name}
              </h2>
              <p className="text-sm text-[#6B5849] mb-4">{selectedProduct.description}</p>
              <div className="text-[#5A4232] space-y-1 text-sm">
                <p><strong>Category:</strong> {selectedProduct.category}</p>
                <p><strong>Fragrance Notes:</strong> {selectedProduct.fragranceNotes?.join(', ')}</p>
                <p><strong>Burn Time:</strong> {selectedProduct.burnTime}</p>
                <p><strong>Weight:</strong> {selectedProduct.weight}</p>
              </div>
              <div className="mt-4 text-lg font-bold text-[#C9A66B]">
                ₹{selectedProduct.price}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Shop;




