import React from 'react'
import logo from "../../../images/emergere-logo.png"
import { Link } from "gatsby"

function Header() {
    // window.onscroll= function () {handleScroll()}
    // // window.addEventListener("scroll", handleScroll)
    // const header= document.querySelector(".header")
    // function handleScroll(){
    //     if(document.body.scrollTop > 30){
    //         // header?.classList.add("nav-shadow")
    //         // console.log(1)s
    //         // header?.classList.toggle("nav-shadow")

    //     }
    //     // console.log(1)
    // }
  return (
    <div className='header'>
        <div className='header-content'>
        <Link to='/'>
        <div className='header-content-logo'>
            <img src={logo} alt="logo" />
        </div>
        </Link>
        <div className='header-content-links'>
            <Link to='/'>
                Home
            </Link>
            <Link to='/OurWork'>
                Services
            </Link>
            {/* <Link to='/services'>
                Services
            </Link> */}
            <Link to='/staffing'>
                Technology Staffing
            </Link>
            <Link to='/contact'>
                Contact Us
            </Link>
        </div>  
        </div>
    </div>
  )
}

export default Header