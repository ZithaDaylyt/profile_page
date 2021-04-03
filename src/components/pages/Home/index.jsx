import React from 'react'
import Header from '../../Header';
import './Home.css';
import profile from '../../../images/profile.jpeg';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
        <Header/>
        <div className='main col center'>
            <div className="per-info ">
                <h1>I'm Sipho Zitha</h1>
                <p>React js and React Native Developer</p>
            </div>

            <div className="content">
                <div className="text">
                    <p className="p1">Hello, I'm Sipho Zitha, A web and mobile app Developer based in South Africa,I work with Javascript,React js,React Native,CSS and HTML, I also like to learn new things and new technologies</p>
                    <p className="p2">Besides from coding I like playing soccer and games.
                    </p>
                </div>
                <div className="image">
                    <img src={profile} alt='img'></img>
                </div>
            </div>
            <Link to='#' className='read-more center '><span>Get resume </span> <i className="fas fa-arrow-down"></i></Link>
            <div className="line"></div>
        </div>
        </>
    )
};

export default Home;
