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
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#FFF8F2]/90 backdrop-blur-xl border border-[#5A4232]/10 rounded-2xl p-6 max-w-md w-full relative shadow-xl"
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
                <p><strong>Fragrance Notes:</strong> {selectedProduct.fragranceNotes.join(', ')}</p>
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

export default OccultCandlesPage;


