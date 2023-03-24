import React from "react";
import "./Contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hdt7jyu",
        "template_zk7hy7e",
        form.current,
        "uGA3_mVCOfYDUPVVE"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
    alert("Message sent successfully");
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>ziqianpan1998@gmail.com</h5>
            <a href="mailto:ziqianpan1998@gmail.com" target="_blank">
              Send a Email
            </a>
          </article>

          <article className="contact__option">
            <BsLinkedin className="contact__option-icon" />
            <h4>Linkedin</h4>
            <h5>Ziqian Pan</h5>
            <a
              href="https://www.linkedin.com/in/ziqian-pan-943a171a4/"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
