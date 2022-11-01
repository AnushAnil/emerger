import * as React from "react"
import ContactUs from "../components/ContactUs"
import Layout from "../components/layout"
import { AiTwotonePhone} from "react-icons/ai"
import {AiTwotoneMail} from "react-icons/ai"
import {AiOutlineArrowDown} from "react-icons/ai"

const Contact= () =>{
    return(
        <Layout>
            <div className="contact-us">
                <div className="contact-us-title" data-aos="fade-down">
                    Contact Us
                </div>
                <div className="contact-us-links" data-aos="fade-down">
                    <div className="contact-us-links-link">
                        <div className="contact-us-links-link-icon">
                            <AiTwotonePhone/>
                        </div>
                        <div className="contact-us-links-link-text">
                        +1 469 4017117
                        </div>
                    </div>
                    <div className="contact-us-links-link">
                        <div className="contact-us-links-link-icon">
                            <AiTwotoneMail/>
                        </div>
                        <div className="contact-us-links-link-text">
                        hello@emergertech.com
                        </div>
                    </div>
                </div>
                <div className="contact-us-or" data-aos="fade-down" data-aos-delay="500">
                    {/* <AiOutlineArrowUp/><br/> */}
                    or<br/>
                    <AiOutlineArrowDown/>
                </div>
            </div>
            <ContactUs/>
        </Layout>
    )
}

export default Contact