import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.content}>
        <h1 className={styles.title}>André Pinheiro</h1>
        <p className={styles.description}>
          Dedicated Computer Science student with a focus on web development and data analysis.
        </p>
        <a
          href="/Andre_Pinheiro_CV.pdf"
          download="Andre_Pinheiro_CV.pdf" 
          className={styles.contactBtn}
        >
          Download CV
        </a>
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};