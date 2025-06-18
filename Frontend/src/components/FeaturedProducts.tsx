import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

import jarcandles from '../images1/jarcandles.png';
import metalcraft from '../images1/metalcraft.png';
import halloween from '../images1/halloween.png';
import valentine from '../images1/valentine.png';
import piller from '../images1/piller.png';
import teracotta from '../images1/teracotta.png';
import bathsalt from '../images1/bathsalts.png';
import homedecor from '../images1/homedecor.png';
import ceramicsjars from '../images1/ceramicjars.png';
import medicinaloils from '../images1/medicinaloil.png';
import pinecones from '../images1/pinecones.png';
import resinheart from '../images1/resinheart.png';
import resintray from '../images1/resintrays.png';
const products = [
  {
    id: 1,
    name: 'Jar Candles',
   
    image: jarcandles,
    rating: 5,
  },
  {
    id: 2,
    name: 'Metal Craft Candles',
    
    image: metalcraft,
    rating: 4,
  },
  {
    id: 3,
    name: 'Halloween Candles',
    
    image: halloween,
    rating: 5,
  },
  {
    id: 4,
    name: 'Vallentine Candles',
   
    image: valentine,
    rating: 5,
  },
  {
    id: 5,
    name: 'piller Candles',
    
    image: piller,
    rating: 5,
  },
  {
    id: 6,
    name: 'Teracotta Candles',
    
    image: teracotta,
    rating: 5,
  },
  {
    id: 7,
    name: 'Bath Salt Candles',
    
    image: bathsalt,
    rating: 5,
  },
  {
    id: 8,
    name: 'Home Decor Candles',
    
    image: homedecor,
    rating: 5,
  },
  {
    id: 9,
    name: 'Ceramic Jars Candles',
    
    image: ceramicsjars,
    rating: 5,
  },
  {
    id: 10,
    name: 'Medicinal Oils ',
    
    image: medicinaloils,
    rating: 5,
  },
  {
    id: 11,
    name: 'Pinecones Candles',
    
    image: pinecones,
    rating: 5,
  },
  {
    id: 12,
    name: 'Resin Heart Candles',
    
    image: resinheart,
    rating: 5,
  },
  {
    id: 13,
    name: 'Resin Tray Candles',
    
    image: resintray,
    rating: 5,
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-white">
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
              <div key={product.id} className="group">
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
    </section>
  );
};

export default FeaturedProducts;