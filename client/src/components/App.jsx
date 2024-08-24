// App.jsx
import React, { useState } from 'react';
const api_key = process.env.OPENAI_API_KEY;

function App() {
  const [promptState, updatePrompt] = useState('Type a Prompt');
  const [imageUrlState, setImageUrl] = useState(
    'https://upload.wikimedia.org/wikipedia/commons/7/79/M%C3%B6bius_Strip.jpg'
  );

  const dalle = async () => {
    const url = 'https://api.openai.com/v1/images/generations';
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${api_key}`,
      },
      body: JSON.stringify({
        prompt: promptState,
        n: 1,
        size: '1024x1024',
      }),
    });
    const data = await response.json();
    console.log(data);
    setImageUrl(data.data[0].url);
  };

  return (
    <>
      <h1>{promptState}</h1>
      <img src={imageUrlState} width='512'></img>
      <input
        type='label'
        value={promptState}
        onChange={(e) => updatePrompt(e.target.value)}
      ></input>
      <button onClick={dalle}>submit</button>
    </>
  );
}

export default App;

//  <Route path="/myCloset" element={<MyCloset />} />
