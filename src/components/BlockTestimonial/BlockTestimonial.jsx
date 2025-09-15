import s from "./BlockTestimonial.module.css";

const BlockTestimonial = ({ src, text, title, subtitle, isActive }) => {
  return (
    <div className={`${s.blockTestimonial} ${isActive ? s.activeSlide : ""}`}>
      <img className={s.img} src={src} alt="user" />
      <img src="/stars.png" alt="stars" />
      <p className={s.text}>{text}</p>
      <h2 className={s.title}>{title}</h2>
      <h3 className={s.subtitle}>{subtitle}</h3>
    </div>
  );
};

export default BlockTestimonial;
