import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "../components/Button";
import NotFoundPage from "./NotFoundPage";

function HomePage() {
  const baseurl = "https://api.themoviedb.org/3";
  const apikey = "065ab40583215aaeffd2dadda1dcdc1b";
  const baseimgurl = "https://image.tmdb.org/t/p/w500";

  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  const requestData = async () => {
    try {
      const response = await axios.get(`${baseurl}/movie/popular?api_key=${apikey}`);
      return response.data.results;
    } catch (error) {
      console.error(error);
    }
  };

  const getData = () => {
    requestData().then((res) => {
      setMovies(res);
    });
  };

  // search movie

  const searchMovie = async (e) => {
    try {
      const response = await axios.get(`${baseurl}/search/movie?query=${e}&api_key=${apikey}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const search = async (e) => {
    const query = await searchMovie(e);
    setMovies(query.results);
    setSearchKey("");
  };

  const popular = () => {
    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar popularMovie={popular} />
      <section className="pt-28 px-4 min-h-screen w-ful bg-slate-900">
        <div className="container">
          <div className="flex justify-center items-center">
            <input
              value={searchKey}
              type="text"
              onChange={(e) => setSearchKey(e.target.value)}
              className="w-[28rem] px-5 py-1 mx-2"
              placeholder="Search For Movie"
            />
            <Button onClick={() => search(searchKey)}>Search</Button>
          </div>
          <div className="flex flex-wrap justify-center items-center">
            {movies.length ? (
              movies.map((movie) => (
                <MovieCard 
                  key={movie.id} 
                  title={movie.title} 
                  desc={movie.overview} 
                  img={`${baseimgurl}/${movie.poster_path}`} 
                  rate={movie.vote_average} 
                  serie='Movie'
                />))
            ) : (
              <NotFoundPage />
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
