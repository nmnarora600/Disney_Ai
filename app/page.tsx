/* eslint-disable react/prop-types */
import CarouselBannerWrapper from "@/components/CarouselBannerWrapper";
import MovieCarousel from "@/components/MovieCarousel";
import { getMovies } from "@/lib/getmovies";
import React from 'react';


export default async function Home() {

const upcomingMovies= await getMovies('upcoming');
const topRatedMovies= await getMovies('top_rated');
const popularMovies= await getMovies('popular');


  return (
    <main className=""  >
 
      <div className=" absolute w-[100vw] overflow-hidden top-0 h-[100vh]">


      <CarouselBannerWrapper  />
      </div>
      <div className="flex flex-col  space-y-2 mt-36 md:mt-[70vh]  ">
   
        {/* <moviescarousel movie={...} title={upcoming}/>  */}
        <MovieCarousel title="upcoming" movies={upcomingMovies}/>

        <MovieCarousel title="Top Rated" movies={topRatedMovies}/>
        <MovieCarousel title="Popular Movies" movies={popularMovies}/>
      </div>
{/* Copyright */}
    </main>
  )
}
