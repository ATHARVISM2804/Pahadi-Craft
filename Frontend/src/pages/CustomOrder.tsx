import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CustomOrder = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fragrance: '',
    size: '8oz',
    container: 'glass',
    label: '',
    quantity: 1,
    specialInstructions: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = `
      Fragrance: ${formData.fragrance}
      Size: ${formData.size}
      Container: ${formData.container}
      Custom Label Text: ${formData.label}
      Quantity: ${formData.quantity}
      Special Instructions: ${formData.specialInstructions}
    `;
    window.location.href = `mailto:pahadicraft@gmail.com?subject=Custom Candle Order&body=${encodeURIComponent(body)}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const controls = useAnimation();
  const slideImages = [
    'https://res.cloudinary.com/dikisauij/image/upload/v1750225361/cld-sample-4.jpg',
    'https://res.cloudinary.com/dikisauij/image/upload/v1750225360/samples/dessert-on-a-plate.jpg',
    'https://res.cloudinary.com/dikisauij/image/upload/v1750225360/samples/cup-on-a-table.jpg',
    'https://res.cloudinary.com/dikisauij/image/upload/v1750225360/samples/coffee.jpg'
  ];

  useEffect(() => {
    controls.start({
      x: ['0%', '-50%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
          duration: 30,
        },
      },
    });
  }, [controls]);

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-[#FFF8F2] to-[#FCE9D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-5xl font-serif text-[#5A4232] mb-4 tracking-wide">Craft Your Signature Candle</h1>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto italic">
              Personalize every detail—from fragrance to finish—and create a candle that’s truly yours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-[#EBD6BD]">
              <form onSubmit={handleSubmit} className="space-y-6">
                {[{ label: 'Fragrance', name: 'fragrance', type: 'text', placeholder: 'Enter your desired fragrance' }, { label: 'Custom Label Text', name: 'label', type: 'text', placeholder: 'Enter label text' }, { label: 'Quantity', name: 'quantity', type: 'number', min: 1 }].map(({ label, name, type, placeholder, min }) => (
                  <div key={name}>
                    <label className="block text-[#5A4232] font-serif mb-2">{label}</label>
                    <input
                      type={type}
                      name={name}
                      value={formData[name]}
                      onChange={handleChange}
                      placeholder={placeholder}
                      min={min}
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C9A66B] focus:border-transparent"
                    />
                  </div>
                ))}

                {[{ label: 'Size', name: 'size', options: ['4oz', '8oz', '12oz', '16oz'] }, { label: 'Container', name: 'container', options: ['glass', 'ceramic', 'metal'] }].map(({ label, name, options }) => (
                  <div key={name}>
                    <label className="block text-[#5A4232] font-serif mb-2">{label}</label>
                    <select
                      name={name}
                      value={formData[name]}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C9A66B] focus:border-transparent"
                    >
                      {options.map(opt => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                ))}

                <div>
                  <label className="block text-[#5A4232] font-serif mb-2">Special Instructions</label>
                  <textarea
                    name="specialInstructions"
                    value={formData.specialInstructions}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Any special requests or instructions?"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C9A66B] focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#C9A66B] text-white py-3 rounded-full hover:bg-[#5A4232] transition-colors font-semibold"
                >
                  Submit Custom Order
                </button>
              </form>
            </div>

            <div className="space-y-10">
              <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-md border border-[#EBD6BD]">
                <h2 className="text-2xl font-serif text-[#5A4232] mb-4">Why Choose Custom?</h2>
                <ul className="space-y-4 text-gray-700">
                  {["Create a unique fragrance blend tailored to your preferences", "Choose from various container styles and sizes", "Add personal touches with custom labels and packaging", "Perfect for special events and gifting"].map((text, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-2 h-2 mt-2 rounded-full bg-[#C9A66B]" />
                      <p>{text}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#5A4232] text-white rounded-2xl p-6 shadow-md">
                <h2 className="text-2xl font-serif mb-4">Need Help?</h2>
                <p className="mb-4">
                  Our fragrance experts are here to help you create the perfect custom candle. Contact us for guidance and suggestions.
                </p>
                <button
                  onClick={() => navigate('/contact')}
                  className="bg-white text-[#5A4232] px-6 py-2 rounded-full hover:bg-[#F5E9DA] transition-colors"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>

          {/* Sliding Image Section */}
          <div className="mt-20 max-w-7xl mx-auto px-4">
            <h3 className="text-2xl font-serif text-[#5A4232] mb-6 text-center flex items-center justify-center gap-2">
              <span role="img" aria-label="gallery">🖼️</span> Captured Moments
            </h3>
            <div className="relative overflow-hidden group rounded-xl border border-[#EBD6BD] shadow-md">
              <motion.div
                className="flex gap-4 w-max"
                animate={controls}
                onMouseEnter={() => controls.stop()}
                onMouseLeave={() => {
                  controls.start({
                    x: ['0%', '-50%'],
                    transition: {
                      x: {
                        repeat: Infinity,
                        repeatType: 'loop',
                        ease: 'linear',
                        duration: 30,
                      },
                    },
                  });
                }}
              >
                {[...slideImages, ...slideImages].map((src, idx) => (
                  <motion.img
                    key={idx}
                    src={src}
                    alt={`Slide ${idx + 1}`}
                    className="h-48 w-72 object-cover rounded-lg shadow-md"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CustomOrder;


