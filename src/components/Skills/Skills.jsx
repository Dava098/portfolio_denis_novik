import BlockService from "../BlockService/BlockService";
import s from "./Skills.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules";

const Skills = () => {
  const skillsData = [
    {
      id: 1,
      title: "Website / App DesignUX / UI Design",
      text: "Creating Engaging Digital Experiences for Websites and Apps through UX/UI Design",
    },
    {
      id: 2,
      title: "Strategic Marketing and Creative Content",
      text: "Elevating Brands and Engagement through Strategic Marketing and Creative Content",
    },
    {
      id: 3,
      title: "Multivendor eCommerce Website Solutions",
      text: "Unlocking the World of Multivendor eCommerce Websites",
    },
    {
      id: 4,
      title: "Crafting Brand Strategies and Artistic Direction",
      text: "Delving Deep into Crafting Comprehensive Brand Strategies and Offering Expert Guidance",
    },
  ];

  return (
    <section className={s.skills}>
      <div className={s.block_one}>
        <h3 className={s.subtitle}>Services</h3>
        <h2 className={s.title}>
          Exploring My Design <span className={s.extra}>Skills</span>
        </h2>
        <p className={s.text}>
          We transform your ideas into a distinctive web project that both
          inspires you and captivates your customers
        </p>
      </div>

      <div className={s.block_two}>
        <button className={`${s.btn} swiper-button-prev`}>
          <svg
            className={s.icon}
            width="27"
            height="16"
            viewBox="0 0 27 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.792893 7.29289C0.402369 7.68342 0.402369 8.31658 0.792892 8.7071L7.15685 15.0711C7.54738 15.4616 8.18054 15.4616 8.57107 15.0711C8.96159 14.6805 8.96159 14.0474 8.57107 13.6569L2.91421 8L8.57107 2.34314C8.96159 1.95262 8.96159 1.31946 8.57107 0.928931C8.18054 0.538406 7.54738 0.538406 7.15686 0.92893L0.792893 7.29289ZM26.5 7L14 7L14 9L26.5 9L26.5 7ZM14 7L1.5 7L1.5 9L14 9L14 7Z"
              fill="#0077FF"
            />
          </svg>
        </button>
        <button className={`${s.btn} swiper-button-next`}>
          <svg
            className={s.icon}
            width="27"
            height="16"
            viewBox="0 0 27 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.2071 8.70711C26.5976 8.31658 26.5976 7.68342 26.2071 7.29289L19.8431 0.928932C19.4526 0.538408 18.8195 0.538408 18.4289 0.928932C18.0384 1.31946 18.0384 1.95262 18.4289 2.34315L24.0858 8L18.4289 13.6569C18.0384 14.0474 18.0384 14.6805 18.4289 15.0711C18.8195 15.4616 19.4526 15.4616 19.8431 15.0711L26.2071 8.70711ZM0.5 9H13V7H0.5V9ZM13 9H25.5V7H13V9Z"
              fill="#0077FF"
            />
          </svg>
        </button>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          781: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1206: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className={s.mySwiper}
      >
        {skillsData.map((skill) => (
          <SwiperSlide key={skill.id}>
            {({ isActive }) => (
              <BlockService
                title={skill.title}
                text={skill.text}
                isActive={isActive}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Skills;
