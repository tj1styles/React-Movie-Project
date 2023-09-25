import { React } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import MoviesPage from "./pages/MoviesPage";
import MoviesPage from "./pages/MoviesPage";
// import axios from "axios";

// https://api.themoviedb.org/3/movie/
// http://www.omdbapi.com/?apikey=[yourkey]&
// for data_images = dataSearch[0].Poster
const App = () => {
  // const [movieData, setMovieData] = useState([]);
  // const api_url = "http://www.omdbapi.com?apikey=43750b3d&";
  // const fetchMovies = async (title) => {
  //   try {
  //     const { data } = await axios.get(`${api_url}&s=${title}`);
  //     setMovieData(data);
  //     console.log(data);
  //   } catch (error) {
  //     // console.log(error)
  //   }
  // };
  // useEffect(() => {
  //   fetchMovies("spiderman");
  // }, []);
  // //  console.log(movieData)

  return (
    <>
      <MoviesPage />
    </>
  );
};

export default App;
