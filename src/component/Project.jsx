import React, { useEffect } from "react";
import "../component/Project.css";
import Aos from "aos";
import "aos/dist/aos.css";
import dim from "../component/asset/img/img3.png"
function Project() {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);
  return (
    <section id="Project">
      <div data-aos="fade-right" className="mainproject">
        <div data-aos="slide-left" id="major">
          <h1>Major Project</h1>
          <p>
            Passion is the driving force behind an engineer's dedication,
            enthusiasm, and creativity. It elevates engagement and commitment,
            fostering the drive to achieve success in any endeavor. An
            engineer's passion for a project inspires them to think outside the
            box and come up with innovative solutions. This leads to a higher
            level of productivity, ultimately resulting in a better end result.
            In short, passion is the key ingredient for an engineer's success.
          </p>
        </div>
        <div data-aos="filp-up" id="projectDetail">
          <div className="main_card" id="important">
            {/* 1st */}
            <div  data-aos="fade-down-left"className="card2" id="one">
              <div className="face face1">
                <div className="content2">
                  <p></p>
                  <p>
                  Firefighting robot provides advanced support to human firefighters in hazardous situations. Equipped with sensors and tools, it detects, navigates, and extinguishes flames. This autonomous robot ensures human safety and helps protect both firefighters and civilians."
                  </p>
                </div>
              </div>
              <div className="face face2"></div>
            </div>

            <div data-aos="fade-down-left"className="card2" id="two">
              <div className="face face1">
                <div className="content2">
                  <p></p>
                  <p>
                  Vending machine offers engineers, technicians, and hobbyists 24/7 access to a wide range of electronic components. With real-time inventory tracking and automatic restocking, users can rely on it to have the parts they need. The machine is designed with security features to prevent theft and safeguard components.
                  </p>
                </div>
              </div>
              <div className="face face2"></div>
            </div>

            <div data-aos="fade-down-left" className="card2" id="three">
              <div className="face face1">
                <div className="content2">
                  <p></p>
                  <p>
                  Water quality monitoring system tracks critical parameters such as pH, temperature, and turbidity in real-time. With advanced sensors and a cloud-based data analytics platform, users can promptly detect and resolve water quality issues. The system is highly customizable and scalable, from small to large municipal water systems
                  </p>
                </div>
              </div>
              <div className="face face2"></div>
            </div>

            <div data-aos="fade-down-left"className="card2" id="four">
              <div className="face face1">
                <div className="content2">
                  <p></p>
                  <p>
                  Aquaponic system combines aquaculture and hydroponics to create sustainable farming. It includes a filter and water quality monitoring for optimal plant and fish growth without pesticides or fertilizers.Our scalable and automated system is customizable, and we're committed to promoting smart and sustainable farming
                  </p>
                </div>
              </div>
              <div className="face face2"></div>
            </div>
          </div>
          <div id="thread">
            <img src={dim} alt="3d img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;

