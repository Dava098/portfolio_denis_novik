import { useForm } from "react-hook-form";
import s from "./ContactForm.module.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const botToken = import.meta.env.VITE_TELEGRAM_TOKEN;
      const chatId = import.meta.env.VITE_TELEGRAM_GROUP_ID;

      if (!botToken || !chatId) {
        throw new Error("Отсутствуют настройки бота. Проверьте .env файлы.");
      }

      const message = `
📨 *Новое сообщение из формы*
      
👤 *Имя:* ${data.name}
📧 *Email:* ${data.email}
📝 *Тема:* ${data.title}
📝 *Сообщение:* ${data.subtitle}
      
*Время отправки:* ${new Date().toLocaleString("ru-RU")}
            `.trim();

      const toastId = toast.loading("Отправляем сообщение в Telegram...");

      try {
        const response = await axios.post(
          `https://api.telegram.org/bot${botToken}/sendMessage`,
          {
            chat_id: chatId,
            text: message,
            parse_mode: "Markdown",
          }
        );

        if (response.data.ok) {
          toast.update(toastId, {
            render: "✅ Сообщение успешно отправлено в Telegram!",
            type: "success",
            isLoading: false,
            autoClose: 3000,
            closeOnClick: true,
          });
          reset();
        } else {
          console.error("Ошибка отправки:", response.data);
          throw new Error(
            response.data.description || "Неизвестная ошибка Telegram API"
          );
        }
      } catch (error) {
        toast.update(toastId, {
          render: `❌ Ошибка отправки: ${error.message}`,
          type: "error",
          isLoading: false,
          autoClose: 5000,
          closeOnClick: true,
        });
      }
    } catch (error) {
      console.error("Ошибка:", error);
      toast.error(`❌ Произошла ошибка: ${error.message}`);
    }
  };

  return (
    <>
      <form className={s.contactForm} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.block_one}>
          <input
            style={errors.name && { border: "2px solid red" }}
            className={s.inp}
            type="text"
            placeholder="Name*"
            autoComplete="name"
            {...register("name", { required: true })}
          />
          <input
            style={errors.name && { border: "2px solid red" }}
            className={s.inp}
            type="email"
            placeholder="Email Address*"
            autoComplete="email"
            {...register("email", {
              required: true,
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Некорректный email",
              },
            })}
          />
        </div>

        <input
          className={s.inp}
          type="text"
          placeholder="How can we help you?"
          autoComplete="off"
          {...register("title")}
        />

        <textarea
          className={s.textarea}
          placeholder="How can we help you?"
          autoComplete="off"
          {...register("subtitle")}
        ></textarea>

        <label className={s.block_two}>
          <input
            type="checkbox"
            {...register("checkbox", { required: true })}
          />
          <p className={s.text} style={errors.checkbox && { color: "red" }}>
            By submitting, I’m agreed to the
            <a
              className={s.extra}
              target="_blank"
              href="https://www.termsfeed.com/blog/sample-terms-and-conditions-template/"
            >
              Terms & Conditions
            </a>
          </p>
        </label>

        <button className={s.btn} type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Request Now"}
        </button>
      </form>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default ContactForm;
