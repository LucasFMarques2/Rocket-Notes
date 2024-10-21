// src/routes/app.routes.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { New } from '../pages/New';
import { Home } from '../pages/Home';
import { Details } from '../pages/Details';
import { Profile } from '../pages/Profile';
import { useAuth } from '../hooks/auth'; 
import { AdminHome } from '../pages/AdminHome';

export function AppRoutes() {
  const { isAdmin} = useAuth(); 


  return (
    <Routes>

      <Route path="/" element={isAdmin ? <Navigate to="/admin" replace /> : <Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/admin" element={<AdminHome />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
