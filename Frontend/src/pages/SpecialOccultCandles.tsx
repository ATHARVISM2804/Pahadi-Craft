import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { useNavigate } from 'react-router-dom';

const occultCandles = [
  {
    id: 'occult1',
    name: 'Witch Candle',
    description: 'Infused with ancient ritual herbs for meditation.',
    image: 'https://res.cloudinary.com/dwkexvdus/image/upload/v1756711581/20240911_162213_jsfnxx.jpg',
    category: 'Occult',
    price: 799,
    fragranceNotes: ['Frankincense', 'Myrrh'],
    burnTime: '40 hours',
    weight: '200g',
  },
  {
    id: 'occult2',
    name: 'Star of David Candle ',
    description: 'A sacred candle symbolizing protection and spirituality.',
    image: 'https://res.cloudinary.com/dwkexvdus/image/upload/v1756711575/IMG-20231211-WA0053_fxtdku.jpg',
    category: 'Occult',
    price: 999,
    fragranceNotes: ['Lavender', 'Jasmine'],
    burnTime: '50 hours',
    weight: '250g',
  },
  {
    id: 'occult3',
    name: 'Skull Candle',
    description: 'Embrace the power of transformation and protection.',
    image: 'https://res.cloudinary.com/dwkexvdus/image/upload/v1756711585/WhatsApp_Image_2023-07-09_at_9.54.08_AM_1_m70sfo.jpg',
    category: 'Occult',
    price: 899,
    fragranceNotes: ['Black Rose', 'Patchouli'],
    burnTime: '45 hours',
    weight: '220g',
  },
  {
    id: 'occult4',
    name: 'Wolf Candle',
    description: 'Channel the spirit of the wild with this earthy blend.',
    image: 'https://res.cloudinary.com/dwkexvdus/image/upload/v1756711571/IMG-20220903-WA0024_cvnz8s.jpg',
    category: 'Occult',
    price: 1099,
    fragranceNotes: ['Amber', 'Sandalwood'],
    burnTime: '55 hours',
    weight: '240g',
  },
  {
    id: 'occult5',
    name: 'Male Cat Candle',
    description: 'Invoke mystery and independence with this unique scent.',
    image: 'https://res.cloudinary.com/dwkexvdus/image/upload/v1756711607/IMG-20231211-WA0059_wwlnvl.jpg',
    category: 'Occult',
    price: 950,
    fragranceNotes: ['Vanilla', 'Blue Lotus'],
    burnTime: '42 hours',
    weight: '210g',
  },
  {
    id: 'occult6',
    name: 'Couple Candle',
    description: 'Perfect for rituals of love and harmony.',
    image: 'https://res.cloudinary.com/dwkexvdus/image/upload/v1756711635/20210523_103702_rvwhvv.jpg',
    category: 'Occult',
    price: 875,
    fragranceNotes: ['Mugwort', 'Cedar'],
    burnTime: '48 hours',
    weight: '230g',
  },
  {
    id: 'occult7',
    name: 'Skull Candle',
    description: 'A powerful symbol for transformation and protection.',
    image: 'https://res.cloudinary.com/dwkexvdus/image/upload/v1756711584/0045_p1iwhe.jpg',
    category: 'Occult',
    price: 1199,
    fragranceNotes: ['Cinnamon', 'Clove'],
    burnTime: '60 hours',
    weight: '280g',
  },
  {
    id: 'occult8',
    name: '1',
    description: 'A powerful symbol for transformation and protection.',
    image: 'https://res.cloudinary.com/dwkexvdus/image/upload/v1756711612/WhatsApp_Image_2023-07-09_at_9.54.06_AM_qu0fc8.jpg',
    category: 'Occult',
    price: 1199,
    fragranceNotes: ['Cinnamon', 'Clove'],
    burnTime: '60 hours',
    weight: '280g',
  },
  {
    id: 'occult9',
    name: '2',
    description: 'A powerful symbol for transformation and protection.',
    image: 'https://res.cloudinary.com/dwkexvdus/image/upload/v1756711602/41Mt-y4RacL._AC_UL600_SR480_600__krujhj.jpg',
    category: 'Occult',
    price: 1199,
    fragranceNotes: ['Cinnamon', 'Clove'],
    burnTime: '60 hours',
    weight: '280g',
  },
  {
    id: 'occult10',
    name: '3',
    description: 'A powerful symbol for transformation and protection.',
    image: 'https://res.cloudinary.com/dwkexvdus/image/upload/v1756711597/IMG_20220928_112545_406_jpx0f6.jpg',
    category: 'Occult',
    price: 1199,
    fragranceNotes: ['Cinnamon', 'Clove'],
    burnTime: '60 hours',
    weight: '280g',
  },
  {
    id: 'occult11',
    name: '4',
    description: 'A powerful symbol for transformation and protection.',
    image: 'https://res.cloudinary.com/dwkexvdus/image/upload/v1756711641/IMG_20221003_002729_443_xtouwq.jpg',
    category: 'Occult',
    price: 1199,
    fragranceNotes: ['Cinnamon', 'Clove'],
    burnTime: '60 hours',
    weight: '280g',
  },
  {
    id: 'occult12',
    name: '5',
    description: 'A powerful symbol for transformation and protection.',
    image: 'https://res.cloudinary.com/dwkexvdus/image/upload/v1756711588/IMG-20220903-WA0013_jev8gm.jpg',
    category: 'Occult',
    price: 1199,
    fragranceNotes: ['Cinnamon', 'Clove'],
    burnTime: '60 hours',
    weight: '280g',
  },
  {
    id: 'occult13',
    name: '6',
    description: 'A powerful symbol for transformation and protection.',
    image: 'https://res.cloudinary.com/dwkexvdus/image/upload/v1756711632/WhatsApp_Image_2023-12-30_at_10.09.17_172fc788_qtgctp.jpg',
    category: 'Occult',
    price: 1199,
    fragranceNotes: ['Cinnamon', 'Clove'],
    burnTime: '60 hours',
    weight: '280g',
  },
  {
    id: 'occult14',
    name: '7',
    description: 'A powerful symbol for transformation and protection.',
    image: 'https://res.cloudinary.com/dwkexvdus/image/upload/v1756711631/IMG_20220509_221731_000_eyks1u.jpg',
    category: 'Occult',
    price: 1199,
    fragranceNotes: ['Cinnamon', 'Clove'],
    burnTime: '60 hours',
    weight: '280g',
  },
  {
    id: 'occult15',
    name: '8',
    description: 'A powerful symbol for transformation and protection.',
    image: 'https://res.cloudinary.com/dwkexvdus/image/upload/v1756711643/0037_zski2i.jpg',
    category: 'Occult',
    price: 1199,
    fragranceNotes: ['Cinnamon', 'Clove'],
    burnTime: '60 hours',
    weight: '280g',
  },
  {
    id: 'occult16',
    name: '9',
    description: 'A powerful symbol for transformation and protection.',
    image: 'https://res.cloudinary.com/dwkexvdus/image/upload/v1756711622/20241206_131746_cd7gj9.jpg',
    category: 'Occult',
    price: 1199,
    fragranceNotes: ['Cinnamon', 'Clove'],
    burnTime: '60 hours',
    weight: '280g',
  },
  {
    id: 'occult17',
    name: '10',
    description: 'A powerful symbol for transformation and protection.',
    image: 'https://res.cloudinary.com/dwkexvdus/image/upload/v1756711620/0043_el4bjl.jpg',
    category: 'Occult',
    price: 1199,
    fragranceNotes: ['Cinnamon', 'Clove'],
    burnTime: '60 hours',
    weight: '280g',
  },
  {
    id: 'occult18',
    name: '11',
    description: 'A powerful symbol for transformation and protection.',
    image: 'https://res.cloudinary.com/dwkexvdus/image/upload/v1756711604/hug_candle_oxmu2c.jpg',
    category: 'Occult',
    price: 1199,
    fragranceNotes: ['Cinnamon', 'Clove'],
    burnTime: '60 hours',
    weight: '280g',
  },
  {
    id: 'occult19',
    name: '12',
    description: 'A powerful symbol for transformation and protection.',
    image: 'https://res.cloudinary.com/dwkexvdus/image/upload/v1756711587/0040_n6zcsk.jpg',
    category: 'Occult',
    price: 1199,
    fragranceNotes: ['Cinnamon', 'Clove'],
    burnTime: '60 hours',
    weight: '280g',
  },
  {
    id: 'occult20',
    name: '13',
    description: 'A powerful symbol for transformation and protection.',
    image: 'https://res.cloudinary.com/dwkexvdus/image/upload/v1756711631/CV-21583442-key_uprbz2.jpg',
    category: 'Occult',
    price: 1199,
    fragranceNotes: ['Cinnamon', 'Clove'],
    burnTime: '60 hours',
    weight: '280g',
  },
  {
    id: 'occult21',
    name: '14',
    description: 'A powerful symbol for transformation and protection.',
    image: 'https://res.cloudinary.com/dwkexvdus/image/upload/v1756711611/WhatsApp_Image_2023-07-09_at_9.54.04_AM_1_zxplpy.jpg',
    category: 'Occult',
    price: 1199,
    fragranceNotes: ['Cinnamon', 'Clove'],
    burnTime: '60 hours',
    weight: '280g',
  },
   {
    id: 'occult22',
    name: '15',
    description: 'A powerful symbol for transformation and protection.',
    image: 'https://res.cloudinary.com/dwkexvdus/image/upload/v1756711630/IMG_20220509_221632_975_jebotu.jpg',
    category: 'Occult',
    price: 1199,
    fragranceNotes: ['Cinnamon', 'Clove'],
    burnTime: '60 hours',
    weight: '280g',
  },
   {
    id: 'occult23',
    name: '16',
    description: 'A powerful symbol for transformation and protection.',
    image: 'https://res.cloudinary.com/dwkexvdus/image/upload/v1756711590/IMG-20231211-WA0058_kroptw.jpg',
    category: 'Occult',
    price: 1199,
    fragranceNotes: ['Cinnamon', 'Clove'],
    burnTime: '60 hours',
    weight: '280g',
  },
   {
    id: 'occult24',
    name: '17',
    description: 'A powerful symbol for transformation and protection.',
    image: 'https://res.cloudinary.com/dwkexvdus/image/upload/v1756711572/0042_l7ling.jpg',
    category: 'Occult',
    price: 1199,
    fragranceNotes: ['Cinnamon', 'Clove'],
    burnTime: '60 hours',
    weight: '280g',
  },
   {
    id: 'occult25',
    name: '18',
    description: 'A powerful symbol for transformation and protection.',
    image: 'https://res.cloudinary.com/dwkexvdus/image/upload/v1756711595/IMG-20221009-WA0003_jchrcl.jpg',
    category: 'Occult',
    price: 1199,
    fragranceNotes: ['Cinnamon', 'Clove'],
    burnTime: '60 hours',
    weight: '280g',
  },
   {
    id: 'occult26',
    name: '19',
    description: 'A powerful symbol for transformation and protection.',
    image: 'https://res.cloudinary.com/dwkexvdus/image/upload/v1756711624/IMG-20221221-WA0014_pfck7k.jpg',
    category: 'Occult',
    price: 1199,
    fragranceNotes: ['Cinnamon', 'Clove'],
    burnTime: '60 hours',
    weight: '280g',
  },
   {
    id: 'occult27',
    name: '20',
    description: 'A powerful symbol for transformation and protection.',
    image: 'https://res.cloudinary.com/dwkexvdus/image/upload/v1756711572/IMG_20221003_001553_513_odhb42.jpg',
    category: 'Occult',
    price: 1199,
    fragranceNotes: ['Cinnamon', 'Clove'],
    burnTime: '60 hours',
    weight: '280g',
  },
   {
    id: 'occult28',
    name: '21',
    description: 'A powerful symbol for transformation and protection.',
    image: 'https://res.cloudinary.com/dwkexvdus/image/upload/v1756711602/IMG-20210526-WA0037_ljll5a.jpg',
    category: 'Occult',
    price: 1199,
    fragranceNotes: ['Cinnamon', 'Clove'],
    burnTime: '60 hours',
    weight: '280g',
  },
   {
    id: 'occult29',
    name: '22',
    description: 'A powerful symbol for transformation and protection.',
    image: 'https://res.cloudinary.com/dwkexvdus/image/upload/v1756711647/IMG_20220509_222153_232_yh9id0.jpg',
    category: 'Occult',
    price: 1199,
    fragranceNotes: ['Cinnamon', 'Clove'],
    burnTime: '60 hours',
    weight: '280g',
  },
    {
    id: 'occult30',
    name: '23',
    description: 'A powerful symbol for transformation and protection.',
    image: 'https://res.cloudinary.com/dwkexvdus/image/upload/v1756711589/IMG-20231211-WA0098_jssrbq.jpg',
    category: 'Occult',
    price: 1199,
    fragranceNotes: ['Cinnamon', 'Clove'],
    burnTime: '60 hours',
    weight: '280g',
  },
  {
    id: 'occult31',
    name: '24',
    description: 'A powerful symbol for transformation and protection.',
    image: 'https://res.cloudinary.com/dwkexvdus/image/upload/v1756711573/IMG_20221002_160524_481_or6r2e.jpg',
    category: 'Occult',
    price: 1199,
    fragranceNotes: ['Cinnamon', 'Clove'],
    burnTime: '60 hours',
    weight: '280g',
  },
  {
    id: 'occult32',
    name: '25',
    description: 'A powerful symbol for transformation and protection.',
    image: 'https://res.cloudinary.com/dwkexvdus/image/upload/v1756711620/IMG-20231211-WA0054_lnbldc.jpg',
    category: 'Occult',
    price: 1199,
    fragranceNotes: ['Cinnamon', 'Clove'],
    burnTime: '60 hours',
    weight: '280g',
  },
  
];

const OccultCandlesPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addItem } = useCartStore();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    addItem(product);
  };

  return (
    <div className="min-h-screen pt-20 bg-[#3E2A1F] px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto py-10"
      >
        {/* Back to Shop Button */}
        <div className="mb-6">
          <button
            onClick={() => navigate('/shop')}
            className="bg-[#F5E9DA] text-[#5A4232] px-4 py-2 rounded-full font-medium hover:bg-[#e8d9c5] transition"
          >
            ← Back to Shop
          </button>
        </div>

        <h1 className="text-4xl font-serif text-white text-center mb-4 tracking-wide">
          OCCULT CANDLES
        </h1>
        <p className="text-center text-[#E5D8CC] max-w-2xl mx-auto mb-10 text-base font-light">
          Discover our mystical collection of handcrafted occult candles designed<br />
          to enhance energy, intuition, and sacred rituals.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {occultCandles.map((product) => (
            <motion.div
              key={product.id}
              className="bg-[#F5E9DA] rounded-xl shadow hover:shadow-md cursor-pointer overflow-hidden transition-all"
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedProduct(product)}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 object-contain"
              />
              <div className="p-4">
                <h3 className="text-xl font-serif text-[#5A4232] font-semibold mb-1">{product.name}</h3>
                <p className="text-sm text-[#6B5849] mb-2">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-base font-semibold text-[#C9A66B]">₹{product.price}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(product);
                    }}
                    className="bg-[#5A4232] text-white text-sm px-4 py-1 rounded-full hover:bg-[#7a5b45] transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              className="bg-gradient-to-b from-[#FFF8F2] to-[#F6EFE8] rounded-2xl overflow-hidden max-w-md w-full relative shadow-2xl"
              initial={{ scale: 0.9, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h2 className="text-3xl font-serif font-bold text-white mb-1">
                      {selectedProduct.name}
                    </h2>
                    <div className="inline-block bg-[#C9A66B] px-3 py-1 rounded-full text-white text-sm font-medium">
                      ₹{selectedProduct.price}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 bg-black/30 text-white p-1.5 rounded-full hover:bg-black/50 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xs uppercase tracking-wider text-[#6B5849]/80 font-medium mb-1.5">Description</h3>
                  <p className="text-[#5A4232] text-sm">{selectedProduct.description}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/50 backdrop-blur-sm rounded-xl p-3 border border-[#E0D5C8]">
                    <h3 className="text-xs uppercase tracking-wider text-[#6B5849]/80 font-medium mb-1">Fragrance</h3>
                    <div className="flex flex-wrap gap-1">
                      {selectedProduct.fragranceNotes.map((note, index) => (
                        <span key={index} className="bg-[#F5E9DA] text-[#5A4232] text-xs px-2 py-1 rounded-md">
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-white/50 backdrop-blur-sm rounded-xl p-3 border border-[#E0D5C8]">
                    <h3 className="text-xs uppercase tracking-wider text-[#6B5849]/80 font-medium mb-1">Category</h3>
                    <p className="text-[#5A4232] font-medium">{selectedProduct.category}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm border-t border-[#E0D5C8] pt-4">
                  <div>
                    <span className="text-[#6B5849]/80 mr-2">Burn Time:</span>
                    <span className="text-[#5A4232] font-medium">{selectedProduct.burnTime}</span>
                  </div>
                  <div>
                    <span className="text-[#6B5849]/80 mr-2">Weight:</span>
                    <span className="text-[#5A4232] font-medium">{selectedProduct.weight}</span>
                  </div>
                </div>
                
                <button
                  onClick={() => {
                    handleAddToCart(selectedProduct);
                    setSelectedProduct(null);
                  }}
                  className="w-full mt-5 bg-[#5A4232] hover:bg-[#4A3222] text-white py-3 rounded-xl font-medium transition-colors flex items-center justify-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                  Add to Cart
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OccultCandlesPage;


