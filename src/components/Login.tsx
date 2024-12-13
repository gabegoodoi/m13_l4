import React from "react";
import { useNavigate } from "react-router-dom";
import { saveTokenToSessionStorage } from './SessionStorageManager.tsx'; // Correct import

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: "mor_2314", 
          password: "83r5^_",  
        }),
      });

      const data = await response.json();

      if (response.ok && data.token) {
        console.log('Token received:', data.token);
        saveTokenToSessionStorage(data.token);
        navigate("/session-manager");
      } else {
        console.error('Login failed:', data);
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return <button onClick={handleLogin}>Log In</button>;
};

export default Login;
