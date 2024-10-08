import React from "react";
import { API_URL } from "../app/(home)/page";
import styles from "../styles/movieInfo.module.css"

export async function getMovie(id: string) {
  return fetch(`${API_URL}/${id}`).then((response) => response.json());
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className={styles.container}>
      <img src={movie.poster_path} alt={movie.title} className={styles.poster}/>
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>⭐️ {movie.vote_average.toFixed()}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target={"_blank"}>Homepage &rarr;</a>
      </div>
    </div>
  );
}
