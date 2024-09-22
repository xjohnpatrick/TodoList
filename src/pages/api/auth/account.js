// src/pages/api/auth/account.js
import User from '../../../models/User';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const token = req.headers.authorization?.split(' ')[1]; // Get the token from the Authorization header

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized, no token found' });
    }

    try {
      // Verify the token
      const decoded = jwt.verify(token, 'your_jwt_secret');
      const user = await User.findByPk(decoded.userId); 

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Return user information
      res.status(200).json({
        email: user.email,
      });
    } catch (error) {
      return res.status(500).json({ message: 'Failed to authenticate token', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
