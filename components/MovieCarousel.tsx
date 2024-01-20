"use client";
import { Movie } from "@/typing";
import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Props = {
  title?: string;
  movies: Movie[];
  isVertical?: boolean;
};

const MovieCarousel = (props: Props) => {
  const [flexBasis, setFlexBasis] = useState("27%");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setFlexBasis("27%"); // Adjust for medium screens
      } else {
        setFlexBasis("90%"); // Default for small screens
      }
    };

    // Initial call
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="z-30 md:pb-5">
      <h2 className="text-xl px-10 py-2 font-bold capitalize ">
        {props.title}
      </h2>
      <div
        className={cn(
          "flex space-x-4 overflow-scroll px-5 lg:px-10  md:py-5 pb-5 scrollbar-hide ",
          props.isVertical && "space-x-0 space-y-12 flex-col"
        )}
      >
        {props.isVertical ? (
          props.movies.map((item) => {
            return (
              <div
                className={cn(
                  "flex flex-col space-y-5 mb-5 items-center lg:flex-row space-x-5"
                )}
                key={item.id}
              >
                <MovieCard movie={item} />
                <div className="max-w-2xl">
                  <p className="font-bold">
                    {item.title} ({item.release_date?.split("-")[0]})
                  </p>
                  <hr className="mb-3" />
                  <p className="">{item.overview}</p>
                </div>
              </div>
            );
          })
        ) : (
          //         props.movies.map(item=>(
          // <MovieCard key={item.id} movie={item} />
          //         ))

          <Carousel className="w-[100vw] ">
            <CarouselContent>
              {props.movies.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="object-center"
                  style={{ flexBasis }}
                >
                  <MovieCard movie={item} />
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <div >
        <CarouselPrevious className='absolute left-3 -bottom-5 z-20 md:visible hidden md:scale-150 hover:bg-white hover:text-black' />
      <CarouselNext className='absolute right-3 md:right-20 -bottom-5 z-20 md:scale-150 md:visible hidden hover:bg-white hover:text-black' /></div> */}
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default MovieCarousel;
