import React from 'react'
import Layout from '../layout/Layout.jsx'
import HeroSection from './sections/HeroSection.jsx'
import WeTrust from './sections/WeTrust.jsx'
import FeatureSection from './sections/FeaturesAndBenefits.jsx'
import VideoDemo from './sections/VideoDemo.jsx'
import ContactUs from './sections/ContactUs.jsx'

const Home = () => {
  return (

    <Layout>
        <HeroSection/>
        <WeTrust/>
        <FeatureSection/>
        <VideoDemo/>
        <ContactUs/>
    </Layout>
  )
}

export default Home