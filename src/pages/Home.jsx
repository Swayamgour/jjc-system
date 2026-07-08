import React from 'react'
import Hero from '../components/Hero'
import WhyChooseUs from '../components/WhyChooseUs'
import Services from '../components/Services'
import DetailedServices from '../components/DetailedServices'
import Challenges from '../components/Challenges'
import SolutionAreas from '../components/SolutionAreas'
import Industries from '../components/Industries'
import CaseStudies from '../components/CaseStudies'
import DeliveryProcess from '../components/DeliveryProcess'
import Benefits from '../components/Benefits'
import Resources from '../components/Resources'
import ClientLogos from '../components/ClientLogos'
import Testimonials from '../components/Testimonials'
import LeadershipTeam from '../components/LeadershipTeam'
import WhyJJCPartner from '../components/WhyJJCPartner'
import CTASection from '../components/CTASection'
import BusinessServices from '../components/BusinessServices'
import { floatingCards, Icons } from "../utils/data";
import heroImage from "../assets/1-01.png";
import ContactFAQ from '../components/contact/ContactFAQ'

function Home() {

    const microsoftHero = {
        tag: "SMART SOLUTIONS. REAL IMPACT.",

        title: (
            <>

                {/* Microsoft Consulting Services for Business Transformation */}

                Microsoft Consulting
                <br />
                Services for
                <span className="highlight"> Modern</span>
                <br />
                Business Operations
            </>
        ),

        description:
            "Modern businesses require secure, scalable, and intelligent technology solutions to improve efficiency and stay competitive. JJC Systems delivers Microsoft Consulting Services that help organizations modernize operations, enhance productivity, strengthen cybersecurity, and accelerate digital transformation.",


        primaryButton: {
            text: "Schedule a Microsoft Consultation",
            link: "/contact"
        },

        secondaryButton: {
            text: "Explore Microsoft Services",
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

    const faqs = [
        {
            q: "What are Microsoft Consulting Services?",
            id: 1,
            a: "Microsoft Consulting Services help businesses implement, optimize, and manage Microsoft technologies such as Microsoft 365, Azure, Dynamics 365, Power Platform, and security solutions.",
        },
        {
            q: "Why should businesses hire a Microsoft consultant?",
            id: 2,
            a: "A Microsoft consultant helps organizations choose the right solutions, improve implementation success, reduce technology challenges, and maximize Microsoft investments.",
        },
        {
            q: "What Microsoft solutions does JJC Systems provide?",
            id: 3,
            a: "JJC Systems provides Microsoft consulting for Microsoft 365, Azure, Dynamics 365, Power Platform, Business Central, SharePoint, Power BI, and Microsoft security solutions.",
        },
        {
            q: "How can Microsoft Azure help my business?",
            id: 4,
            a: "Azure provides secure cloud infrastructure, scalable applications, flexible computing resources, and modern cloud capabilities.",
        },
        {
            q: "Can Microsoft solutions integrate with existing systems?",
            id: 5,
            a: "Yes. Microsoft solutions can integrate with existing applications, workflows, and business platforms to improve efficiency.",
        },
        {
            q: "Does JJC Systems provide ongoing Microsoft support?",
            id: 6,
            a: "Yes. JJC Systems provides optimization, guidance, and support services to help businesses maintain successful Microsoft environments.",
        },
    ];

    return (
        <div>
            <Hero {...microsoftHero} />
            <WhyChooseUs />
            <BusinessServices />
            <DetailedServices />
            <Challenges />
            <SolutionAreas />
            <Industries />
            <CaseStudies />
            <DeliveryProcess />
            <Benefits />
            <Resources />
            <ClientLogos />
            <Testimonials />
            <LeadershipTeam />
            <WhyJJCPartner />

            <ContactFAQ faqs={faqs} />
            <Services />
            {/* <CTASection /> */}
        </div>
    )
}

export default Home
