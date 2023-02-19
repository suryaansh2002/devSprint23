import React from 'react'
import './Home.css'
import home from '../../assets/home.png'
import logo from '../../assets/logo.png'

export default function Home() {
    return (
        <div className='h-container'>
            <div className='h-header'>
                <div className='header-t'>Aurora</div>
                <div className='header-nav'>
                    <div className='h-nav'>
                        <a href='#'>Home</a>
                        <a href='#about'>About</a>
                        <a href='#timeline'>Timeline</a>
                        <a href='#'>sponsers</a>

                    </div>
                </div>
                <div className='header-reg'>

                    <button>
                        Register Now
                    </button>
                </div>

            </div>
            <div className='h-box'>
                <div className='h-left'>
                    <div className='h-title'>
                        HANDS-ON WORKSHOPS, <br />
                        EXCITING EVENTS, <br />
                        INSPIRING SPEAKERS!
                    </div>
                    <div className='hl-div'>
                        <img src={logo} className='home-logo' />
                    </div>
                    <img src={home}
                        className="home-img"
                    />
                </div>
                <div className='h-right2'>
                    <div className='h-right2-c'>ISTE</div>
                    <div className='subt'>manipal</div>
                </div>

            </div>
        </div>
    )
}
