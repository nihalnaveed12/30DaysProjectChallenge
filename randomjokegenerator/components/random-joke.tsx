"use client";

import { useState, useEffect } from "react";

interface JokeResponse {
  setup: string;
  punchline: string;
}

export default function RandomJoke() {
  const [joke, setJoke] = useState<string>("");

  useEffect(() => {
    fetchJoke();
  }, []);

  async function fetchJoke(): Promise<void> {
    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      const data: JokeResponse = await response.json();
      console.log(data)
      setJoke(`${data.punchline} - ${data.setup}`);
    } catch (error) {
      setJoke("failed to load to jokes");
    }
  }

  return (
    <div className="flex flex-col justify-center bg-blue-500 h-screen items-center">
      <div className="bg-white rounded-md h-auto w-full max-w-md text-black p-2 text-2xl font-bold font-sans">
        <h1>Random Joke Generator</h1>
        <div className="bg-[#f5f5f5] rounded-lg p-6 mb-6 text-[#555] text-lg m-4">
        {joke || "Loading..."}
      </div>
      <button
        onClick={fetchJoke}
        className="bg-blue-500 p-1 mt-4 mb-2 rounded-md"
      >
        😂 Get New Joke 😂
      </button>
      </div>
    </div>
  );
}
