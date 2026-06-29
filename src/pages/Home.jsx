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
import { floatingCards, Icons } from "../utils/data";
import heroImage from "../assets/1-01.png";

function Home() {

    const microsoftHero = {
        tag: "SMART SOLUTIONS. REAL IMPACT.",

        title: (
            <>
                Microsoft Consulting
                <br />
                Services for
                <span className="highlight"> Modern</span>
                <br />
                Business Operations
            </>
        ),

        description:
            "JJC Partners helps enterprises unlock the full potential of Microsoft technologies to drive efficiency, agility, and growth.",

        primaryButton: {
            text: "Schedule a Consultation",
            link: "/contact"
        },

        secondaryButton: {
            text: "Explore Microsoft Solutions",
            link: "/services"
        },

        image: heroImage,

        partners: [
            {
                icon: <Icons.M365 />,
                title: "Microsoft 365"
            },
            {
                icon: <Icons.Azure />,
                title: "Azure"
            },
            {
                icon: <Icons.Dynamics />,
                title: "Dynamics 365"
            }
        ],

        floatingCards
    };


    

    
    return (
        <div>
            <Hero {...microsoftHero} />
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