import React from 'react'
import {FaPaperPlane} from "react-icons/fa"

function ContactUs() {
  return (
    <div className='contactUs'>
        <svg className='up' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffff" fill-opacity="1" d="M0,192L48,208C96,224,192,256,288,240C384,224,480,160,576,138.7C672,117,768,139,864,165.3C960,192,1056,224,1152,234.7C1248,245,1344,235,1392,229.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        <div className="contactUs-content">
        
            <div className="contactUs-content-left">
                <div className="contactUs-content-left-text">
                    Write to us
                </div>
                <div className="contactUs-content-left-items">
                    <div className="contactUs-content-left-items-item_1"
                        data-aos="fade-up-right"
                    >
                        <FaPaperPlane/>
                    </div>
                    <div className="contactUs-content-left-items-item_2"
                        data-aos="fade-up-right"
                        data-aos-delay="300"
                    >
                        <FaPaperPlane/>
                    </div>
                </div>
            </div>
            <div className="contactUs-content-right">
                <div className="contactUs-content-right-form">
                    <div className="contactUs-content-right-form-name">
                        <div className="contactUs-content-right-form-name-first">
                            <input type="text" placeholder='First name'/>
                        </div>
                        <div className="contactUs-content-right-form-name-last">
                            <input type="text" placeholder='Last name'/>
                        </div>
                    </div>
                    <div className="contactUs-content-right-form-email">
                        <input type="email" placeholder='Email'/>
                    </div>
                    <div className="contactUs-content-right-form-phone">
                        <input type="text" placeholder='Phone no'/>
                    </div>
                    <div className="contactUs-content-right-form-message">
                        <textarea name="" id="" cols="30" rows="5" placeholder='Your message ...'></textarea>
                    </div>
                    <div className="contactUs-content-right-form-submit">
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffff" fill-opacity="1" d="M0,160L48,170.7C96,181,192,203,288,218.7C384,235,480,245,576,224C672,203,768,149,864,117.3C960,85,1056,75,1152,74.7C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
    </div>
  )
}

export default ContactUs