import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";

function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <ScrollAnimation animateIn="fadeInLeft">
            <Image
              src="/man-svgrepo-com.svg"
              alt="man-svgrepo"
            />
          </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInUp">
              Passionate <strong>React Developer</strong> with over 1 year of hands-on experience building scalable web applications and admin dashboards. I specialize in delivering complex front-end features using React.js, TypeScript, REST APIs, and modern UI libraries, with a strong focus on debugging, performance optimization, and cross-functional collaboration.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInUp">
              I hold a Bachelor's degree in Computer and Informatics from Zagazig University, graduating with a GPA of 3.94/4.0. My academic background is complemented by practical experience in both company-based and remote settings.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInUp">
              Currently, I work at <strong>ITD Company</strong> in Cairo, Egypt, where I lead front-end development for a real estate management system used by over 10 companies. I have developed more than 30 reusable components, integrated 80+ API endpoints, and improved performance by 40% through optimizations. I also developed an HR attendance dashboard used by 100+ employees and implemented features like real-time task notifications and automated report generation.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInUp">
              Previously, I completed an internship at <strong>Code Alpha</strong> in India, where I developed and deployed 3 production-grade SPAs, achieving 90%+ Lighthouse scores using best practices in React.js. I also earned a scholarship from <strong>ALX</strong>, where I completed a 1-year intensive full-stack training program, solving 100+ algorithmic problems and leading 4 collaborative projects.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInUp">
              I’m driven by a continuous desire to learn and grow, and I aim to reach the highest levels of professionalism in web development, ultimately aspiring to establish my own successful company.
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInUp" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
