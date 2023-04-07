import React from "react";
import "../component/Main.css";
import AK from "../component/asset/img/ak.jpg";
function Main() {
  return (
    <div className="Main" id="main_body">
      <div className="box" id="profile">
        <img id="profimg" src={AK} alt="" />
        <div id="DETAILS">
          <p>Name:Arunkumar</p>
          <p>STD:</p>
          <p>CLASS:</p>
          <p>ROLL:</p>
          <p>COLLEGE:</p>
        </div>
      </div>
      <div className="box" id="about">
        <div id="info">I am a skilled Frontend Web Developer with a passion for electronics and
        R&D. With strong expertise in HTML, CSS, and JavaScript, I enjoy
        exploring new technologies and creating innovative solutions. As a team
        player, I value collaboration and continuous learning. My innovative
        mindset makes me a valuable asset to any organization looking for a
        motivated Frontend Web Developer.</div>
    
        <div className="skill">
          <p>Html</p>
          <p>Css</p>
          <p>javascript</p>
          <p>React</p>
          <p>Bootstrap</p>
          <p>Sql</p>
          <p>Ui & Ux</p>
          <p>Circuit Designing</p>
          <p>Arduino</p>
        </div>
      </div>
    </div>
  );
}

export default Main;
