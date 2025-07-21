import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, X } from 'lucide-react';

// Cloudinary image URLs (replace with your actual URLs)
const products = [
  {
    id: 1,
    name: 'Jar Candles',
    image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1753096995/can15_tln5og.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Metal Craft Candles',
    image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1753096995/can12_bzgaxj.jpg',
    rating: 4,
  },
  {
    id: 3,
    name: 'Halloween Candles',
    image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1753096995/can16_le1ntm.jpg',
    rating: 5,
  },
  {
    id: 4,
    name: 'Vallentine Candles',
    image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1753096996/can14_fys6qm.jpg',
    rating: 5,
  },
  {
    id: 5,
    name: 'Piller Candles',
    image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1753096996/can13_fazqwv.jpg',
    rating: 5,
  },
  {
    id: 6,
    name: 'Teracotta Candles',
    image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1753096996/can8_obuvsd.jpg',
    rating: 5,
  },
  {
    id: 7,
    name: 'Bath Salt Candles',
    image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1753096996/can7_vjg6bb.jpg',
    rating: 5,
  },
  {
    id: 8,
    name: 'Home Decor Candles',
    image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1753097000/can2_q0yxea.jpg',
    rating: 5,
  },
  {
    id: 9,
    name: 'Ceramic Jars Candles',
    image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1753097003/can5_iseqj9.jpg',
    rating: 5,
  },
  {
    id: 10,
    name: 'Medicinal Oils',
    image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1753097027/can1_stsbgg.jpg',
    rating: 5,
  },
  {
    id: 11,
    name: 'Pinecones Candles',
    image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1753099813/IMG-20241017-WA0051_pxvmdl.jpg',
    rating: 5,
  },
  {
    id: 12,
    name: 'Resin Heart Candles',
    image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1753097040/can9_cz0p98.jpg',
    rating: 5,
  },
  {
    id: 13,
    name: 'Resin Tray Candles',
    image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1753099813/IMG-20231211-WA0085_tj09nc.jpg',
    rating: 5,
  },
  {
    id: 13,
    name: 'Resin Tray Candles',
    image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1753099813/IMG-20231211-WA0009_jbkx8r.jpg',
    rating: 5,
  },
  {
    id: 13,
    name: 'Resin Tray Candles',
    image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1753099817/Picture_087_d0ub70.png',
    rating: 5,
  },
];

const FeaturedProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-serif text-center text-[#5A4232] mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                    <h3 className="text-xl font-serif text-white">{product.name}</h3>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex">
                        {[...Array(product.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-[#C9A66B] fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#F3E9DD] p-6 rounded-xl max-w-md w-full relative shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-3 right-3 text-[#3B2A1A] hover:text-black transition"
              >
                <X className="w-5 h-5" />
              </button>

              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-56 object-cover rounded-lg mb-4 shadow-md"
              />

              <h3 className="text-2xl font-serif text-[#3B2A1A] font-semibold mb-2">
                {selectedProduct.name}
              </h3>

              <div className="flex mb-3">
                {[...Array(selectedProduct.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#C9A66B] fill-current" />
                ))}
              </div>

              <p className="text-sm text-[#3B2A1A] leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FeaturedProducts;

