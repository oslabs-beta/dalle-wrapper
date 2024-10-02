import React, { useState } from 'react';
//import { useAuth } from './AuthContext';
import ImageGenerator from './ImageGenerator';

const App = () => {
  //const { logout } = useAuth();
  return (
    <div>
      <h1>Welcome to Image Generator</h1>
      {/* <button onClick={logout}>Logout</button> */}
      <ImageGenerator />
    </div>
  );
};

export default App;
