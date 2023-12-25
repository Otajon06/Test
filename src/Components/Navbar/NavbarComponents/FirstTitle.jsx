import React from "react";
import './FirstTitle.css'
import { useNavigate } from "react-router-dom";


const Titles = ['Films', 'Series', 'Cortoons', 'Action', 'Horor', 'Romance', 'War', 'Trending' ]


const FirstTitle = () => {
    const navigate = useNavigate()
    const HandleTitleClick = (el) => {
        console.log(el)
        // navigate(el.tolowerCase())
    }
    
    return (
        <div className="Fisrt-title">
            <h1 className="Logo">
                <h3>M</h3>
                <h3 className="Secend">M</h3>
                <h2>K</h2>
            </h1>
            {Titles.map((el) =>(
                <div className="Title" onClick={() => HandleTitleClick()}>{el}</div>
            ))} 
        </div>
    )
}

export default FirstTitle;