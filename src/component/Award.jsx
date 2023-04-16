import React , { useEffect } from "react";
import "../component/Award.css";
import Aos from "aos";
import 'aos/dist/aos.css';
import { GiDiamondTrophy } from "react-icons/gi";
import {BsFillAwardFill } from "react-icons/bs";
function Award() {
  useEffect(()=>{
    Aos.init({duration:3000});
  },[]);
  return (
    <section id="Award">
      <div data-aos="zoom-in-right" className="mainaward" id="sep">
        <div>
          <h1 data-aos="flip-down" className="main_head"><BsFillAwardFill/> Awards</h1>
        </div>
        <div  className="ag-offer-block">
          <div className="ag-format-container">
            <ul className="ag-offer_list">
              <li className="ag-offer_item">
                <div className="ag-offer_visible-item">
                  <div data-aos="flip-up" className="ag-offer_title"><GiDiamondTrophy /> Technomantra</div>
                </div>
                <div className="ag-offer_hidden-item">
                  <p className="ag-offer_text">
                    Vidyalankar polytechnic · Feb 2018
                    RUNNER-UP POSTER
                    PRESENTATION COMPETITION
                  </p>
                </div>
              </li>
              
              <li className="ag-offer_item">
                <div className="ag-offer_visible-item">
                  <div data-aos="flip-up" className="ag-offer_title"><GiDiamondTrophy /> Quiztronic</div>
                </div>
                <div className="ag-offer_hidden-item">
                  <p className="ag-offer_text">
                    Saboo Siddik Polytechnic · Sep 2019 Issued by Saboo Siddik
                    Polytechnic · Sep 2019 RUNNER-UP State level Technical Quiz
                    Competition
                  </p>
                </div>
              </li>
              <li className="ag-offer_item">
                <div className="ag-offer_visible-item">
                  <div data-aos="flip-up"className="ag-offer_title"><GiDiamondTrophy /> Techno Freak</div>
                </div>
                <div className="ag-offer_hidden-item">
                  <p className="ag-offer_text">
                    ISA-VESP · Mar 2020 Issued by ISA-VESP · Mar 2020 Finalist
                    State level Technical Quiz Competition
                  </p>
                </div>
              </li>

              <li className="ag-offer_item">
                <div className="ag-offer_visible-item">
                  <div data-aos="flip-up"  className="ag-offer_title">
                  <GiDiamondTrophy /> Looking Beyond Syllabus (LBS) - Project Competition
                  </div>
                </div>
                <div className="ag-offer_hidden-item">
                  <p className="ag-offer_text">
                    Vivekanand Education Society's Institute of Technology
                    (VESIT) · Mar 2022 Issued by Vivekanand Education Society's
                    Institute of Technology (VESIT) · Mar 2022 Society's
                    Institute Of Technology Top 5 finalists
                  </p>
                </div>
              </li>

              <li className="ag-offer_item">
                <div className="ag-offer_visible-item">
                  <div data-aos="flip-up" className="ag-offer_title"> <GiDiamondTrophy /> CIIA Championship (2022)</div>
                </div>
                <div className="ag-offer_hidden-item">
                  <p className="ag-offer_text">
                    Marshall's Foundation & Rotary Club of Bombay·Mar
                    2022 Issued by Marshall's Foundation & Rotary Club of Bombay,
                    Worli · Mar 2022 Shortlisted for exhibition on 30th & 31st
                    March at Nehru Science Centre
                  </p>
                </div>
              </li>
              <li className="ag-offer_item">
                <div className="ag-offer_visible-item">
                  <div  data-aos="flip-up" className="ag-offer_title">
                  <GiDiamondTrophy /> Tech4Good - National level Project Competition
                  </div>
                </div>
                <div className="ag-offer_hidden-item">
                  <p className="ag-offer_text">
                    Directorate of Technical Education (DTE) Maharashtra State &
                    Joint Director of Technical Education,In collaboration with Vivekanand Education Society's
                    Institute of Technology (VESIT)·Apr 2022
                  </p>
                </div>
              </li>

              <li className="ag-offer_item">
                <div className="ag-offer_visible-item">
                  <div data-aos="flip-up" className="ag-offer_title">
                  <GiDiamondTrophy /> Technology Day , Avinya 2023
                  </div>
                </div>
                <div className="ag-offer_hidden-item">
                  <p className="ag-offer_text">
                    Electronics and telecommunication engineering Department of
                    VESIT· Mar 2023 Third position in
                    B.E Project competition
                  </p>
                </div>
              </li>
              <li className="ag-offer_item">
                <div className="ag-offer_visible-item">
                  <div data-aos="flip-up"  className="ag-offer_title">
                  <GiDiamondTrophy /> PRAKALP 2K23 (Hardware Category)
                  </div>
                </div>
                <div className="ag-offer_hidden-item">
                  <p className="ag-offer_text">
                    FrCRCE , Bandra organised by IEEE WIE CRCE · Mar 2023 3rd
                    prize winner in Hardware track
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Award;
