import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>

            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                Front-end developer with experience in building responsive and
                optimized sites.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Database Analysis</h3>
              <p>
                Experience with database management and monitoring.
              </p>
            </div>
          </li>
        </ul>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="test image"
          className={styles.aboutImage}
        />
      </div>
    </section>
  );
};