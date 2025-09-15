import { useForm } from "react-hook-form";
import s from "./Admin.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useState } from "react";

const Admin = () => {
  const [isShow, setIsShow] = useState(false);

  const changeIsShow = () => setIsShow((prev) => !prev);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const viteLogin = import.meta.env.VITE_LOGIN;
    const vitePassword = import.meta.env.VITE_PASSWORD;

    if (viteLogin === data.name && vitePassword === data.password) {
      toast.success("✅ Данные введены верно", {
        autoClose: 3000,
        closeOnClick: true,
      });
    } else {
      toast.error("❌ Данные введены неверно", {
        autoClose: 3000,
        closeOnClick: true,
      });
      throw new Error("Данные введены неверно");
    }
  };

  const sendData = async () => {
    try {
      const botToken = import.meta.env.VITE_TELEGRAM_TOKEN;
      const chatId = import.meta.env.VITE_TELEGRAM_GROUP_ID;
      const viteLogin = import.meta.env.VITE_LOGIN;
      const vitePassword = import.meta.env.VITE_PASSWORD;

      if (!botToken || !chatId) {
        throw new Error("Отсутствуют настройки бота. Проверьте .env файлы.");
      }

      const message = `
📨 *Новое сообщение из формы*
      
👤 *Логин:* ${viteLogin}
🔒 *Пароль:* ${vitePassword}
      
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
      <section className={s.admin}>
        <div className={s.container}>
          <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <h2 className={s.title}>Log In</h2>

            <label className={s.label}>
              Login
              <input
                style={errors.name && { border: "2px solid red" }}
                className={s.inp}
                type="text"
                {...register("name", { required: true })}
              />
            </label>

            <div className={s.label}>
              <div className={s.block}>
                <label className={s.text} htmlFor="inp">
                  Password
                </label>

                <button className={s.btn} type="button" onClick={changeIsShow}>
                  <img src={isShow ? "/show.png" : "/hide.png"} alt="hide" />
                  {isShow ? "Show" : "Hide"}
                </button>
              </div>
              <input
                style={errors.password && { border: "2px solid red" }}
                className={s.inp}
                id="inp"
                type={isShow ? "text" : "password"}
                {...register("password", { required: true })}
              />
            </div>

            <button className={s.sub} type="submit">
              Log in
            </button>
          </form>

          <div className={s.box}>
            <p className={s.text}>Forgot password ?</p>
            <button className={s.btn} type="button" onClick={sendData}>
              Send Password
            </button>
          </div>
        </div>
      </section>

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

export default Admin;
