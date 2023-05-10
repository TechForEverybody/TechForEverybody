import React from 'react'
import Header from '../Templates/Header'
import Footer from '../Templates/Footer'
import Typewriter from 'typewriter-effect';
import About from './About';
import References from './References';

function Home() {
    return (
        <>
            <Header />
            <div className="HomeFrontContainer">
                <div className="HomeFrontContainerText">
                    <h1>Hi, I'm <span>
                        <Typewriter
                        options={{
                            strings: ['Shivkumar Chauhan'],
                            autoStart: true,
                            loop: true,
                        }}/>
                    </span></h1>
                    <h2>Full Stack Developer</h2>
                    <p>I am interested to work with some challenging roles.</p>
                    <Typewriter
                        options={{
                            strings: ['MERN Stack Developer', "React Developer", "Python Developer","PHP Developer", "Machine Learning Engineer", "Deep Learning Engineer", "Data Scientist"],
                            autoStart: true,
                            loop: true,
                            delay:1,
                            deleteSpeed:1,
                        }}/>
                </div>
            </div>
            <About/>
            <References/>


            
            <Footer />
        </>
    )
}

export default Home