import React, { useState } from 'react';

const ImageGenerator = () => {
    const [prompt, setPrompt] = useState('');
    const [imageUrl, setImageUrl] = useState('https://upload.wikimedia.org/wikipedia/commons/7/79/M%C3%B6bius_Strip.jpg');

    const generateImage = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch('http://localhost:3000/generate-image', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ prompt }),
            });
            const data = await response.json();
            setImageUrl(data.imageUrl);
        } catch (error) {
            console.error('Error generating image:', error);
        }
    };

    return (
        <div>
            <h2>Welcome to tha Wrapper</h2>
            <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Enter prompt"
            />
            <button onClick={generateImage}>Generate</button>
            <div>
                <img src={imageUrl} width="512" />
            </div>
        </div>
    );
};

export default ImageGenerator;