import * as React from "react"
import Layout from "../components/layout"
import img from "../images/work-images/data-engineering.png"
import img2 from "../images/work-images/data-visualization.png"
import img3 from "../images/work-images/cloud-network.png"
import img4 from "../images/work-images/web.png"
import img5 from "../images/work-images/software-development.png"
import img6 from "../images/work-images/automation.png"
import img7 from "../images/work-images/workday_logo.png"
import { AiOutlineArrowRight } from "react-icons/ai"

import "aos/dist/aos.css"
import Services from "../components/Services"

const BlogIndex = () => {
  // const woekData= [
  //     {
  //         icon: "automation.png",
  //         title:"Hi",
  //         subtitle:"",
  //     }
  // ]
  return (
    <Layout>
      <div className="work">
        <div className="work-content-dash"></div>
        <div className="work-title">
          <h1 data-aos="fade-down">What We Do</h1>
        </div>
        <div className="work-content">
          <div className="work-content-item" data-aos="zoom-in-up">
            <div className="work-content-item-image" data-aos="zoom-out-down">
              <img src={img} alt="" />
            </div>
            <div className="work-content-item-text" data-aos="zoom-out-down">
              <h1>Data Engineering</h1>
              <p>
                We can help with enterprise data management, developing data
                pipelines and designing database solutions to ensure a clean,
                unified view of your data for analysis and reporting.
              </p>
              <div className="work-content-item-text-link">
                Learn more &nbsp; <AiOutlineArrowRight />
              </div>
            </div>
          </div>
          <div className="work-content-item" data-aos="zoom-in-up">
            <div className="work-content-item-image" data-aos="zoom-out-down">
              <img src={img2} alt="" />
            </div>
            <div className="work-content-item-text" data-aos="zoom-out-down">
              <h1>Data Visualization</h1>
              <p>
                Bring data to life. Transform data into intelligent,
                easy-to-understand visualizations, to monitor and filter the
                exact metrics you need.
              </p>
              <div className="work-content-item-text-link">
                Learn more &nbsp; <AiOutlineArrowRight />
              </div>
            </div>
          </div>
          <div className="work-content-item" data-aos="zoom-in-up">
            <div
              className="work-content-item-image"
              data-aos="zoom-out-down"
              data-aos-delay="300"
            >
              <img src={img3} alt="" />
            </div>
            <div
              className="work-content-item-text"
              data-aos="zoom-out-down"
              data-aos-delay="300"
            >
              <h1>Cloud Native</h1>
              <p>
                End-to-End Solutions for empowering enterprises to develop and
                deploy applications on the Cloud.
              </p>
              <div className="work-content-item-text-link">
                Learn more &nbsp; <AiOutlineArrowRight />
              </div>
            </div>
          </div>
          <div className="work-content-item" data-aos="zoom-in-up">
            <div
              className="work-content-item-image"
              data-aos="zoom-out-down"
              data-aos-delay="300"
            >
              <img src={img4} alt="" />
            </div>
            <div
              className="work-content-item-text"
              data-aos="zoom-out-down"
              data-aos-delay="300"
            >
              <h1>Web Development</h1>
              <p>
                Develop high-performance websites and applications utilizing
                rapid application development frameworks and agile
                methodologies, that are aligned to strategic business
                objectives.
              </p>
              <div className="work-content-item-text-link">
                Learn more &nbsp; <AiOutlineArrowRight />
              </div>
            </div>
          </div>
          <div className="work-content-item" data-aos="zoom-in-up">
            <div
              className="work-content-item-image"
              data-aos="zoom-out-down"
              data-aos-delay="300"
            >
              <img src={img5} alt="" />
            </div>
            <div
              className="work-content-item-text"
              data-aos="zoom-out-down"
              data-aos-delay="300"
            >
              <h1>Custom Software</h1>
              <p>
                We offer the capability and expertise to cater to custom
                software development be it developing a new business
                application, modernizing legacy systems or continuously
                maintaining your apps at optimal performance.
              </p>
              <div className="work-content-item-text-link">
                Learn more &nbsp; <AiOutlineArrowRight />
              </div>
            </div>
          </div>
          <div className="work-content-item" data-aos="zoom-in-up">
            <div
              className="work-content-item-image"
              data-aos="zoom-out-down"
              data-aos-delay="300"
            >
              <img src={img6} alt="" />
            </div>
            <div
              className="work-content-item-text"
              data-aos="zoom-out-down"
              data-aos-delay="300"
            >
              <h1>Process Automation</h1>
              <p>
                Enabling Business Process Automation and streamlined Customer
                experience with RPA
              </p>
              <div className="work-content-item-text-link">
                Learn more &nbsp; <AiOutlineArrowRight />
              </div>
            </div>
          </div>
          <div className="work-content-item" data-aos="zoom-in-up">
            <div
              className="work-content-item-image"
              data-aos="zoom-out-down"
              data-aos-delay="300"
            >
              <img src={img7} alt="" />
            </div>
            <div
              className="work-content-item-text"
              data-aos="zoom-out-down"
              data-aos-delay="300"
            >
              <h1>Workday Implementation and Support</h1>
              <p>
                Strategic partner to new Workday deployments enabling process
                improvement and end user experience. Comprehensive support for
                Workday implementations, enhancements and post-production
                hypercare. Continuous alignment of Workday applications to suit
                the evolving needs and vision of the customer.
              </p>
              <div className="work-content-item-text-link">
                Learn more &nbsp; <AiOutlineArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Services />
      {/* <ContactUs/> */}
    </Layout>
  )
}

export default BlogIndex
