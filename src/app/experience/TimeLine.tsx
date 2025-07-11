import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ExperienceCard from './ExperienceCard';
import { experienceData } from './ExperienceData';


function TimeLine() {
    return (
        <div>

            <VerticalTimeline animate={true} lineColor="#749BC2" layout='1-column-left' >
                {experienceData.map((exp, index) => (
                    <VerticalTimelineElement
                        key={index}
                        className="vertical-timeline-element--work text-primary"
                        contentStyle={{ background: 'transparent', color: '#fff', boxShadow:"none", padding:0 }}
                        contentArrowStyle={{ borderRight: 'none' }}
                        // date={exp.endDate}
                        iconStyle={{ background: 'transparent', color: '#ff2056', border: '2px solid #ff2056',outline: 'none', boxShadow: 'none' }}
                        icon={<exp.icon />}
                    >

                        <ExperienceCard key={index} data={exp} />
                    </VerticalTimelineElement>
                ))}


            </VerticalTimeline>
        </div >
    )
}

export default TimeLine