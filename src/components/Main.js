import React from "react"

import Popular from "./sections/Popular"
import Category from "./sections/Category"
import Collection from "./sections/Collection"
import Team from "./sections/Team"
import Testimonial from "./sections/Testimonial"
import ContactUs from "./sections/ContactUs"
import Feature from "./sections/Feature"
import Loading from "./sections/Loading"
import Footer from "./sections/Footer"
function Main() {
  return (
    <div className="min-w-full ">
      <Popular />
      <Category />
      <Collection />
      <Team />
      <Testimonial />
      <ContactUs />
      <Feature />
      <Loading />
      <Footer />
    </div>
  )
}

export default Main
