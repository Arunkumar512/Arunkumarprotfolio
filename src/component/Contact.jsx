import React,{useEffect} from "react";
import "../component/Contact.css";
import dim from "../component/asset/img/img2.png";
import Aos from "aos";
import "aos/dist/aos.css";
function Contact() {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);

  return (
    <section id="Contact">
      <div data-aos="fade-right" className="maincont" id="mainbox">
        <div className="main_box">
          <div data-aos="flip-left" className="main_box1">
            <img src={dim} alt="img" />
            <span>Little bit about me...</span>
          </div>
         <div  className="exp1">
         <div data-aos="flip-right" className="exp">
           <li>Experience -</li>
           <li>
            Student Intern Vesit 2 Months
            analytics of Student Database using Google Script and Spreadsheet</li> 
            <li>Technovision India Pvt Ltd.Internship 2months
           Worked as a assistant engineer 
            </li>
          </div>
          <div data-aos="flip-right"className="content">
           <li>Passion -</li>
           <li> I enjoy playing and watching cricket, as well as having aquarium
            fish as a hobbiest. I also enjoy occasional driving and watching
            movies.</li>
          </div>
         </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
