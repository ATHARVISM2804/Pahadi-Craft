import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Award, Users } from 'lucide-react';
import aboutimg from '../images1/homedecor.png';
import decor1 from '../Home Decor Candles/decor5.jpg';
import decor2 from '../Home Decor Candles/decor6.jpg';
import decor3 from '../Home Decor Candles/decor7.jpg';
import craft from '../Metal Craft Candles/carft6.jpeg'

const About = () => {
  return (
    <div className="min-h-screen pt-20 bg-[#FFF8F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif text-[#5A4232] mb-4">Our Story</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Established in the year of 2017, We “Pahadicraft” Wholesaler, Trader and Distributor of Decorative Candles, Scented Candles, Pillar Candles, Religious Candle, Healing Candle, Wax Candle, Figruine Candles, T Light Candle, Birthday Candle, Decorative Candle Jar, Aromatherapy Candles, Christmas Tree, Handmade Candle, Heart Shaped Candle, Mithai Candles, Gel Aroma Candle, Votive Candle and many more. We direct all our activities to cater the expectations of customers by providing them excellent quality products as per their gratification.
            </p >
            <p className="text-gray-600 max-w-2xl mx-auto">For our accomplishment story, we are grateful to Miss. Neety Arya, whose continual backing and direction have been useful to us for attaining exponential development in the current market.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src={aboutimg}
                alt="Candle making process"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-serif text-[#5A4232] mb-4">Crafted with Love</h2>
              <p className="text-gray-600 mb-6">
                Every candle is carefully handcrafted in our studio using the finest natural ingredients and premium fragrances. Our commitment to quality ensures that each product meets our high standards of excellence.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: Heart, label: 'Handcrafted', value: '100%' },
                  { icon: Award, label: 'Premium Quality', value: 'Guaranteed' },
                  { icon: Users, label: 'Happy Customers', value: '10,000+' },
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <stat.icon className="w-8 h-8 text-[#C9A66B] mx-auto mb-2" />
                    <div className="font-serif text-[#5A4232] text-lg">{stat.value}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-serif text-[#5A4232] mb-8 text-center">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Selection',
                  description: 'We carefully select the finest natural ingredients and premium fragrances.',
                  image: aboutimg,
                },
                {
                  title: 'Crafting',
                  description: 'Each candle is hand-poured with attention to detail and quality.',
                  image: decor2,
                },
                {
                  title: 'Testing',
                  description: 'Rigorous quality control ensures the perfect burn and fragrance.',
                  image: craft,
                },
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-serif text-[#5A4232] text-xl mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;