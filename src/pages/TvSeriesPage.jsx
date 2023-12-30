import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import axios from "axios";
import MovieCard from "../components/MovieCard";

function TvSeriesPage() {
  const baseurl = "https://api.themoviedb.org/3";
  const apikey = "065ab40583215aaeffd2dadda1dcdc1b";
  const baseimgurl = "https://image.tmdb.org/t/p/w500";

  const [tvSeries, setTvSeries] = useState([]);

  const reqData = async () => {
    try {
      const response = await axios.get(`${baseurl}/tv/popular?api_key=${apikey}`);
      console.log(response)
      return response.data.results;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    reqData().then((ress) => {
      setTvSeries(ress);
    });
  }, []);

  return (
    <>
      <Navbar />
      <section className="pt-28 px-4 min-h-screen w-ful bg-slate-900">
        <div className="container">
          <div className="flex justify-center items-center">
            <input 
              type="text" 
              className="w-[28rem] px-5 py-1 mx-2" 
              placeholder="Search For Movie" 
            />
            <Button onClick={reqData}>Search</Button>
          </div>
          <div className="flex flex-wrap justify-center items-center">
            {tvSeries.map((tv) => (
              <MovieCard 
                key={tv.id} 
                title={tv.original_name} 
                desc={tv.overview} 
                img={`${baseimgurl}/${tv.poster_path}`} 
                rate={tv.vote_average} 
                serie='Tv Series' 
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default TvSeriesPage;
