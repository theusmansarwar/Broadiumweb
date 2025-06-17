import React from 'react'
import SolutionsSection from '../../Components/SolutionsSection/SolutionsSection'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'
import ServicesSection from '../../Components/ServicesSection/ServicesSection'
import DrivingSuccess from '../../Components/DrivingSuccess/DrivingSuccess'
import './Streaming.css'
const Streaming = () => {
  return (
    <div>
      <div className='bg-img-straming-page'/>
      <div className="streamingpage-content">
   <div className="heading-area">
        <p>Get Connected!</p>
        <p>
          Find Cable <span>TV & Internet</span> Providers Nearby
        </p>
         <p>
            We’re here to help you take your brand to the next level. Whether
            you have a project in mind, need support, or just want to learn more
            about what we do, we’d love to hear from you.
          </p>
      </div>
        <Breadcrumb/>
        <SolutionsSection/>
        <ServicesSection/>
        <DrivingSuccess/>
        </div>
    </div>
  )
}

export default Streaming