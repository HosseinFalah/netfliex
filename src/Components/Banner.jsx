import React, { useState, useEffect } from 'react';
import requests from '../Services/Requests';
import axios from '../Services/axios';
import './Banner.css'

const Banner = () => {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            return await axios.get(requests.fetchNetflixOriginals)
                .then(response => setMovie(response.data.results[Math.floor(Math.random() * response.data.results.length - 1)]))
        }
        fetchData()
    }, [])

    console.log(movie);
    const Truncate = (title, numberTitle) => {
        return title?.length > numberTitle ? title.substr(0, numberTitle - 1) + "..." : title;
    }

    return (
        <header className="banner">
                <img src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`} className="img__fluid" alt={movie?.name} />
                {/* Background Images */}
                <div className="banner__contents">
                    {/* Title */}
                    <h1 className="banner__title">{movie?.name || movie?.original_name}</h1>
                    {/* Button */}
                    <div className="banner__buttons">
                        <button className="banner__button">Play</button>
                        <button className="banner__button">My List</button>
                    </div>
                    {/* Description */}
                    <h1 className="banner__description">{Truncate(movie?.overview, 150)}</h1>
                </div>
                <div className="banner__fadeBottim"></div>
        </header>
    )
}

export default Banner