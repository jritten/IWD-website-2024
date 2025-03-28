
import GenericCard from '../Job_Board_section/GenericCard'
import JobBoardData from '../Job_Board_section/JobBoardData'
import JobBoardIcon from '../../assets/JobBoardIcon.svg'
import branch from '../../assets/designs/branch1.png'
import React from "react";
import "../../globalStyles.css";

function JobBoardSection() {
  return (
    <div id="JobBoard-div" className="app-section JobBoard-div" style={{ backgroundColor: "rgb(241, 245, 249)" }}>
      <div class="header-container">
        <div class="section-title" id="jobBoard-title">
       Job Board
         <img class="h-[40px] mx-4" src={JobBoardIcon} ></img>
         
        </div>
        
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
    </div>
  )
}

export default JobBoardSection;