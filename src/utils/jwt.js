// src/utils/jwt.js
import jwt from 'jsonwebtoken';

export const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, 'your_jwt_secret', (err, decoded) => {
      if (err) {
        reject(err); // Token is invalid or expired
      } else {
        resolve(decoded); // Token is valid, return the decoded payload
      }
    });
  });
};
