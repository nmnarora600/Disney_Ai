
import { Genres } from "@/typing";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
type Props = {};

const GenreDropdown = async (props: Props) => {
  const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API} `,
    },
    next: {
      revalidate: 60 * 60 * 24 * 30,
    },
  };
  let res = await fetch(url, options);
  const data = (await res.json()) as Genres;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="flex justify-center items-center "
        id="drop"
      >
        Genre
        <ChevronDown className="ml-1 " />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Select genre</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {data.genres.map((item) => {
          return (
            <Link href={`/genre/${item.id}?genre=${item.name}`} key={item.id}>
            <DropdownMenuItem >
            
                {item.name}
             
            </DropdownMenuItem> </Link>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default GenreDropdown;
