import { useState } from "react";
import s from "./OurProjects.module.css";

const OurProjects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categoriesData = [
    {
      category: "All",
      items: [
        { src: "/preview1.jpg" },
        { src: "/preview2.jpg" },
        { src: "/preview3.jpg" },
        { src: "/preview4.jpg" },
        { src: "/preview5.jpg" },
        { src: "/preview6.jpg" },
      ],
    },
    {
      category: "UI/UX Design",
      items: [{ src: "/preview1.jpg" }, { src: "/preview2.jpg" }],
    },
    {
      category: "Branding Design",
      items: [{ src: "/preview3.jpg" }, { src: "/preview4.jpg" }],
    },
    {
      category: "Wordpress",
      items: [{ src: "/preview5.jpg" }, { src: "/preview6.jpg" }],
    },
  ];

  const activeData = categoriesData.find(
    (cat) => cat.category === activeCategory
  );

  return (
    <section className={s.ourProjects}>
      <h3 className={s.subtitle}>Our projects</h3>
      <h2 className={s.title}>
        Presenting My Design Portfolio and Case Studies
      </h2>

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
          <img key={index} src={item.src} alt="project" />
        ))}
      </div>
    </section>
  );
};

export default OurProjects;
