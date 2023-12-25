import React, {useState, useEffect} from "react";
import styled from "styled-components";
import axios from "axios";
import MovieCard from "../Cards/MovieCard";
import './HompageSection.css'



const SectionContainer = () => {
    const [cartoons, setCartoons] = useState([])
    
    useEffect (() => {
        axios.get('https://jk-tv.netlify.app/cartoons/get_all').then((data) => {
            setCartoons(data.data)
        })
    }, [])
    
    
    return (
        <div className="Section-container">
            {cartoons.map((movie)=> (
            <MovieCard movie={movie}/>        
            ))}
        </div>
    )
}

export default SectionContainer;