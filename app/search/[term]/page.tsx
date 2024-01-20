import AiSuggestion from '@/components/AiSuggestion';
import MovieCarousel from '@/components/MovieCarousel';
import { getMovies, getSearchedMovies } from '@/lib/getmovies';
import { notFound } from 'next/navigation';
import React from 'react'

type Props = {
    params:{
        term:string
    },
    
}

const SearchPage = async(props: Props) => {
    let term=props.params.term;
    if(!term){
        notFound();
    }

    let termToUse=decodeURIComponent(term)

// APi call to searched movie
const searchResults=await getSearchedMovies(termToUse);
// APi call to popular movies
const popularMovies=await getMovies("popular");

  return (
    <div className='max-w-7xl mx-auto'>
      <div className='flex flex-col space-y-5 mt-24 xl:mt-42 '>
        <h1 className='md:text-6xl text-4xl font-bold px-10'>Search Results for {termToUse}</h1>
        <AiSuggestion term={termToUse}/>
        <MovieCarousel title="movies" movies={searchResults} isVertical/>
        <MovieCarousel title='You may also like' movies={popularMovies}/>
    </div>
    </div>
  )
}

export default SearchPage