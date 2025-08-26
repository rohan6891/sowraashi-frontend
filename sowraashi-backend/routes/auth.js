import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import dotenv from 'dotenv';
const router = express.Router();

dotenv.config()

// JWT Secret
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ message: 'Access token required' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid or expired token' });
    }
    req.user = user;
    next();
  });
};

// Initialize default users (admin and designer)
const initializeUsers = async () => {
  try {
    // Check if admin exists
    const adminExists = await User.findOne({ username: process.env.ADMIN_USERNAME || 'admin' });
    if (!adminExists) {
      const admin = new User({
        username: process.env.ADMIN_USERNAME || 'admin',
        password: process.env.ADMIN_PASSWORD || 'SecureAdminPassword123!',
        role: 'admin',
        name: 'Administrator',
        email: 'admin@sowraashi.com'
      });
      await admin.save();
      console.log('Admin user created with secure credentials');
    }

    // Check if designer exists
    const designerExists = await User.findOne({ username: process.env.DESIGNER_USERNAME || 'designer' });
    if (!designerExists) {
      const designer = new User({
        username: process.env.DESIGNER_USERNAME || 'designer',
        password: process.env.DESIGNER_PASSWORD || 'SecureDesignerPassword123!',
        role: 'designer',
        name: 'Designer',
        email: 'designer@sowraashi.com'
      });
      await designer.save();
      console.log('Designer user created with secure credentials');
    }
  } catch (error) {
    console.error('Error initializing users:', error);
  }
};

// Initialize users when the server starts
initializeUsers();

// Login route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Simple validation
  if (!username || !password) {
    return res.json({ message: 'Username and password required' });
  }

  try {
    // Find user
    const user = await User.findOne({ username });
    
    // Check if user exists and password matches
    if (user && user.password === password) {
      // Create simple token
      const token = jwt.sign(
        { userId: user._id, username: user.username, role: user.role },
        JWT_SECRET,
        { expiresIn: '24h' }
      );

      res.json({
        success: true,
        token,
        user: {
          id: user._id,
          username: user.username,
          role: user.role,
          name: user.name,
          email: user.email
        }
      });
    } else {
      res.json({ message: 'Invalid username or password' });
    }
  } catch (error) {
    console.log('Login error:', error);
    res.json({ message: 'Login failed' });
  }
});

// Get current user profile
router.get('/profile', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error('Profile error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Update user profile
router.put('/profile', authenticateToken, async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const user = await User.findById(req.user.userId);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update fields
    if (name) user.name = name;
    if (email) user.email = email;
    if (phone) user.phone = phone;

    await user.save();
    
    const userResponse = user.toObject();
    delete userResponse.password;
    
    res.json({
      message: 'Profile updated successfully',
      user: userResponse
    });

  } catch (error) {
    console.error('Profile update error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Change password
router.put('/change-password', authenticateToken, async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
      return res.status(400).json({ message: 'Current and new password are required' });
    }

    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Verify current password
    const isCurrentPasswordValid = user.comparePassword(currentPassword);
    if (!isCurrentPasswordValid) {
      return res.status(400).json({ message: 'Current password is incorrect' });
    }

    // Update password
    user.password = newPassword;
    await user.save();

    res.json({ message: 'Password changed successfully' });

  } catch (error) {
    console.error('Password change error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Verify token route
router.get('/verify', authenticateToken, (req, res) => {
  res.json({
    message: 'Token is valid',
    user: {
      userId: req.user.userId,
      username: req.user.username,
      role: req.user.role,
      name: req.user.name
    }
  });
});



export default router;
