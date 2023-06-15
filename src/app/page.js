"use client"

import { BrowserRouter } from "react-router-dom"
import Header from "../components/header/Header"
import Routes from "../components/routes/Routes"
import Footer from "../components/footer/Footer"

export default function Home() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className='padding-class'>
          <Routes />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
