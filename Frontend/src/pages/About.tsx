import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Award, Users } from 'lucide-react';
import aboutimg from '../images1/homedecor.png';
import decor1 from '../Home Decor Candles/decor5.jpg';
import decor2 from '../Home Decor Candles/decor6.jpg';
import decor3 from '../Home Decor Candles/decor7.jpg';
import craft from '../Metal Craft Candles/carft6.jpeg';

const About = () => {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-[#FFF8F2] to-[#FCE9D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-20 px-4">
            <h1 className="text-5xl font-serif text-[#5A4232] mb-6">Our Story</h1>
            <p className="text-gray-700 max-w-4xl mx-auto text-lg leading-relaxed mb-4">
              Since 2017, <span className="font-bold text-[#5A4232]">Pahadicraft</span> has been a name synonymous with premium handcrafted candles. We proudly wholesale and distribute a vast collection including Scented, Decorative, Pillar, Healing, Aromatherapy, Gel Aroma, and Festive candles—each crafted to ignite emotions.
            </p>
            <p className="text-gray-700 max-w-4xl mx-auto text-lg leading-relaxed">
              Our success is guided by the unwavering vision of <span className="font-medium text-[#5A4232]">Miss Neety Arya</span>, whose dedication continues to inspire us in delivering joy, warmth, and elegance to homes across the country.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="rounded-3xl overflow-hidden shadow-2xl border border-[#EBD6BD]"
            >
              <img
                src={aboutimg}
                alt="Candle making process"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <div>
              <h2 className="text-3xl font-serif text-[#5A4232] mb-6">Crafted with Love</h2>
              <p className="text-gray-700 text-lg mb-8">
                Each candle is hand-poured using eco-friendly wax, essential oils, and a heart full of passion. Our artisans blend tradition and innovation to create timeless pieces for your space.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { icon: Heart, label: 'Handcrafted', value: '100%' },
                  { icon: Award, label: 'Premium Quality', value: 'Guaranteed' },
                  { icon: Users, label: 'Happy Customers', value: '10,000+' },
                ].map((stat, index) => (
                  <div key={index} className="bg-white/90 backdrop-blur-md text-center p-6 rounded-2xl shadow-md border border-[#EBD6BD]">
                    <stat.icon className="w-8 h-8 text-[#C9A66B] mx-auto mb-2" />
                    <div className="font-serif text-[#5A4232] text-xl font-medium">{stat.value}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white/90 rounded-3xl p-12 shadow-xl border border-[#EBD6BD]">
            <h2 className="text-4xl font-serif text-[#5A4232] mb-12 text-center">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  title: 'Selection',
                  description: 'Sourcing the finest wax, wicks, and fragrance oils that are safe and sustainable.',
                  image: aboutimg,
                },
                {
                  title: 'Crafting',
                  description: 'Hand-poured in small batches to ensure quality, consistency, and love in each candle.',
                  image: decor2,
                },
                {
                  title: 'Testing',
                  description: 'Each batch is rigorously tested for scent throw, burn quality, and customer delight.',
                  image: craft,
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all"
                >
                  <img
                    src={step.image}
                    alt={step.title}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-serif text-[#5A4232] text-xl mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
