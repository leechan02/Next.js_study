'use client';
import { useEffect, useState } from "react";

export default function Tomato() {
  const [movies, setMovies] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const getMovies = async () => {
    const response = await fetch("https://nomad-movies.nomadcoders.workers.dev/movies");
    const json = await response.json();
    setMovies(json);
    setIsLoading(false);
  }
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      <div>{isLoading ? "Loading..." : JSON.stringify(movies)}</div>
    </div>
  );
}
