import React from 'react'
// import 'react-vertical-timeline-component/style.min.css';
import ExperienceCard from './ExperienceCard';
import { experienceData } from './ExperienceData';


function TimeLine() {
    return (
        <div>

            <div  >
                {experienceData.map((exp, index) => (
                    <div
                        key={index}
                        className="vertical-timeline-element--work text-primary"
                        
                    >

                        <ExperienceCard key={index} data={exp} />
                    </div>
                ))}


            </div>
        </div >
    )
}

export default TimeLine