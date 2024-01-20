"use client";

import useSWR from "swr";
import { Typewriter } from 'nextjs-simple-typewriter';


const fetcher = (term: string) =>
  fetch("/api/suggestions?term=" + term).then((res) => res.json());

const AISuggestion = ({ term }: { term: string }) => {

  const { data, error, isLoading, isValidating } = useSWR(
    "suggestions",
    () => fetcher(term),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  const generateText = () => {
    if (isLoading || isValidating)
      return (
        <>
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 md:mt-0 md:mb-16 mt-0 mb-[20vh] border-white"></div>
          <p className="text-sm text-gray-400 md:h-28 h-auto min-h-[20vh]"> AI Assistant is thinking ...</p>
        </>
      );

    if (error) return <>Error...</>;
    if (!data) return <>No data...</>;
   
    return (
      <>
        <div className="animate-pulse rounded-full bg-gradient-to-l flex md:mt-0 md:mb-16 mt-0 mb-auto from-white h-10 w-10 border-2 flex-shrink-0 border-white" />
        <div>
          <p className="text-sm text-gray-400">AI Assistant Suggests: </p>
          <p className="italic text-xl md:h-24 h-auto min-h-[18vh]" > <Typewriter words={[data.message]} typeSpeed={25}  /></p>
        </div>
      </>
          
    );
    
  };

  return (
    <>
    <div className="flex space-x-5 items-center px-10">{generateText()}</div>
   
    </>
  );
};

export default AISuggestion;
