// src/pages/api/auth/signin.js
import User from '../../../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }

      const token = jwt.sign({ userId: user.id }, 'your_jwt_secret', { expiresIn: '30d' });

      res.status(200).json({
        message: 'Login successful',
        token,
        user: {
          firstName: user.firstName,
          email: user.email
        }
      });
    } catch (error) {
      res.status(500).json({ message: 'Error logging in', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
