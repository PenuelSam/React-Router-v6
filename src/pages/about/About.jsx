import React from "react";
import Header from "../../Components/Header";
import StoryImage from "../../images/about1.jpg"
import VisionImage from "../../images/about2.jpg"
import MissionImage from "../../images/about3.jpg"
import HeaderImage from "../../images/header_bg_1.jpg";
import "./About.css";
const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis in
        enim iste incidunt, quasi sunt.
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="OurStoryImage" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, molestiae. Nemo, et veritatis, nostrum, dolore aut veniam aspernatur iste cum quaerat atque perferendis. Enim veniam ea accusantium perferendis quidem, magni velit. Totam, illo accusamus doloremque, nihil delectus, repellendus quis natus earum placeat cupiditate iure praesentium!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore laborum numquam nisi doloribus, voluptate atque neque laudantium, obcaecati eius architecto fugiat voluptatibus? Nobis amet harum quibusdam ex architecto quia. Animi!
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, alias!</p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, molestiae. Nemo, et veritatis, nostrum, dolore aut veniam aspernatur iste cum quaerat atque perferendis. Enim veniam ea accusantium perferendis quidem, magni velit. Totam, illo accusamus doloremque, nihil delectus, repellendus quis natus earum placeat cupiditate iure praesentium!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore laborum numquam nisi doloribus, voluptate atque neque laudantium, obcaecati eius architecto fugiat voluptatibus? Nobis amet harum quibusdam ex architecto quia. Animi!
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="OurVisionImage" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
        <div className="about__section-image">
            <img src={MissionImage} alt="OurMissionImage" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, molestiae. Nemo, et veritatis, nostrum, dolore aut veniam aspernatur iste cum quaerat atque perferendis. Enim veniam ea accusantium perferendis quidem, magni velit. Totam, illo accusamus doloremque, nihil delectus, repellendus quis natus earum placeat cupiditate iure praesentium!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore laborum numquam nisi doloribus, voluptate atque neque laudantium, obcaecati eius architecto fugiat voluptatibus? Nobis amet harum quibusdam ex architecto quia. Animi!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
