import { useState } from "react";
import s from "./AboutMe.module.css";

const AboutMe = () => {
  const [activeCategory, setActiveCategory] = useState("Main Skills");

  const categoriesData = [
    {
      category: "Main Skills",
      items: [
        { desc: "User Experience Design - UI/UX", width: "95%" },
        { desc: "Web & User Interface Design - Development", width: "93%" },
        { desc: "Interaction Design - Animation", width: "84%" },
      ],
    },
    {
      category: "Awards",
      items: [
        { desc: "Best Designer Award 2023", width: "70%" },
        { desc: "Web Design Excellence Award", width: "65%" },
        { desc: "UI Innovation Prize", width: "40%" },
      ],
    },
    {
      category: "Education",
      items: [
        { desc: "Master in Web Design - Harvard University", width: "70%" },
        { desc: "Bachelor of Arts - Stanford University", width: "50%" },
        { desc: "UX Certification - Google", width: "10%" },
      ],
    },
  ];

  const activeData = categoriesData.find(
    (cat) => cat.category === activeCategory
  );

  return (
    <section className={s.aboutMe}>
      <img className={s.logo} src="/aboutMe.jpg" alt="aboutMe" />

      <div className={s.container}>
        <h3 className={s.subtitle}>About Me</h3>
        <h2 className={s.title}>
          <div className={s.extra}>20 Year’s Experience</div> on Product Design
        </h2>
        <p className={s.text}>
          Hello there! I'm <strong>Robert Junior.</strong> I specialize in web
          design and development, and I'm deeply passionate and committed to my
          craft. With <strong>20 years</strong> of experience as a professional
          graphic designer
        </p>

        <div className={s.block_one}>
          {categoriesData.map((category) => (
            <button
              key={category.category}
              className={`${s.btn} ${
                activeCategory === category.category ? s.active : ""
              }`}
              onClick={() => setActiveCategory(category.category)}
            >
              {category.category}
            </button>
          ))}
        </div>

        <div className={s.block_two}>
          {activeData.items.map((item, index) => (
            <div key={index} className={s.box}>
              <p className={s.desc}>{item.desc}</p>
              <div className={s.line_one}>
                <div className={s.line_two} style={{ width: item.width }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
