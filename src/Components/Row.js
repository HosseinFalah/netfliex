import React, { useEffect, useState } from 'react';
import axios from '../Services/axios';
import "./Row.css";

const base_URL = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const featchData = async () => {
            return await axios.get(fetchUrl)
                .then(response => setMovies(response.data.results))
        }
        featchData()
    }, [fetchUrl])
    
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {/* several row_poster(s) */}
                {movies.map(movie => (
                    <img key={movie.id} 
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`${base_URL}${movie.poster_path}`} alt={movie.name} />
                ))}
            </div>
        </div>
    )
}

export default Row