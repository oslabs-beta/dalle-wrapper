import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import App from './App';
import Login from './Login';
import Register from './Register';
import ImageGenerator from './ImageGenerator';


const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={< Login />} />
                <Route path="/login" element={<Register />} />
                <Route path="/img" element={<ImageGenerator />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;


