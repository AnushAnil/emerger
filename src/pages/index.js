import * as React from "react"
import ContactUs from "../components/ContactUs"
import Layout from "../components/layout"
import Customers from "../components/Customers"
import Services from "../components/Services"
import Hero from "../components/Hero"

const BlogIndex = () => {
  return <Layout>
    <Hero/>
    <Services/>
    <Customers/>
    <ContactUs/>
  </Layout>
}

export default BlogIndex