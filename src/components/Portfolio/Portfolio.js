import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/project_1.png";
import IMG2 from "../../assets/project_2.png";
import IMG3 from "../../assets/project_3.png";


const data = [
  {
    id: 1,
    image: IMG1,
    title: "Pawster(Shelter Animal tinder)",
    github: "https://github.com/ZiqianPan/Pawster-Capstone-My-Copy",
    demo: "https://pawster-capstone.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Class-Dash",
    github: "https://github.com/ZiqianPan/Class-Dash",
    demo: "https://imaginative-heliotrope-5965eb.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Youtube-Clone",
    github: "https://github.com/ZiqianPan/Youtube-Clone",
    demo: "https://resplendent-blancmange-b433e1.netlify.app/",
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo})=> {
            return(
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                >
                  Live Site
                </a>
              </div>
            </article>

            )
          })
        }
       
        

      </div>
    </section>
  );
}
