import React from 'react';
import { createRoot } from 'react-dom/client';
import { AuthProvider } from './components/AuthContext'; // Import AuthProvider
import AppRouter from './components/AppRouter'; // Import the router
import App from './components/App'; 

const root = createRoot(document.getElementById('root'));
root.render(
  <App/>
  
    // <AuthProvider>
    //   <AppRouter /> 
    // </AuthProvider>
);
