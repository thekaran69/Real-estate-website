import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Recent Property Listed' subtitle='Discover our Recently Listed Properties, showcasing the latest and most desirable homes on the market. Each listing offers unique features and prime locations to meet your lifestyle needs. Stay updated with the freshest opportunities and find your dream home today with our expertly curated selection.' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
