import React from 'react'
import logo from '../../assets/logo.png'
import './Timeline.css'
import t1 from '../../assets/t-1.png'
import t2 from '../../assets/t-2.png'
import t3 from '../../assets/t-3.png'

export default function Timeline() {
    return (
        <div className='t-container' id="timeline">
            <div className='t-hc'>
                <div className='t-header'>
                    Aurora
                </div>
                <div>
                    <img src={logo} className="t-logo" />
                </div>
            </div>
            <div className='t-box'>
                <div>

                    <div className='t-row'>
                        <div>
                            <img src={t1} className='tr-img' />

                        </div>
                        <div>
                            <div className='tr-h'>
                                12th-17th
                            </div>
                            <div className='tr-cont'>
                                Aurora is a week long event packed with hands on workshops,
                                inspiring speakers, and exciting events designed to help you
                                sharpenen your technical skills and network with like minded individuals.
                            </div>
                        </div>
                    </div>
                    <div className='t-row'>
                        <div>
                            <img src={t2} className='tr-img' />
                        </div>
                        <div>
                            <div className='tr-h'>
                                12th,17th,19th
                            </div>
                            <div className='tr-cont'>
                                Aurora is a week long event packed with hands on workshops,
                                inspiring speakers, and exciting events designed to help you
                                sharpenen your technical skills and network with like minded individuals.
                            </div>
                        </div>
                    </div>
                    <div className='t-row'>
                        <div>
                            <img src={t3} className='tr-img' />

                        </div>
                        <div>
                            <div className='tr-h'>
                                18th,20th
                            </div>
                            <div className='tr-cont'>
                                Aurora is a week long event packed with hands on workshops,
                                inspiring speakers, and exciting events designed to help you
                                sharpenen your technical skills and network with like minded individuals.
                            </div>
                        </div>
                    </div>
                </div>
                <div className='t-right2'>
                    <div className='t-right2-c'>TIMELINE</div>
                </div>

            </div>

        </div>
    )
}
