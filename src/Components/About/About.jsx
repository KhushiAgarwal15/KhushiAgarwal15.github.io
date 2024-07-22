import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css"

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursor.png")} alt="Cursor Icon"/>
            <div className={styles.aboutItemText}>
                <h3>Frontend Developer</h3>
                <p>
                I have a strong background in front-end development, demonstrated by your proficiency in HTML, CSS, JavaScript, and frameworks like React.js and Tailwind CSS.
                </p>
            </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/design.png")} alt="Design Icon"/>
            <div className={styles.aboutItemText}>
                <h3>UI/UX Enthusiast</h3>
                <p>
                I have great understanding of UI/UX design principles, which I have applied in my projects to enhance user experience.
                </p>
            </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/write.png")} alt="write Icon"/>
            <div className={styles.aboutItemText}>
                <h3>Technical Writer and Educator</h3>
                <p>
                I have authored insightful technical blogs. Additionally, I have volunteered as an educator for an NGO.
                </p>
            </div>
            </li>
        </ul>
      </div>
    </section>
  );
};

