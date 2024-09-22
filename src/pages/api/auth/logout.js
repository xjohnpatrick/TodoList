// src/pages/api/auth/logout.js
import { verifyToken } from '../../../utils/jwt';
import { destroyCookie } from 'nookies';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Verify and decode the token from cookies
      const token = req.cookies.token;
      if (token) {
        await verifyToken(token);
      }

      // Clear the cookie or session
      destroyCookie({ res }, 'token');

      res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
      console.error('Error logging out:', error);
      res.status(500).json({ message: 'Error logging out', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
