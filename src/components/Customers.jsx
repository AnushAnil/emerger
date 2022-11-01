// import React from 'react'
// import img from "../images/services-images/app-dev.png";

// const Customers= ()=> {
//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 2000,
//     autoplaySpeed: 2000,
//     cssEase: "linear"
//   };
//   return (
//     <div className='customers'>
//         <div className="customers-dash">

//         </div>
//         <div className="customers-title">
//             Clients
//         </div>
//     </div>
//   )
// }

// export default Customers

import React, { Component } from "react";
import Slider from "react-slick";
import img from "../images/customers/otava.jpg";
import img2 from "../images/customers/methodist.jpg";
import img3 from "../images/customers/prism.jpg";
import img4 from "../images/customers/rei-coop.jpg";
import img5 from "../images/customers/sanmar.jpg";
import img6 from "../images/customers/ies.jpg";
import {FaPause} from "react-icons/fa"
import {FaPlay} from "react-icons/fa"


export default class AutoPlayMethods extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000
    };
    return (
      <div className="customers">
        <div className="customers-dash">

        </div>
        <div className="customers-title" data-aos="fade-down">
          Clients
        </div>
        <Slider ref={slider => (this.slider = slider)} {...settings}>
          <div className="customers-customer">
            <img src={img} alt="" />
          </div>
          <div className="customers-customer">
          <img src={img2} alt="" />
          </div>
          <div className="customers-customer">
          <img src={img3} alt="" />
          </div>
          <div className="customers-customer">
          <img src={img4} alt="" />
          </div>
          <div className="customers-customer">
          <img src={img5} alt="" />
          </div>
          <div className="customers-customer">
          <img src={img6} alt="" />
          </div>
        </Slider>
        <div className="buttons">
          <button className="button-play" onClick={this.play}>
            <FaPlay/>
          </button>
          <button className="button-pause" onClick={this.pause}>
            <FaPause/>
          </button>
        </div>
      </div>
    );
  }
}