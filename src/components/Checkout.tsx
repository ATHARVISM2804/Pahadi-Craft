import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useCartStore } from '../store/cartStore';
import { Address } from '../types';


const Checkout: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Address>();
  const { items, total, clearCart } = useCartStore();
  const [isProcessing, setIsProcessing] = useState(false);


  const onSubmit = async (data: Address) => {
    setIsProcessing(true);
    try {
      // Here you would integrate with your payment processor
      // For example, create a Stripe payment intent
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulated API call
      clearCart();
      // Redirect to success page
    } catch (error) {
      console.error('Payment failed:', error);
    } finally {
      setIsProcessing(false);
    }
  };


  return (
    <div className="min-h-screen pt-20 bg-[#FFF8F2]">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-sm p-6"
        >
          <h1 className="text-3xl font-serif text-[#5A4232] mb-8">Checkout</h1>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-serif text-[#5A4232] mb-4">Shipping Address</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Street Address
                  </label>
                  <input
                    {...register('street', { required: true })}
                    className="input"
                    placeholder="123 Main St"
                  />
                  {errors.street && (
                    <span className="text-red-500 text-sm">This field is required</span>
                  )}
                </div>


                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      City
                    </label>
                    <input
                      {...register('city', { required: true })}
                      className="input"
                      placeholder="City"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      State
                    </label>
                    <input
                      {...register('state', { required: true })}
                      className="input"
                      placeholder="State"
                    />
                  </div>
                </div>


                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      ZIP Code
                    </label>
                    <input
                      {...register('zipCode', { required: true })}
                      className="input"
                      placeholder="ZIP Code"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Country
                    </label>
                    <input
                      {...register('country', { required: true })}
                      className="input"
                      placeholder="Country"
                    />
                  </div>
                </div>


                <button
                  type="submit"
                  disabled={isProcessing}
                  className={`w-full btn btn-primary ${
                    isProcessing ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isProcessing ? 'Processing...' : `Pay $${total.toFixed(2)}`}
                </button>
              </form>
            </div>


            <div>
              <h2 className="text-xl font-serif text-[#5A4232] mb-4">Order Summary</h2>
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.product.id} className="flex items-center gap-4">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <h3 className="font-medium">{item.product.name}</h3>
                      <p className="text-sm text-gray-500">
                        Quantity: {item.quantity}
                      </p>
                      <p className="text-[#C9A66B]">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}


                <div className="border-t pt-4 mt-4">
                  <div className="flex justify-between text-lg font-medium">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};


export default Checkout;