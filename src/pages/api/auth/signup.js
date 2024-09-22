// src/pages/api/auth/signup.js
import User from '../../../models/User';
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, email, password } = req.body;

    // Validate input
    if (!firstName || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    try {
      // Check if user already exists
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        return res.status(400).json({ message: 'Email already exists. Please log in with your registered email.' });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 12);

      // Create a new user
      const user = await User.create({ firstName, email, password: hashedPassword });

      res.status(201).json({ message: 'User created', user });
    } catch (error) {
      console.error('Error creating user:', error.message);
      res.status(500).json({ message: 'Error creating user', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
