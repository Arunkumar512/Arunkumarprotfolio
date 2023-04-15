import { useEffect } from "react";
import React from "react";
import "../component/Main.css";
import AK from "../component/asset/img/ak.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import CV from "../component/asset/arun_resume.pdf";
import { IoLogoGithub } from "react-icons/io";
import { AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
function Main() {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);
  return (
    <div data-aos="fade-right" className="Main" id="main_body">
      <div className="box" id="profile">
        <div data-aos="fade-down-left">
          <img id="profimg" src={AK} alt="" />
        </div>
        <div data-aos="fade-up-right" id="DETAILS">
          <p>
            I am an engineering student from Mumbai who enjoys participating in
            competitions to showcase my skills and expand my connection. I am
            always seeking new avenues to apply my talents and pursue my
            passions
          </p>
          <div id="CV">
            <a id="CV1" href={CV} download>
              Resume
            </a>
          </div>
        </div>
        <div id="icon">
          <a href="https://github.com/Arunkumar512">
            <IoLogoGithub />
          </a>
          <a href="https://www.linkedin.com/in/arunkumar-mariappan-883b06218/">
            <AiFillLinkedin />
          </a>
          <a href="mailto:arunkumar512199@gmail.com">
            <SiGmail />
          </a>
        </div>
      </div>
      <div data-aos="flip-up" className="box" id="about">
        <div id="info">
          As a frontend web developer and electronics enthusiast, I have a
          unique combination of skills that can enable me to merge these two
          fields and create innovative solutions. By utilizing my expertise in
          building user interfaces and web applications, I can explore emerging
          technologies like IoT and wearables to create immersive user
          experiences that blend the physical and digital worlds. My passion for
          research and development can drive me to constantly learn and
          experiment, leading to new creative ideas and approaches in my work.
          By embracing this interdisciplinary approach, I can push the
          boundaries of what's possible and create unique and engaging user
          experiences.{" "}
        </div>
        <div id="skilltag"> Skills -</div>
        <div data-aos="slide-up" className="skill">
          <p>Html</p>
          <p>Css</p>
          <p>javascript</p>
          <p>React</p>
          <p>Bootstrap</p>
          <p>Sql</p>
          <p>Ui & Ux</p>
          <p>Circuit Design</p>
          <p>Arduino</p>
        </div>
      </div>
    </div>
  );
}

export default Main;
