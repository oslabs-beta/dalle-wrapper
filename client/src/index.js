import React from 'react';
import { createRoot } from 'react-dom/client';
import { AuthProvider } from './components/AuthContext'; // Import AuthProvider
import AppRouter from './components/AppRouter'; // Import the router

const root = createRoot(document.getElementById('root'));
root.render(
    <AuthProvider>
      <AppRouter /> 
    </AuthProvider>
);
