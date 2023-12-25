import React from "react";
import { Card,CardTitle,CardBody } from "reactstrap";



const MovieCard = ( {movie} ) => {
  // console.log(movie);
    return (
        <div>
          <a href={movie.title} style={{
            textDecoration:'none'
          }}>  <Card 
  style={{
    width: '20rem',
    border: '1px solid black',
    borderRadius: '15px',
    color: '#260101',
    backgroundColor:'#41BFB3'
  }}
>
  <CardBody>
    <CardTitle tag="h5" style={{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginBottom:'2px',
        fontSize: '16px',
           
    }}>
      {movie.title}
    </CardTitle>
  </CardBody>
  
  <img
    alt="Card cap"
    src={movie.posterPath}
    width="100%"
    style={{
      borderBottomLeftRadius:'14px',
      borderBottomRightRadius:'14px',
      borderTop:'1px solid black',
      borderBottom:'1px solid black'
    }}
  />
  <h7 style={{
          position: 'absolute',
          paddingRight: '20px',
          display:'flex',
          alignItems:'center',
          justifyContent:'end',
          fontSize: '16px',
          top:'74px',
          left:'208px',
          width:'110px',
          color:'#FFFFFF',
          backgroundColor:'#c40202b6'
    }}>
      {movie.releaseDate}
    </h7>    

</Card>
</a>
        </div>
    )
}


export default MovieCard 