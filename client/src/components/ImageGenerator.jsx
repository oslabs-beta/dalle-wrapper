import React, { useState } from 'react';

const ImageGenerator = () => {
    const [prompt, setPrompt] = useState('');
    const [imageUrl, setImageUrl] = useState('https://upload.wikimedia.org/wikipedia/commons/7/79/M%C3%B6bius_Strip.jpg');

    const generateImage = async () => {
        try {
            const token = process.env.OPENAI_API_KEY
            const response = await fetch('http://localhost:2024/generate-image', {
                //const response = await fetch('https://api.openai.com/v1/images/generations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    prompt,
                //   useTimeBasedTier: false // if ommitted will use budget based, as if false 
                }),
            });
            const data = await response.json();
            console.log('OpenAI response:', data);
            console.log('tier used:', data.tier);
            setImageUrl(data.data[0].url);
        } catch (error) {
            console.error('error generating image:', error);
        }
    };

    return (
        <div>
            <h2>{ prompt }</h2>
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