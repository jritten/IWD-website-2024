
import GenericCard from '../Job_Board_section/GenericCard'
import JobBoardData from '../Job_Board_section/JobBoard'
import JobBoardIcon from '../../assets/JobBoard.png'
import React from "react";
import "../../globalStyles.css";

function JobBoardSection() {
  return (
    <section
      id="JobBoard-div"
      className="flex flex-col justify-center bg-primary-100"
    >
      <div className="flex w-full justify-between px-8 pt-6 sm:px-10 sm:pt-8 md:px-14 md:pt-12 lg:px-16 lg:pt-14">
        <header className="w-full text-center font-russell text-4xl md:text-5xl lg:text-6xl">
          Job Board
         <img class="h-[60px] mx-4" src={JobBoardIcon} loading ="lazy" ></img>
        </header>
        
      </div>
      <div className="mt-32 grid grid-cols-1 gap-20 sm:grid-cols-3 lg:mt-36">
        {JobBoardData.map((JobBoard) => (
          <GenericCard
            key={JobBoard.id}
            onOpen={() => window.open(JobBoard.url, '_blank')}
            {...JobBoard}
          />
        ))}
      </div>
    </section>
  )
}

export default JobBoardSection;