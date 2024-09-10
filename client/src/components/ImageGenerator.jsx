import React, { useState } from 'react';

const ImageGenerator = () => {
    const [prompt, setPrompt] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const generateImage = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch('http://localhost:3000/generate-image', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ prompt, api_name: 'A' }),
            });
            const data = await response.json();
            setImageUrl(data.imageUrl);
        } catch (error) {
            console.error('Error generating image:', error);
        }
    };

    return (
        <div>
            <h2>Generate an Image</h2>
            <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Enter prompt"
            />
            <button onClick={generateImage}>Generate</button>
            {imageUrl && <img src={imageUrl} alt="Generated" />}
        </div>
    );
};

export default ImageGenerator;
