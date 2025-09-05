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
    description: 'Our elegant jar candles are hand-poured using premium soy wax and natural essential oils. Each jar provides up to 40 hours of clean, aromatic burning time, making them perfect for creating a cozy atmosphere in any room.',
  },
  {
    id: 2,
    name: 'Metal Craft Candles',
    image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1753096995/can12_bzgaxj.jpg',
    rating: 4,
    description: 'These unique metal craft candles combine artisanal metalwork with high-quality wax. Each piece features intricate hand-hammered designs that cast beautiful shadows when lit, creating a stunning centerpiece for any table.',
  },
  {
    id: 3,
    name: 'Halloween Candles',
    image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1753096995/can16_le1ntm.jpg',
    rating: 5,
    description: 'Celebrate the spooky season with our Halloween-themed candles. Made with black and orange soy wax and infused with autumn spice scents like cinnamon, clove, and pumpkin, they\'re perfect for setting a haunting mood.',
  },
  {
    id: 4,
    name: 'Vallentine Candles',
    image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1753096996/can14_fys6qm.jpg',
    rating: 5,
    description: 'Express your love with our Valentine\'s collection. These romantic rose-scented candles come in heart shapes and rich red hues. Made with love and filled with dried rose petals, they make the perfect gift for your special someone.',
  },
  {
    id: 5,
    name: 'Piller Candles',
    image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1753096996/can13_fazqwv.jpg',
    rating: 5,
    description: 'Our classic pillar candles are dripless and long-lasting, providing elegant ambient lighting for any occasion. Each pillar is carefully crafted using traditional techniques and premium paraffin wax for a clean, slow burn.',
  },
  {
    id: 6,
    name: 'Teracotta Candles',
    image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1753096996/can8_obuvsd.jpg',
    rating: 5,
    description: 'Handcrafted in traditional terracotta pots by local artisans, these candles combine rustic charm with modern scents. The porous terracotta enhances fragrance diffusion while adding an earthy, timeless aesthetic to your home.',
  },
  {
    id: 7,
    name: 'Bath Salt Candles',
    image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1753096996/can7_vjg6bb.jpg',
    rating: 5,
    description: 'Elevate your bath ritual with our dual-purpose bath salt candles. As the candle burns, the surrounding bath salts infuse with essential oils. Once the candle is spent, use the therapeutic salts for a luxurious, relaxing soak.',
  },
  {
    id: 8,
    name: 'Home Decor Candles',
    image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1753097000/can2_q0yxea.jpg',
    rating: 5,
    description: 'Designed with interior aesthetics in mind, our home decor candles seamlessly blend into any style. These sculptural pieces double as art objects even when unlit, featuring unique shapes and textures that complement modern interiors.',
  },
  {
    id: 9,
    name: 'Ceramic Jars Candles',
    image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1753097003/can5_iseqj9.jpg',
    rating: 5,
    description: 'Our ceramic jar candles are housed in hand-painted vessels created by local potters. After your candle has burned through, the beautiful ceramic container can be washed and repurposed as a planter or decorative item.',
  },
  {
    id: 10,
    name: 'Medicinal Oils',
    image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1753097027/can1_stsbgg.jpg',
    rating: 5,
    description: 'Infused with therapeutic-grade essential oils known for their healing properties, our medicinal oil candles help create a restorative atmosphere. Choose from blends designed for relaxation, focus, energy, or respiratory support.',
  },
  {
    id: 11,
    name: 'Pinecones Candles',
    image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1753099813/IMG-20241017-WA0051_pxvmdl.jpg',
    rating: 5,
    description: 'Bringing the forest indoors, our pinecone candles are crafted around real pinecones gathered sustainably from mountain forests. They emit a wonderful woody scent reminiscent of alpine hikes and winter cabins.',
  },
  {
    id: 12,
    name: 'Resin Heart Candles',
    image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1753097040/can9_cz0p98.jpg',
    rating: 5,
    description: 'These romantic heart-shaped candles feature clear resin embedded with dried flowers and herbs. When lit, they cast a warm glow that illuminates the botanical elements within, creating a magical ambiance.',
  },
  {
    id: 13,
    name: 'Resin Tray Candles',
    image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1753099813/IMG-20231211-WA0085_tj09nc.jpg',
    rating: 5,
    description: 'Our resin tray candles combine functionality with beauty. The flat resin base incorporates natural elements like flowers and leaves, while the candle provides warm illumination. Perfect for creating an elegant tablescape or meditation space.',
  },
  {
    id: 14,
    name: 'Resin Tray Candles',
    image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1753099813/IMG-20231211-WA0009_jbkx8r.jpg',
    rating: 5,
    description: 'These artistic resin tray candles feature swirling colors and embedded botanical elements. Each piece is one-of-a-kind, handcrafted to create a stunning display that transforms any surface into a focal point of beauty and light.',
  },
  {
    id: 15,
    name: 'Resin Tray Candles',
    image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1753099817/Picture_087_d0ub70.png',
    rating: 5,
    description: 'Our premium resin tray candles are made with crystal-clear epoxy that showcases preserved wildflowers from the Himalayan foothills. These sophisticated pieces make excellent gifts and become cherished keepsakes long after the candle is gone.',
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
                {selectedProduct.description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FeaturedProducts;

