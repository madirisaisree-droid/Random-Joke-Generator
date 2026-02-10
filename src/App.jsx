import React, { useState } from "react";
import "./App.css";

function App() {
  const [joke, setJoke] = useState("Click the button to get a joke 😂");
  const [loading, setLoading] = useState(false);

  const getJoke = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      const data = await response.json();
      setJoke(`${data.setup} 🤔 ${data.punchline} 😂`);
    } catch (error) {
      setJoke("Something went wrong 😢 Try again!");
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <h1>😂 Random Joke Generator</h1>
      <div className="card">
        {loading ? "Loading joke..." : joke}
      </div>
      <button onClick={getJoke}>Get Joke</button>
    </div>
  );
}

export default App;