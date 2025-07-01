import React from 'react';
import { motion } from 'framer-motion';
import { fragrances } from '../data/fragrances';

const FragranceGuide = () => {
  return (
    <div className="min-h-screen pt-20 bg-[#FFF8F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-[#5A4232] mb-4">
              Fragrance Guide
            </h1>
            <p className="text-[#7A6A5A] max-w-2xl mx-auto text-lg leading-relaxed">
              Discover the art of fragrance layering and explore the elegant notes that define our signature scents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {fragrances.map((fragrance) => (
              <motion.div
                key={fragrance.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/40 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* Image Section */}
                  <div className="relative h-64 sm:h-full">
                    <img
                      src={fragrance.image}
                      alt={fragrance.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content Section */}
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
