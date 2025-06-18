import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const UserProfile = () => {
  const { user, isAuthenticated, logout, updateUserProfile } = useAuth();
  const [activeTab, setActiveTab] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [displayName, setDisplayName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/auth');
      return;
    }
    if (user?.displayName) {
      setDisplayName(user.displayName);
    }
  }, [isAuthenticated, navigate, user]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!displayName.trim()) return;
    
    try {
      await updateUserProfile({ displayName });
      setIsEditing(false);
    } catch (error) {
      console.error('Profile update failed:', error);
    }
  };

  if (!isAuthenticated || !user) return null;

  return (
    <div className="max-w-7xl mx-auto py-20 px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex flex-col items-center">
              <img 
                className="w-32 h-32 rounded-full mb-4 object-cover"
                src={user.photoURL || '/default-avatar.png'} 
                alt={user.displayName || 'User'} 
              />
              <h2 className="text-xl font-semibold mb-2">
                {user.displayName || 'Anonymous User'}
              </h2>
              <p className="text-gray-600 text-sm">{user.email}</p>
              <p className="text-gray-600 text-sm">
                Member since {new Date(user.metadata.creationTime).toLocaleDateString()}
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Account Details</h3>
            <button className="w-full py-3 px-4 border border-gray-300 rounded-md mb-2 hover:bg-gray-50 transition-colors">
              Edit Profile
            </button>
            <button className="w-full py-3 px-4 border border-gray-300 rounded-md mb-2 hover:bg-gray-50 transition-colors">
              Change Password
            </button>
            {/* <button 
              onClick={handleLogout}
              className="w-full py-3 px-4 border border-red-500 text-red-500 rounded-md mb-2 hover:bg-red-50 transition-colors"
            >
              Delete Account
            </button> */}
            <button 
              onClick={handleLogout}
              className="w-full py-3 px-4 border border-red-500 text-red-500 rounded-md hover:bg-red-50 transition-colors"
            >
              LogOut 
            </button>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex border-b mb-6">
              {['Orders', 'Wishlist', 'Settings'].map((tab, index) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(index)}
                  className={`px-6 py-3 font-medium transition-colors
                    ${activeTab === index 
                      ? 'border-b-2 border-black' 
                      : 'text-gray-500 hover:text-gray-700'
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="tab-content">
              {activeTab === 0 && (
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Order History</h3>
                  {/* Add order history logic here */}
                  <p className="text-gray-600">No orders found.</p>
                </div>
              )}
              {activeTab === 1 && (
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Wishlist</h3>
                  {/* Add wishlist logic here */}
                  <p className="text-gray-600">Your wishlist is empty.</p>
                </div>
              )}
              {activeTab === 2 && (
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Profile Settings</h3>
                  <form onSubmit={handleProfileUpdate} className="grid gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Display Name
                      </label>
                      <input
                        type="text"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        value={user.email || ''}
                        disabled
                        className="w-full px-4 py-2 border rounded-md bg-gray-50"
                      />
                    </div>
                    <div className="flex justify-end gap-4">
                      <button
                        type="button"
                        onClick={() => setIsEditing(false)}
                        className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                      >
                        {isEditing ? 'Save Changes' : 'Edit'}
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
