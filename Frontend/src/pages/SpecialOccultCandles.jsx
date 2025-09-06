import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { useNavigate } from 'react-router-dom';

const occultCandles = [
  {
    id: 'occult1',
    name: 'Mystic Flame',
    description: 'Infused with ancient ritual herbs for meditation.',
    image: 'https://images.unsplash.com/photo-1612201678889-d4426b8c6221',
    category: 'Occult',
    price: 799,
    fragranceNotes: ['Frankincense', 'Myrrh'],
    burnTime: '40 hours',
    weight: '200g',
  },
  {
    id: 'occult2',
    name: 'Lunar Whisper',
    description: 'Moon-blessed candle to enhance intuition and calm.',
    image: 'https://images.unsplash.com/photo-1612201679319-4bb9a1c1b0a4',
    category: 'Occult',
    price: 999,
    fragranceNotes: ['Lavender', 'Jasmine'],
    burnTime: '50 hours',
    weight: '250g',
  },
  {
    id: 'occult3',
    name: 'Shadow Bloom',
    description: 'Embrace transformation with this dark floral blend.',
    image: 'https://images.unsplash.com/photo-1612201680049-2e7c3b6b0a73',
    category: 'Occult',
    price: 899,
    fragranceNotes: ['Black Rose', 'Patchouli'],
    burnTime: '45 hours',
    weight: '220g',
  },
  {
    id: 'occult4',
    name: 'Eclipse Ember',
    description: 'A rare candle crafted during a lunar eclipse.',
    image: 'https://images.unsplash.com/photo-1504198458649-3128b932f49b',
    category: 'Occult',
    price: 1099,
    fragranceNotes: ['Amber', 'Sandalwood'],
    burnTime: '55 hours',
    weight: '240g',
  },
  {
    id: 'occult5',
    name: 'Celestial Veil',
    description: 'Invoke tranquility with stardust-infused wax.',
    image: 'https://images.unsplash.com/photo-1607082352197-d7636e3f3288',
    category: 'Occult',
    price: 950,
    fragranceNotes: ['Vanilla', 'Blue Lotus'],
    burnTime: '42 hours',
    weight: '210g',
  },
  {
    id: 'occult6',
    name: 'Witch’s Breath',
    description: 'Summon magic with this powerful herbal blend.',
    image: 'https://images.unsplash.com/photo-1572099606228-5e8e05086b8d',
    category: 'Occult',
    price: 875,
    fragranceNotes: ['Mugwort', 'Cedar'],
    burnTime: '48 hours',
    weight: '230g',
  },
  {
    id: 'occult7',
    name: 'Phoenix Ash',
    description: 'Rise anew with this fiery, purifying candle.',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7b4f59fc',
    category: 'Occult',
    price: 1199,
    fragranceNotes: ['Cinnamon', 'Clove'],
    burnTime: '60 hours',
    weight: '280g',
  },
];

const OccultCandlesPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addItem } = useCartStore();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    addItem(product);
  };

  return (
    <div className="min-h-screen pt-20 bg-[#3E2A1F] px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto py-10"
      >
        {/* Back to Shop Button */}
        <div className="mb-6">
          <button
            onClick={() => navigate('/shop')}
            className="bg-[#F5E9DA] text-[#5A4232] px-4 py-2 rounded-full font-medium hover:bg-[#e8d9c5] transition"
          >
            ← Back to Shop
          </button>
        </div>

        <h1 className="text-4xl font-serif text-white text-center mb-4 tracking-wide">
          OCCULT CANDLES
        </h1>
        <p className="text-center text-[#E5D8CC] max-w-2xl mx-auto mb-10 text-base font-light">
          Discover our mystical collection of handcrafted occult candles designed<br />
          to enhance energy, intuition, and sacred rituals.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {occultCandles.map((product) => (
            <motion.div
              key={product.id}
              className="bg-[#F5E9DA] rounded-xl shadow hover:shadow-md cursor-pointer overflow-hidden transition-all"
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

      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              className="bg-gradient-to-b from-[#FFF8F2] to-[#F6EFE8] rounded-2xl overflow-hidden max-w-md w-full relative shadow-2xl"
              initial={{ scale: 0.9, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h2 className="text-3xl font-serif font-bold text-white mb-1">
                      {selectedProduct.name}
                    </h2>
                    <div className="inline-block bg-[#C9A66B] px-3 py-1 rounded-full text-white text-sm font-medium">
                      ₹{selectedProduct.price}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 bg-black/30 text-white p-1.5 rounded-full hover:bg-black/50 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xs uppercase tracking-wider text-[#6B5849]/80 font-medium mb-1.5">Description</h3>
                  <p className="text-[#5A4232] text-sm">{selectedProduct.description}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/50 backdrop-blur-sm rounded-xl p-3 border border-[#E0D5C8]">
                    <h3 className="text-xs uppercase tracking-wider text-[#6B5849]/80 font-medium mb-1">Fragrance</h3>
                    <div className="flex flex-wrap gap-1">
                      {selectedProduct.fragranceNotes.map((note, index) => (
                        <span key={index} className="bg-[#F5E9DA] text-[#5A4232] text-xs px-2 py-1 rounded-md">
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-white/50 backdrop-blur-sm rounded-xl p-3 border border-[#E0D5C8]">
                    <h3 className="text-xs uppercase tracking-wider text-[#6B5849]/80 font-medium mb-1">Category</h3>
                    <p className="text-[#5A4232] font-medium">{selectedProduct.category}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm border-t border-[#E0D5C8] pt-4">
                  <div>
                    <span className="text-[#6B5849]/80 mr-2">Burn Time:</span>
                    <span className="text-[#5A4232] font-medium">{selectedProduct.burnTime}</span>
                  </div>
                  <div>
                    <span className="text-[#6B5849]/80 mr-2">Weight:</span>
                    <span className="text-[#5A4232] font-medium">{selectedProduct.weight}</span>
                  </div>
                </div>
                
                <button
                  onClick={() => {
                    handleAddToCart(selectedProduct);
                    setSelectedProduct(null);
                  }}
                  className="w-full mt-5 bg-[#5A4232] hover:bg-[#4A3222] text-white py-3 rounded-xl font-medium transition-colors flex items-center justify-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                  Add to Cart
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OccultCandlesPage;


