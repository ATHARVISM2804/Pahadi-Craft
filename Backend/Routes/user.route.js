const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Create or update user on login or profile update
router.post('/save', async (req, res) => {
  try {
    const { uid, email, name, photo, phone } = req.body;
    if (!uid || !email) {
      return res.status(400).json({ success: false, message: 'uid and email are required' });
    }

    let user = await User.findOne({ uid });
    if (!user) {
      user = await User.create({
        uid,
        email,
        name: name || '',
        photo: photo || '',
        phone: phone || ''
      });
    } else {
      // Use findByIdAndUpdate with { new: true } to get the updated document
      user = await User.findByIdAndUpdate(
        user._id,
        {
          email,
          name: name || user.name,
          photo: photo || user.photo,
          phone: phone || user.phone
        },
        { new: true }
      );
    }

    res.json({ success: true, user });
  } catch (err) {
    console.error('Error saving user:', err);
    res.status(500).json({ success: false, message: 'Server error while saving user' });
  }
});

module.exports = router;
