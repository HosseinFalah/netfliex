import React, { useEffect, useState } from 'react';
import axios from '../Services/axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import "./Row.css";

const base_URL = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("")

    useEffect(() => {
        const featchData = async () => {
            return await axios.get(fetchUrl)
                .then(response => setMovies(response.data.results))
        }
        featchData()
    }, [fetchUrl])
    
    const opts = {
        heigth: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        }
    }

    const handleClick = async (movie) => {
        if (trailerUrl) {
            setTrailerUrl("")
            console.log(trailerUrl);
        } else {
            await movieTrailer(movie?.name)
            .then((url) => {

                    const urlParams = new URLSearchParams(new URL(url).search)
                    setTrailerUrl(urlParams.get("v"))
                })
                .catch((error) => console.log(error.message))
                
        }
    }

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {/* several row_poster(s) */}
                {movies.map(movie => (
                    <img key={movie.id} 
                         onClick={() => handleClick(movie)}
                         className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                         src={`${base_URL}${movie.poster_path}`} alt={movie.name} />
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    )
}

export default Row