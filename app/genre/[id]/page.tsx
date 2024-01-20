import AISuggestion from '@/components/AiSuggestion'
import MovieCarousel from '@/components/MovieCarousel'
import { getDiscoverMovies, getMovies } from '@/lib/getmovies'
import { notFound } from 'next/navigation'
import React from 'react'

type Props = {
    params:{
        id:string
    },
    searchParams:{
        genre:string
    }
}

const GenrePage = async({params:{id}, searchParams:{genre}}: Props) => {
  const searchResults=await getDiscoverMovies(id=id);
 
  const popularMovies=await getMovies("popular");
  return (
    <>
   
    <div className='max-w-7xl mx-auto'>


    <div className='flex flex-col space-y-5 mt-20 xl:mt-42 '>
      <h1 className='md:text-6xl text-4xl font-bold px-10'>Results for {genre}</h1>
      <AISuggestion term={genre}/>
      <MovieCarousel title="movies" movies={searchResults} isVertical/>
  </div>

  </div>
      <MovieCarousel title='You may also like' movies={popularMovies}/>
  </>
  )
}

export default GenrePage