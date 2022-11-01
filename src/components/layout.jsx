import * as React from "react"
import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";

const Layout = ({children}) => {
  return(
    <div className="layout">
      <Header/>
      <main className="main">
        {children}
  </main>
      <Footer/>
    </div>
  )
}

export default Layout
