import React from 'react'
import './About.css';
import about from '../../assets/about.jpg'
import logo from '../../assets/logo.png'
import im1 from '../../assets/1.png';
import im2 from '../../assets/2.png';
import im3 from '../../assets/3.png';

export default function About() {
    return (
        <div className='about-container' id="about">
            <div className='about-hc'>
                <div className='about-header'>
                    Aurora
                </div>
                <div>
                    <img src={logo} className="about-logo"/>
                </div>
            </div>
            <div className='about-box'>
                <div className='about-left'>

                    <div className='about-content'>
                        Aurora is a week long event packed with hands on workshops,
                        inspiring speakers, and exciting events designed to help you
                        sharpenen your technical skills and network with like minded individuals.
                    </div>
                    <div className='about-folders'>
                        <img src={im1}/>
                        <img src={im2}/>
                        <img src={im3}/>

                    </div>
                    <div className='about-quote'>
                        "CODE NEVER LIES, <br /> COMMENTS  SOMETIMES  <br /> DO." <span>- Ron Jefferies</span>
                    </div>
                </div>
                <div className='about-right'>
                    <img src={about} className='about-img' />
                </div>
                <div className='about-right2'>
                    <div className='about-right2-c'>ABOUT</div>
                </div>
            </div>

        </div>
    )
}

