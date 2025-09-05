import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';
import { fragrances } from '../data/fragrances'; // Ensure each fragrance has a `category` key

const FragranceGuide = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
  'Rose',
  'Apple',
  'Lotus',
  'Green Apple',
  'Pepper Mint',
  'White Oudh',
  'Chocolate',
  'Myrrh',
  'Sandal Wood',
  'Pine',
  'Musk',
  'Water Melon',
  'Lemon Grass',
  'Mahogany',
  'Rosemary',
  'Basil',
  'Neroli',
  'Lily of Valley',
  'Cedar Wood',
   'Vanilla',
  'Parijat',
  'Fennel',
  'Orange',
  'Jasmine',
  'Lavender',
  'Aphrodisia',
  'Bengal Tuberose',
  'Loban',
  'Thyme',
  'Lemon',
  'Banana',
  'Pumpkin',
  'Citronella',
  'Cardamom',
  'Baby Powder',
  'Mogra',
  'Coffee',
  'Vetiver',
  'Nutmeg',
  'Marigold',
  'Patchouli',
  'Eucalyptus',
  'Ocean Breeze',
  'Nargis',
  'Dunhill',
  'Mango',
  'Juniper',
  'Camphor',
  'Bergamot',
  'Ylang Ylang',
  'Cinnamon',
  ];

  // Disable scroll when modal is open
  useEffect(() => {
    if (showFilters) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showFilters]);

  return (
    <div className="min-h-screen pt-20 bg-[#FFF8F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-[#5A4232] mb-4">
              Fragrance Guide
            </h1>
            <p className="text-[#7A6A5A] max-w-2xl mx-auto text-lg leading-relaxed">
              Discover the  art of fragrance layering and explore the elegant notes that define our signature scents.
            </p>
          </div>

          {/* All Filters Button */}
          <div className="flex justify-center mb-12 relative z-50">
            <div className="relative">
              <button
                onClick={() => setShowFilters((prev) => !prev)}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5E9DA] text-[#5A4232] hover:bg-[#e8d9c5] transition"
              >
                <Filter className="w-4 h-4" />
                {selectedCategory === 'All' ? 'All Filters' : selectedCategory}
              </button>
            </div>
          </div>

          {/* Fixed Filter Modal */}
          {showFilters && (
            <div
              className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center px-4"
              onClick={() => setShowFilters(false)}
            >
              <div
                className="w-[90%] max-w-5xl p-6 rounded-xl backdrop-blur-md bg-[#5A4232]/30 shadow-xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <h2 className="text-lg font-serif text-white mb-4 text-center">Select a Category</h2>
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
            </div>
          )}

          {/* Fragrance Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {fragrances
              .filter((fragrance) =>
                selectedCategory === 'All'
                  ? true
                  : fragrance.category === selectedCategory
              )
              .map((fragrance) => (
                <motion.div
                  key={fragrance.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white/40 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2">
                    {/* Image */}
                    <div className="relative h-64 sm:h-full">
                      <img
                        src={fragrance.image}
                        alt={fragrance.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-8 flex flex-col justify-center">
                      <h2 className="text-2xl font-serif font-bold text-[#5A4232] mb-3">
                        {fragrance.name}
                      </h2>
                      <p className="text-[#6B5849] text-sm mb-4 leading-relaxed">
                        {fragrance.description}
                      </p>
                      <span className="inline-block px-4 py-1 bg-[#F5E9DA] text-[#5A4232] rounded-full text-xs font-medium mb-4 w-max shadow-sm">
                        {fragrance.mood}
                      </span>

                      {/* Notes */}
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-serif font-medium text-[#5A4232] mb-1">Top Notes</h3>
                          <div className="flex flex-wrap gap-2">
                            {fragrance.topNotes.map((note, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-[#C9A66B]/10 text-[#C9A66B] rounded-full text-sm"
                              >
                                {note}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h3 className="font-serif font-medium text-[#5A4232] mb-1">Middle Notes</h3>
                          <div className="flex flex-wrap gap-2">
                            {fragrance.middleNotes.map((note, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-[#5A4232]/10 text-[#5A4232] rounded-full text-sm"
                              >
                                {note}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h3 className="font-serif font-medium text-[#5A4232] mb-1">Base Notes</h3>
                          <div className="flex flex-wrap gap-2">
                            {fragrance.baseNotes.map((note, index) => (
                              <span
                              
                                key={index}
                                className="px-3 py-1 bg-[#A8B5A2]/10 text-[#A8B5A2] rounded-full text-sm"
                              >
                                {note}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FragranceGuide;


