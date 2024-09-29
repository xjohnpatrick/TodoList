// src/app/auth/sign-up/signUpUtils.js
'use client'
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

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

export const signUpFunctions = () => {
  const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const [loading, setLoading] = useState(false);
    const [disable, setDisable] = useState(false);
    const [checkboxChecked, setCheckboxChecked] = useState(false);

    const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
    const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

    const router = useRouter();

    const clearInputFirstName = () => {
        setFirstName('');
    }
    const clearInputEmail = () => {
        setEmail('');
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        checkPasswordMatch(e.target.value, confirmPassword);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        checkPasswordMatch(password, e.target.value);
    };

    const checkPasswordMatch = (password, confirmPassword) => {
        if (confirmPassword && password !== confirmPassword) {
            setError("Passwords do not match");
            setDisable(true);
        } else {
            setError("");
            setDisable(false);
        }
    };

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        if (!checkboxChecked) {
            setError('You must agree to the Terms and Conditions and Privacy Policy.');
            setLoading(false);
            setTimeout(() => {
                setError(''); // Clear the error message
              }, 3000); 
            return;
          }
        try {
          await signUp(firstName, email, password);
          setFirstName('');
          setEmail('');
          setPassword('');
          // Redirect upon successful sign-up
          router.push('/auth/sign-in');
        } catch (error) {
            setError(error.message);
            setTimeout(() => {
                setError(''); // Clear the error message
              }, 3000); 
          } finally {
            setLoading(false);
          }
      };

        const openPrivacyModal = () => setIsPrivacyModalOpen(true);
        const closePrivacyModal = () => setIsPrivacyModalOpen(false);

        const openTermsModal = () => setIsTermsModalOpen(true);
        const closeTermsModal = () => setIsTermsModalOpen(false);

  return {
    firstName, setFirstName,
    email, setEmail,
    password, setPassword,
    confirmPassword, setConfirmPassword,
    error,
    loading,
    disable,
    checkboxChecked, setCheckboxChecked,
    isPrivacyModalOpen,
    isTermsModalOpen,
    clearInputFirstName,
    clearInputEmail,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handleSubmit,
    openPrivacyModal,
    closePrivacyModal,
    openTermsModal,
    closeTermsModal,
    }
}