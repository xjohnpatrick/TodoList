// src/app/auth/sign-up/signUpFunctions.js
import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000';

export const signUp = async (firstName, email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/auth/signup`, {
      firstName,
      email,
      password,
    });

    return response.data;
  } catch (error) {
    // Handle different error types
    if (error.response) {
      // Server responded with a status other than 2xx
      const { status, data } = error.response;

      if (status === 400) {
        // Bad request (e.g., validation errors)
        console.error('Validation error:', data.message);
        throw new Error(data.message || 'Validation error occurred.'); 
      } else if (status === 409) {
        // Conflict (e.g., email already in use)
        console.error('Email already in use:', data.message);
        throw new Error('Email already in use. Please choose another.');
      } else {
        // Other server errors
        console.error('Server error:', data.message);
        throw new Error(data.message || 'An error occurred on the server. Please try again later.');
      }
    } else if (error.request) {
      // No response from the server (e.g., network issues)
      console.error('Network error:', error.message);
      throw new Error('Network error. Please check your internet connection.');
    } else {
      // Client-side or unknown errors
      console.error('Error:', error.message);
      throw new Error('An unexpected error occurred. Please try again.');
    }
  }
};
