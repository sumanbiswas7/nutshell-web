import styles from "./apply.module.scss";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as EmailValidator from "email-validator";

export default function ApplyScreen() {
  const nameRef = useRef();
  const emailRef = useRef();
  const numberRef = useRef();
  const errorToast = (message) => {
    toast.error(message, {
      position: "top-left",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  function submitHandler(e) {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const number = numberRef.current.value;
    if (!name || !email) {
      errorToast("Please fill the form correctly");

      return;
    }
    if (!EmailValidator.validate(email)) {
      errorToast("Please enter a valid email");
      return;
    }
    const emailLink = `mailto:sumanbiswas842001@gmail.com?subject=NUTSHELL%20-%20APPLY&body=Name%20-%20${name}%0D%0AEmail%20-%20${email}%0D%0AWhatsapp%20-%20${
      number || "N/A"
    }%0D%0A%0D%0AAnything%20else%20you%20wanna%20say%20%F0%9F%91%87%0D%0A`;
    window.open(emailLink, "_blank");
    // console.log((nameRef.current.style.border = "1px solid red"));
  }

  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className={styles.screen}>
        <form onSubmit={submitHandler} className={styles.section_1}>
          <h4 className={styles.section_1__header}>APPLY FOR YOUR APP</h4>
          <input
            className={styles.section_1__input}
            placeholder="FULL NAME *"
            ref={nameRef}
          />
          <input
            className={styles.section_1__input}
            placeholder="EMAIL ADDRESS *"
            ref={emailRef}
          />
          <input
            className={styles.section_1__input}
            placeholder="WHATSAPP NUMBER"
            ref={numberRef}
          />
          <button className={styles.section_1__button}>SEND</button>
        </form>
        <div className={styles.section_2}>
          <div className={styles.section_2__img_container}>
            <img
              style={{ width: 500, alignSelf: "center", marginBottom: 10 }}
              className={styles.section_2__img_container__process_img}
              src="/apply/process.png"
            />
            <img
              className={styles.section_2__img_container__ad_img}
              src="/apply/ad.webp"
            />
          </div>
        </div>
      </div>
    </>
  );
}
