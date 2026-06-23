import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Challenges from '../components/Challenges'
import SolutionAreas from '../components/SolutionAreas'
import Industries from '../components/Industries'
import CaseStudies from '../components/CaseStudies'
import DeliveryProcess from '../components/DeliveryProcess'
import Resources from '../components/Resources'
import ClientLogos from '../components/ClientLogos'
import Testimonials from '../components/Testimonials'
import LeadershipTeam from '../components/LeadershipTeam'
import CTASection from '../components/CTASection'
import BusinessServices from '../components/BusinessServices'

function Home() {
    return (
        <div>
            <Hero />
            <BusinessServices />
            <Challenges />
            <SolutionAreas />
            <Industries />
            <CaseStudies />
            <DeliveryProcess />
            <Resources />
            <ClientLogos />
            <Testimonials />
            <LeadershipTeam />
            <Services />
            <CTASection />
        </div>
    )
}

export default Home