import React,{useEffect, useRef} from 'react'
import Header from '../../Header'
import './About.css'
import abt_img from '../../../images/zitha.jpg';

function About() {

    let reactNativehRef =  useRef();
    let htmlRef =  useRef();
    let javascriptchRef =  useRef();
    let cssRef =  useRef();
    let reactRef =  useRef();

    useEffect(()=>{
        htmlRef.style.width = htmlRef.getAttribute('data') + "%";
        htmlRef.style.opacity = 1;

        reactRef.style.width = reactRef.getAttribute('data') +"%"
        reactRef.style.opacity=1

        javascriptchRef.style.width = javascriptchRef.getAttribute('data') +"%"
        javascriptchRef.style.opacity=1

        cssRef.style.width = cssRef.getAttribute('data') +"%"
        cssRef.style.opacity=1

        reactNativehRef.style.width = reactNativehRef.getAttribute('data') +"%"
        reactNativehRef.style.opacity=1

    },[]);

    return (
        <>
            <Header/> 
            <div className="abt-wrapper center">
                <div className="abt-me">
                    <div className="abt-img"><img src={abt_img} alt="about-img" width='250px' height='250px'/></div>
                    <div className="about-me">
                        <h1>Web Developer.App Developer.</h1>
                        <h1 className="h1">Junior UI/UX Designer</h1>
                        <p>Hi,i'm Sipho J Zitha, a Web Developer You could lose the last paragraph to make it fit on one page
                        You can remove the last paragraph to fit everything on one page.
                        I will paragraph you in every newspaper.
                        </p>
                    </div>
                </div>
                <div className="skill-wrapper ">
                    <h1>Skills</h1>
                    <div className="abt-skills">
                        <div className="html">
                            <h5>HTML</h5>
                            <div className="bar">
                                <div className="bar-shade" data="96" ref={ el => htmlRef = el}>96%</div>
                            </div>
                        </div>
                        <div className="javascript">
                            <h5>JavaScript</h5>
                            <div className="bar">
                                <div className="bar-shade" data="70" ref={ el => javascriptchRef = el}>70%</div>
                            </div>
                        </div>
                        <div className="css">
                            <h5>CSS</h5>
                            <div className="bar">
                                <div className="bar-shade" data="80" ref={ el => cssRef = el}>80%</div>
                            </div>
                        </div>
                        <div className="react-js">
                            <h5>REACT JS</h5>
                            <div className="bar">
                                <div className="bar-shade" data="75" ref={ el => reactRef = el} >75%</div>
                            </div>
                        </div>
                        <div className="react-native">
                            <h5>REACT NATIVE</h5>
                            <div className="bar">
                                <div className="bar-shade" data="58"ref={ el => reactNativehRef = el} >58%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
