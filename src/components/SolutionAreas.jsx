import {
  useInView, motion

} from 'framer-motion';
import React, { useRef } from 'react'
import { Icons } from '../utils/data';
import { useSplitText } from '../hooks/useSplitText';



function SolutionAreas() {
  const solutions = [
    { icon: <Icons.People />, title: "Modern Work", desc: "Enable collaboration, communication & productivity." },
    { icon: <Icons.Shield />, title: "Security", desc: "Strengthen your security posture and ensure compliance." },
    { icon: <Icons.Cloud />, title: "Infrastructure", desc: "Build a scalable, secure and resilient IT infrastructure." },
    { icon: <Icons.Database />, title: "Data & AI", desc: "Turn your data into intelligent insights with AI." },
    { icon: <Icons.Briefcase />, title: "Business Applications", desc: "Streamline operations with Microsoft business applications." },
    { icon: <Icons.Azure />, title: "Cloud Migration", desc: "Migrate to Microsoft Cloud with confidence and minimal risk." },
    { icon: <Icons.Rocket />, title: "Workflow Automation", desc: "Automate repetitive tasks and improve efficiency." },
    { icon: <Icons.Chart />, title: "Power BI Reporting", desc: "Visualize data and make smarter, faster decisions." },
    { icon: <Icons.Grid />, title: "SharePoint Intranet", desc: "Build powerful intranets and manage documents securely." },
    { icon: <Icons.Check />, title: "Managed Services", desc: "Proactive support and management for your environment." },
  ];

  const ref = useRef(null);
   const inView = useInView(ref, { once: true, amount: 0.2 });

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } },
  };
  const textRef = useRef(null)
  useSplitText(textRef)


  return (
    <section
      ref={ref}
      className="solutions-section"
    >
      <div className="container">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="solutions-header"
        >
          <div className="section-tag">
            OUR SOLUTION AREAS
          </div>

          <h2 ref={textRef} className="solutions-title">
            Solutions That Drive Real Business Outcomes
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="solutions-grid"
        >
          {solutions.map((sol, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{
                y: -6,
                boxShadow:
                  "0 16px 40px rgba(37,99,235,0.1)"
              }}
              className="solution-card"
            >
              <div className="solution-icon">
                {sol.icon}
              </div>

              <div className="service-card-title">
                {sol.title}
              </div>

              <div className="service-card-desc">
                {sol.desc}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default SolutionAreas;