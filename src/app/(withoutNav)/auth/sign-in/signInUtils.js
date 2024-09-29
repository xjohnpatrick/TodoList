// src/app/auth/sign-up/signInFunctions.js
'use client'
import axios from "axios";
import { useRouter } from 'next/navigation';
import { useState } from "react";

// Define the API base URL or use environment variables
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000';

// Function to handle sign-in
export const signIn = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/auth/signin`, {
      email,
      password,
    });

    // Handle successful response
    const { token } = response.data;
    // Store token in local storage or state management
    localStorage.setItem('token', token);

    return response.data;
  } catch (error) {
    // Handle network issues (e.g., no internet, server down)
    if (!error.response) {
      console.error('Network error: Could not connect to the server');
      throw new Error('Network error: Could not connect to the server. Please try again later.');
    }

    // Handle response errors (like 4xx and 5xx)
    if (error.response.status === 404) {
      console.error('User not found. Please sign up with your email.');
      throw new Error('User not found. Please sign up with your email.');
    } 
    if (error.response.status === 400) {
      console.error('Invalid credentials: Please check your email or password');
      throw new Error('Invalid credentials: Please check your email or password.');
    } else if (error.response.status === 500) {
      console.error('Server error: Something went wrong with the server or database');
      throw new Error('Server error: Please try again later.');
    } else {
      console.error('An unknown error occurred:', error.response.data.message || error.message);
      throw new Error(error.response.data.message || 'An unknown error occurred. Please try again.');
    }
  }
};

export const signInFunctions = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();
    const [loading, setLoading] = useState(false)

    const clearInput = () => {
        setEmail('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
          await signIn(email, password);
          router.push('/main/dashboard');
        } catch (error) {
          setError(error.message);
          setTimeout(() => {
            setError(''); // Clear the error message
          }, 3000); 
        } finally {
            setLoading(false);
        }
      };

      return {
        email, setEmail,
        password, setPassword,
        error,
        loading,
        handleSubmit,
        clearInput
      }
}
