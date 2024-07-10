import React from "react"
import Heading from "../../common/Heading"
import "./price.css"
import PriceCard from "./PriceCard"

const Price = () => {
  return (
    <>
      <section className='price padding'>
        <div className='container'>
          <Heading title='Select Your Package' subtitle='With a range of customizable plans, we cater to every budget and requirement. Experience seamless integration, top-notch features, and personalized support. Choose the package that aligns with your goals and start your journey today.' />
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Price
