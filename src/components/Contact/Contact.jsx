import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <div className={styles.iconContainer}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          </div>
          <a href="mailto:paes.andre33@gmail.com">paes.andre33@gmail.com</a>
        </li>
        <li className={styles.link}>
          <div className={styles.iconContainer}>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
          </div>
          <a href="https://www.linkedin.com/in/andr%C3%A9-pinheiro-paes-a53993326/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </li>
        <li className={styles.link}>
          <div className={styles.iconContainer}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          </div>
          <a href="https://www.github.com/deerws" target="_blank" rel="noopener noreferrer">GitHub</a>
        </li>
      </ul>
    </footer>
  );
};