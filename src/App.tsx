import React from 'react';
import './App.css';
import { Route, Routes, Navigate, Link } from 'react-router-dom';
import HomePage from "./components/HomePage.tsx";
import Login from "./components/Login.tsx";
import SessionStorageManager from './components/SessionStorageManager.tsx';

const isAuthenticated = () => {
  return sessionStorage.getItem('jwtToken') !== null;
};

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  if (!isAuthenticated()) {
    alert("You must log in to access this page.");
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
};

const App: React.FC = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | {' '}
        <Link to="/session-manager">Session Manager</Link> | {' '}
        <Link to="/login">Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/session-manager"
          element={
            <ProtectedRoute>
              <SessionStorageManager />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
