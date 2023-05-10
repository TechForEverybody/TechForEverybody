import React from 'react'
import Typewriter from 'typewriter-effect';
import InterestData from '../../Assets/Data/InerestedFields.json';

function About() {
    
    return (
        <>
            <h1 className='main_heading_1'>About Me</h1>
            <div className='AboutContainer'>
                <h1>B.Tech. in Computer Science and Engineering (2019-2023)</h1>
                <p>
                    I am a final year student and working in web development field from 2 years. I have done projects from scratch using HTML, CSS and JavaScript only. Also using PHP as a backend and MySQL as a database. I have also worked with M.E.R.N. stack technology and also worked with Python and FLASK as a back-end. I have also done some projects in Machine Learning and Deep Learning Fields using Python, sklearn and TensorFlow. In machine Learning field i have created an machine learning model which predicts the price of houses on the basis of environmental and physical entity value input , and i have also created an model that can understand the trend of covid-19 and predicts the future situation of cases using different type of machine learning models, further i am working on projects on machine learning, deep learning, Artificial Intelligence.I have also worked with Java and Python languages for GUI building and C programming for algorithm building.
                </p>
                <div className="education">
                    
                    <div className="thingscounts">
                        <div className="count">
                            <h1>10 +</h1>
                            <img src="https://cdn-icons-png.flaticon.com/512/1087/1087927.png" alt="" />
                            <h3>Projects</h3>
                        </div>
                        <div className="count">
                            <h1>5 +</h1>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgrW5CyLoLvAXR_PhoMAMZMh0Kz1sYRkfbuu55rE4XpdKycLfy-PPWWa_EMpvMKbI0NGc&usqp=CAU"
                                alt="" />
                            <h3>Programming Languages</h3>
                        </div>
                        <div className="count">
                            <h1>2 +</h1>
                            <img src="https://cdn-icons-png.flaticon.com/512/2038/2038497.png" alt="" />
                            <h3>Specialization</h3>
                        </div>
                        <div className="count">
                            <h1>1</h1>
                            <img src="https://www.clipartmax.com/png/full/433-4333029_image-internship-icon-black.png" alt="" />
                            <h3>Internship</h3>
                        </div>
                        <div className="count">
                            <h1>1</h1>
                            <img src="https://www.clipartmax.com/png/full/433-4333029_image-internship-icon-black.png" alt="" />
                            <h3>Freelancing Work</h3>
                        </div>
                    </div>
                </div>


            </div>
            <h1 className='main_heading_1'>Interested In</h1>
            <div className="FieldsOfWork">
                {
                    InterestData.map((data, index) => {

                        return (
                            <div className="FieldCard" key={index}>
                                <img src={data.image} alt="" />
                                <h1>{data.name}</h1>
                                <div className="workExamples">
                                    Work Examples
                                    <ul>
                                        {
                                            Object.keys(data.workExamples).map((work:string, index:number) => {
                                                return (
                                                    <li key={index}><a href={data.workExamples[work as keyof typeof data.workExamples]}>{work}</a></li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        )
                    })
                }
               
            </div>
        </>
    )
}

export default About