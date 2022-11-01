import React from 'react'
import img1 from "../images/services-images/app-dev.png"
import img2 from "../images/services-images/cloud-services.png"
import img3 from "../images/services-images/data-management.png"
import img4 from "../images/services-images/it-consulting.png"
import img5 from "../images/services-images/data-management.png"
import Aos from "aos"


function Services() {
//     React.useEffect(async()=>
//     Aos.init({duration: 500})
//   )
  return (
    <div className='services'>
        <svg className='up' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffff" fill-opacity="1" d="M0,224L48,213.3C96,203,192,181,288,149.3C384,117,480,75,576,58.7C672,43,768,53,864,85.3C960,117,1056,171,1152,186.7C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        <div className="services-dash">

        </div>
        <div className="services-title"  data-aos="fade-down">
            Services
        </div>
        <div className="services-content">
            <div className="services-content-row">
                <div className="services-content-row-img"
                    data-aos="fade-right"
                >
                    <img src={img1} alt="" />
                </div>
                <div className="services-content-row-text">
                    <div className="services-content-row-text-title"  data-aos="zoom-in">
                        Application Development
                    </div>
                    <div className="services-content-row-text-desc" data-aos="zoom-in">
                    As a one-stop shop for all cutting-edge technology needs, we develop applications across domains as varied as healthcare and education to insurance, real-estate and retail, and we do it on time and on budget.
                    </div>
                </div>
            </div>
            <div className="services-content-row">
                <div className="services-content-row-img"
                    data-aos="fade-right"
                >
                    <img src={img2} alt="" />
                </div>
                <div className="services-content-row-text">
                    <div className="services-content-row-text-title"  data-aos="zoom-in">
                        Cloud Services
                    </div>
                    <div className="services-content-row-text-desc" data-aos="zoom-in">
                        We help Enterprises move away from legacy systems and processes, medernize and consolidate their IT Infrastructure, automate worlkoads and transform business operations buy finding the right cloud solutions for their need
                    </div>
                </div>
            </div>
            <div className="services-content-row">
                <div className="services-content-row-img"
                    data-aos="fade-right"
                >
                    <img src={img3} alt="" />
                </div>
                <div className="services-content-row-text">
                    <div className="services-content-row-text-title"  data-aos="zoom-in">
                        Data Management Solutions
                    </div>
                    <div className="services-content-row-text-desc" data-aos="zoom-in">
                        Emergere delivers expertise in the regions of data warehousing, data modeling, enterprise data strategy, data mining, data migration, data analysis, data cleansing, big data consulting, master data management and integration solutions.                   
                     </div>
                </div>
            </div>
            <div className="services-content-row">
                <div className="services-content-row-img"
                    data-aos="fade-left"
                >
                    <img src={img4} alt="" />
                </div>
                <div className="services-content-row-text">
                    <div className="services-content-row-text-title" data-aos="zoom-in">
                        IT Consulting
                    </div>
                    <div className="services-content-row-text-desc" data-aos="zoom-in">
                    Emergere brings you a huge pool of resources with expertise spanning across large number of industry domains with many years of practical experience. Our strategy is to form long-term relationships with our clients and offer quality, end-to-end solutions to our clients. We introduce unique perspectives and inventive business consulting solutions that enhances our clients’ approach to their projects.                    </div>
                </div>
            </div>
            <div className="services-content-row">
                <div className="services-content-row-img"
                    data-aos="fade-right"
                >
                    <img src={img5} alt="" />
                </div>
                <div className="services-content-row-text">
                    <div className="services-content-row-text-title" data-aos="zoom-in">
                    Consultants on Demand
                    </div>
                    <div className="services-content-row-text-desc" data-aos="zoom-in">
                    At Emergere, we undertake IT consulting in partnership with our clients. Our experienced and trained consultants work alongside you to utilize the latest information technology to meet your business objectives. We help you improve the structure and efficiency of your IT systems, recommend the best options for your business, as well as support the implementation of recommended information technologies in your organization, thus increasing your competitive advantage.                    </div>
                </div>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffff" fill-opacity="1" d="M0,224L48,213.3C96,203,192,181,288,149.3C384,117,480,75,576,58.7C672,43,768,53,864,85.3C960,117,1056,171,1152,186.7C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </div>
  )
}

export default Services