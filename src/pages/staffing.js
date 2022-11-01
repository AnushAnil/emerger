import * as React from "react"
import Layout from "../components/layout"
import {BsPersonFill} from "react-icons/bs"

const Staffing= () =>{
    return (
        <Layout>
            <div className="staffing">
                <div className="staffing-dash">

                </div>
                <div className="staffing-title">
                    <h1  data-aos="fade-down">
                    Expert Staffing Solutions
                    </h1>
                </div>
                <div className="staffing-content">
                <svg className="up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffff" fill-opacity="1" d="M0,192L48,208C96,224,192,256,288,240C384,224,480,160,576,138.7C672,117,768,139,864,165.3C960,192,1056,224,1152,234.7C1248,245,1344,235,1392,229.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>                    <div className="staffing-content-title">
                    <h1 data-aos="fade-down">Emergere is a client-centric staffing expert,<br /> and we are committed to...</h1>
                    </div>
                    <div className="staffing-content-inner">
                        <div className="staffing-content-inner-card" data-aos="zoom-in-up">
                            <div className="staffing-content-inner-card-content"  data-aos="zoom-out-down" data-aos-delay="300">
                                <div className="staffing-content-inner-card-content-icon">
                                    <BsPersonFill/>
                                </div>
                                <div className="staffing-content-inner-card-content-text">
                                To helping you save your operational cost right from the screening of eligible candidates, recruitment, training, vacation to other management requirements.                                </div>
                            </div>
                        </div>
                        <div className="staffing-content-inner-card" data-aos="zoom-in-up">
                            <div className="staffing-content-inner-card-content"  data-aos="zoom-out-down" data-aos-delay="300">
                                <div className="staffing-content-inner-card-content-icon">
                                    <BsPersonFill/>
                                </div>
                                <div className="staffing-content-inner-card-content-text">
                                We ensure that your business has the best talent in the industry working for you across all domains who are a perfect fit to your organization’s culture and team and are recruited at the shortest possible time frame.                                </div>
                            </div>
                        </div>
                        <div className="staffing-content-inner-card" data-aos="zoom-in-up">
                            <div className="staffing-content-inner-card-content"  data-aos="zoom-out-down" data-aos-delay="300">
                                <div className="staffing-content-inner-card-content-icon">
                                    <BsPersonFill/>
                                </div>
                                <div className="staffing-content-inner-card-content-text">
                                With Emergere vital IT guidance and IT consulting, we verify that you focus only on maintaining your business.</div>
                            </div>
                        </div>
                        <div className="staffing-content-inner-card" data-aos="zoom-in-up">
                            <div className="staffing-content-inner-card-content"  data-aos="zoom-out-down" data-aos-delay="300">
                                <div className="staffing-content-inner-card-content-icon">
                                    <BsPersonFill/>
                                </div>
                                <div className="staffing-content-inner-card-content-text">
                                We take care of your innovation works make sure it works like clockwork.                                </div>
                            </div>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffff" fill-opacity="1" d="M0,192L48,208C96,224,192,256,288,240C384,224,480,160,576,138.7C672,117,768,139,864,165.3C960,192,1056,224,1152,234.7C1248,245,1344,235,1392,229.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>                </div>
            </div>
            {/* <Customers/> */}
        </Layout>
        // <>
        //     <Customers/>
        // </>
    )
}

export default Staffing