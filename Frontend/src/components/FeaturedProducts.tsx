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
    name: 'Glass Jar Candles',
    image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1753096995/can12_bzgaxj.jpg',
    rating: 4,
    description: 'These elegant glass jar candles are perfect for any occasion. Made with high-quality wax and infused with delightful fragrances, they create a warm and inviting atmosphere in your home.',
  },
  {
    id: 3,
    name: 'Resin Jar Candles',
    image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1753096995/can16_le1ntm.jpg',
    rating: 5,
    description: 'Our resin jar candles feature hand-crafted resin containers that add a touch of artistry to your candle experience. Each jar is unique, showcasing beautiful patterns and colors that enhance the ambiance of any space.',
  },
  {
    id: 4,
    name: 'Gift Hamper Candles',
    image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1753096996/can14_fys6qm.jpg',
    rating: 5,
    description: 'Our curated gift hamper candles make the perfect present for loved ones. Each hamper includes a selection of our best-selling candles, beautifully packaged to delight and inspire relaxation and joy.',
  },
  {
    id: 5,
    name: 'Cochlet Jar Candles',
    image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1753096996/can13_fazqwv.jpg',
    rating: 5,
    description: 'Experience the charm of our cochlet jar candles, inspired by traditional Himalayan designs. Hand-poured with care, these candles offer a unique blend of rustic aesthetics and modern scents to elevate your home decor.',
  },
  {
    id: 6,
    name: 'Goblet Candles',
    image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1753096996/can8_obuvsd.jpg',
    rating: 5,
    description: 'Our goblet candles are crafted in elegant goblet-shaped containers, perfect for adding a touch of sophistication to any setting. Made with high-quality wax and infused with rich fragrances, they create a luxurious ambiance for special occasions or everyday indulgence.',
  },
  {
    id: 7,
    name: 'Crystal Jar Candles',
    image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1753096996/can7_vjg6bb.jpg',
    rating: 5,
    description: 'These exquisite crystal jar candles are housed in beautifully faceted glass containers that catch the light and enhance the candle\'s glow. Each candle is hand-poured with premium wax and scented with captivating fragrances, making them a stunning addition to any room. ',
  },
  {
    id: 8,
    name: 'Peony Candles',
    image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1753097000/can2_q0yxea.jpg',
    rating: 5,
    description: 'Our peony candles capture the delicate beauty and fragrance of blooming peonies. Hand-poured with care, these candles fill your space with a fresh, floral aroma that evokes the essence of a spring garden in full bloom.',
  },
  {
    id: 9,
    name: 'Concrete Jar Candles',
    image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1753097003/can5_iseqj9.jpg',
    rating: 5,
    description: 'Our concrete jar candles are housed in hand-painted vessels created by local potters. After your candle has burned through, the beautiful ceramic container can be washed and repurposed as a planter or decorative item.',
  },
  {
    id: 10,
    name: 'Concrete Boat Candles',
    image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1753097027/can1_stsbgg.jpg',
    rating: 5,
    description: 'Our concrete boat candles feature hand-crafted concrete vessels shaped like traditional boats. Each candle is poured with premium wax and infused with soothing scents, creating a serene ambiance that transports you to tranquil waters',
  },
  {
    id: 11,
    name: 'Buddha Candles',
    image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1753099813/IMG-20241017-WA0051_pxvmdl.jpg',
    rating: 5,
    description: 'These serene Buddha candles are designed to inspire mindfulness and tranquility. Hand-poured with care, they emit a calming fragrance that enhances meditation practices and creates a peaceful atmosphere in any space.',
  },
  {
    id: 12,
    name: 'Metal Katori Candles',
    image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1753097040/can9_cz0p98.jpg',
    rating: 5,
    description: 'Our metal katori candles are crafted in traditional Indian katori (bowl) shapes, made from durable metals like brass or copper. Each candle is hand-poured with premium wax and infused with rich, exotic scents that evoke the warmth and vibrancy of Indian culture.  ',
  },
  {
    id: 13,
    name: 'Bell Jar Candles',
    image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1753099813/IMG-20231211-WA0085_tj09nc.jpg',
    rating: 5,
    description: 'Our bell jar candles feature elegant glass domes that create a captivating display while protecting the candle from dust. Hand-poured with premium wax and infused with delightful fragrances, these candles add a touch of sophistication to any room.',
  },
  {
    id: 14,
    name: 'Delight Candles',
    image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1753099813/IMG-20231211-WA0009_jbkx8r.jpg',
    rating: 5,
    description: 'Our delight candles are designed to bring joy and warmth to your space. Hand-poured with care, these candles feature vibrant colors and uplifting scents that create a cheerful ambiance, perfect for brightening any room or occasion.',
  },
  {
    id: 15,
    name: 'Wedding Dress Candles',
    image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1753099817/Picture_087_d0ub70.png',
    rating: 5,
    description: ' Our wedding dress candles are exquisitely crafted to resemble elegant bridal gowns. Hand-poured with premium wax and infused with romantic fragrances, these candles make a perfect gift for brides-to-be or a charming addition to wedding decor.',
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

