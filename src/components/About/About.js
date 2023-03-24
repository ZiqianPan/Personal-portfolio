import React from "react";
import "./About.css";
// import ME from "../../assets/me-about.jpg";
import ME from "../../assets/Ziqian_Pan.png";
import { BsAward } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { AiOutlineFolderOpen } from "react-icons/ai";

export default function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years of Full-Stack Experience</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Education</h5>
              <small>Pursuit - Google-funded software engineering fellowship </small>
            </article>

            <article className="about__card">
              <AiOutlineFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small><a href="https://github.com/ZiqianPan" target="_blank">Github</a></small>
            </article>
          </div>

          <p>
          I am a full-stack software developer based in Brooklyn, NY. As a software developer 
          I have a soft spot for well designed applications and clean readable code. I enjoy the process of creating new applications and are always learning to further refind my skill sets. 
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}
