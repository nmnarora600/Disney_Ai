"use client";
import { Movie } from "@/typing";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import getImagePath from "@/lib/getImagePath";

Autoplay.globalOptions = { delay: 8000 };
type Props = {
  movies: Movie[];
};

const CarouselBanner = ({ movies }: Props) => {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 100 }, [
    Autoplay(),
  ]);
  return (
    <div
      ref={emblaRef}
      className="lg:-mt-40 relative w-full cursor-pointer overflow-hidden "
    >
      <div className="flex">
        {movies.map((item) => {
          return (
            <div key={item.id} className="flex-full min-w-0 relative">
              <Image
                alt={item.title}
                src={getImagePath(item.backdrop_path || item.poster_path, true)}
                className="dark:opacity-100 opacity-90"
                width={1920}
                height={1080}
                key={item.id}
              />
              <div
                className="hidden md:inline absolute mt-0 top-0 pt-40 xl:pt-52 left-0 lg:pt-40 bg-transparent z-20 h-full w-full bg-gradient-to-r  from-gray-100/70 dark:from-gray-900/90 via-transparent to-transparent p-10 space-y-10
              "
              >
                <h2 className="text-5xl font-bold max-w-xl lg:mt-40 z-50">
                  {item.title}
                </h2>
                <p className="max-w-xl line-clamp-3">{item.overview}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-transparent  dark:via-gray-900/25 to-gray-100/70 dark:to-[#1A1C29]" />
    </div>
  );
};

export default CarouselBanner;
