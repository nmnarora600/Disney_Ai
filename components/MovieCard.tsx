import getImagePath from "@/lib/getImagePath";
import { Movie } from "@/typing";
import Image from "next/image";
import React from "react";

type Props = {
  movie: Movie;
};

const MovieCard = ({ movie }: Props) => {
  return (
    <div className="relative flex-shrink-0 cursor-pointer transform hover:scale-105 transition duration-200 ease-out hover:drop-shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-b dark:from-gray-200/0 from-gray-100/0 via-gray-100/20 dark:via-gray-900/15 to-gray-100/80 dark:to-[#1A1C29]/80 z-10 " />
      <p className="absolute z-10 bottom-5 left-5  ">{movie.title}</p>
      <Image
        className={`w-fit lg:min-w-[400px] h-56 object-cover object-center shadow-md dark:shadow-gray-900 hover:drop-shadow-xl rounded-sm`}
        alt={movie.title}
        src={getImagePath(movie.backdrop_path || movie.poster_path)}
        width={1920}
        height={1080}
        key={movie.id}
      />
    </div>
  );
};

export default MovieCard;
