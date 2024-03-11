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
              Greetings! My name is <strong>Eslam Elsayed</strong>, hailing from the vibrant city of Zagazig, Egypt. Currently pursuing my studies at the College of Computers and Information, I've delved into the world of programming and acquired a diverse skill set. My journey into the realm of front-end development began some time ago, and as I navigated the intricacies of web development, my passion for creativity and design flourished.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInUp">
              Balancing my academic pursuits, I am concurrently enrolled in an academy, honing my skills to become proficient in the ever-evolving field of web development. Alongside my technical abilities, I pride myself on my strong social skills, making connections and friendships effortlessly.
            </ScrollAnimation>

            <br /><br />
            <ScrollAnimation animateIn="fadeInUp">
              A notable achievement in my portfolio is the establishment of an online store dedicated to NASA-themed merchandise. This venture not only showcased my skills but also garnered significant interest from a wide audience.
            </ScrollAnimation>

            <br /><br />
            <ScrollAnimation animateIn="fadeInUp">
              In the collaborative world of technology, my ethos centers around mutual support, openness, and a commitment to shared success. I find joy in sharing knowledge, believing that generosity in information breeds professional growth and enhances the quality of our work.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInUp">
              Looking ahead, my aspiration is to ascend to the pinnacle of professionalism within the web development domain. Ultimately, my goal is to leverage my expertise to establish and nurture my own successful company.
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
