import {React, useState, useEffect} from "react";
import image1 from "../assets/images/the-eminence-in-shadow-full-cast-of-characters.jpg";
import  {Splide,  SplideSlide} from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import axios from "axios";

// import "@splidejs/react-splide/css";

const MoviesPage = () => {
  const options = {
    type : "loop",
    gap: "1rem",
    autoplay: true,
    pauseOnHover: false,
    arrows: false,
    height: "100vh",
    resetProgress: false,
    direction: 'ttb',
  };



     const [movieData, setMovieData] = useState([]);
   const api_url = "http://www.omdbapi.com?apikey=43750b3d&";
   const fetchMovies = async (title) => {
     try {
       const { data } = await axios.get(`${api_url}&s=${title}`);
       setMovieData(data);
       console.log(data);
     } catch (error) {
       // console.log(error)
     }
   };
   useEffect(() => {
     fetchMovies("spiderman");
   }, []);

  return (
    <>
  

      <div className="w-[100%]">
        <Splide options={options} className="">

    
         




        </Splide>





      </div>

    </>
  );
};

export default MoviesPage;
