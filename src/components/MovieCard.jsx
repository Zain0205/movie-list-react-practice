import React from "react";

function MovieCard({ img, title, desc, rate, serie }) {
  return (
    <>
      <div className="relative overflow-hidden w-56 h-[370px] md:mx-5 my-[50px] rounded-md card">
        <div>
          <div className="img1 absolute top-0 left-0 h-[60%] w-full bg-cover bg-left-top transition-all ease-in-out duration-700">
            <img src={img} alt="" />
          </div>
          <div className="h-[22%] w-full absolute bottom-0 left-0 text-lg text-center font-bold text-slate-300 py-[15px] px-[10px] title">{title}</div>
          <div className="text absolute bottom-[100px] h-[120px] py-[15px] px-[10px] text-center text-white text-lg rotate-90 origin-bottom-left opacity-0 transition-all duration-300 ease-linear">
            {desc}
          </div>
          <a href="#">
            <div className="catagory absolute left-[10px] top-10 px-3 py-1 text-base font-bold text-center text-white rounded-md transition-all duration-300 ease-linear">{serie}</div>
          </a>
          <a href="#">
            <div className="views absolute left-[10px] top-[80px] py-1 px-3 text-base font-bold text-center text-white rounded-md transition-all duration-300 ease-linear delay-100">{rate}</div>
          </a>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
