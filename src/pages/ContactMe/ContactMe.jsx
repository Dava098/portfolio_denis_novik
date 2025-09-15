import ContactForm from "../../components/ContactForm/ContactForm";
import s from "./ContactMe.module.css";

const ContactMe = () => {
  return (
    <section className={s.contactMe}>
      <div className={s.container}>
        <div className={s.block_one}>
          <h3 className={s.subtitle}>contact me</h3>
          <h2 className={s.title}>Request Free Consultancy</h2>
        </div>

        <div className={s.block_two}>
          <div className={s.box}>
            <h3 className={s.title}>
              <div className={s.extra}>Hotline 24/7</div>(+23) 5535 68 68
            </h3>

            <p className={s.text}>
              <span className={s.extra}>Address: </span>
              2972 Westheimer Rd. Santa Ana, Illinois 85486
            </p>
            <p className={s.text}>
              <span className={s.extra}>Email: </span>
              nevaeh.simmons@example.com
            </p>
            <p className={s.text}>
              <span className={s.extra}>Fax: </span>
              (702) 555-0122
            </p>
            <p className={s.text}>
              <span className={s.extra}>Work Hour: </span>
              Mon - Sat: 9:00 - 18:00
            </p>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
