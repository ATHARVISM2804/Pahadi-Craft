import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:pahadicraft@gmail.com?subject=Contact Form: ${formData.subject}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen pt-20 bg-[#FFF8F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif text-[#5A4232] mb-4">Contact Us</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have a question or custom request? We'd love to hear from you!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form Card */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[#5A4232] font-serif mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C9A66B]"
                  />
                </div>

                <div>
                  <label className="block text-[#5A4232] font-serif mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your email"
                    className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C9A66B]"
                  />
                </div>

                <div>
                  <label className="block text-[#5A4232] font-serif mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Subject of your message"
                    className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C9A66B]"
                  />
                </div>

                <div>
                  <label className="block text-[#5A4232] font-serif mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Type your message here..."
                    className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C9A66B]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#C9A66B] text-white py-3 rounded-full hover:bg-[#5A4232] transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Info / CTA Section */}
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h2 className="text-2xl font-serif text-[#5A4232] mb-4">Why Reach Out?</h2>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 rounded-full bg-[#C9A66B]" />
                    Inquire about a product or custom order
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 rounded-full bg-[#C9A66B]" />
                    Get updates on your order status
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 rounded-full bg-[#C9A66B]" />
                    Suggest ideas or give feedback
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 rounded-full bg-[#C9A66B]" />
                    Collaborate or partner with us
                  </li>
                </ul>
              </div>

              <div className="bg-[#5A4232] text-white rounded-lg p-6 shadow-sm">
                <h2 className="text-2xl font-serif mb-4">Need Immediate Help?</h2>
                <p className="mb-4">
                  Our team is here for you. If it's urgent, drop us a message on WhatsApp or Instagram.
                </p>
                <a
                  href="https://wa.me/917660077316"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#5A4232] px-6 py-2 rounded-full hover:bg-[#F5E9DA] transition-colors"
                >
                  Message on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
