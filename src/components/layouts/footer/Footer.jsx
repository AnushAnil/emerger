import React from 'react'
import logo from "../../../images/emergere-logo.png"
import {ImLocation} from "react-icons/im"

import {AiOutlineTwitter} from "react-icons/ai"
import {AiOutlineMail} from "react-icons/ai"
import {AiOutlineLinkedin} from "react-icons/ai"
import {AiOutlineFacebook} from "react-icons/ai"

import USAflag from "../../../images/flags/USA.svg"
import Indiaflag from "../../../images/flags/India.svg"


function Footer() {
  return (  
    <div className='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={logo} alt="" />
                <div className="footer-content-left-location">
                    <div className='footer-content-left-location-item'>
                        <div className='footer-content-left-location-item-icon'>
                            <img src={USAflag} alt="" />
                        </div>
                        <div className='footer-content-left-location-item-content'>
                            <h4>US (Corporate Office)</h4>
                            <p>8105 Rasor Blvd, Suite 60, Plano, Texas 75024</p>
                        </div>
                    </div>
                    <div className='footer-content-left-location-item'>
                        <div className='footer-content-left-location-item-icon'>
                        <img src={Indiaflag} alt="" />
                        </div>
                        <div className='footer-content-left-location-item-content'>
                            <h4>India</h4>
                            <p>42, Sri Balasubramania Nagar Peelamedu, Coimbatore - 641 004</p>
                        </div>
                    </div>
                </div>
                <div className="footer-content-left-links">
                    <a href="" className='footer-content-left-links-email'>
                        <AiOutlineMail/>
                    </a>
                    <a href="" className='footer-content-left-links-facebook'>
                        <AiOutlineFacebook/>
                    </a>
                    <a href="" className='footer-content-left-links-linkedIn'>
                        <AiOutlineLinkedin/>
                    </a>
                    <a href="" className='footer-content-left-links-twitter'>
                        <AiOutlineTwitter/>
                    </a>
                </div>
            </div>
            <div className="footer-content-right">
                <div className='footer-content-right-development'>
                    <h3>Development</h3>
                    <h5>Application Development</h5>
                    <h5>Data Management Solutions</h5>
                    <h5>Cloud Services</h5>
                </div>
                <div className='footer-content-right-services'>
                    <h3>Services</h3>
                    <h5>IT Consulting</h5>
                    <h5>Consultants on demand</h5>
                </div>
                <div className='footer-content-right-work'>
                    <h3>Our Work</h3>
                    <h5>Data Engineering</h5>
                    <h5>Data Visualization</h5>
                    <h5>Cloud Native</h5>
                    <h5>Web Development</h5>
                    <h5>Custom Software</h5>
                    <h5>Process Automation</h5>
                    <h5>WorkDay Implementation and Support</h5>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer