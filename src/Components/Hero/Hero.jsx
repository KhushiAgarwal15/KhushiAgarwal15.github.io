import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css"

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Khushi</h1>
        <p className={styles.description}>
          I'm a Frontend Developer building user-friendly websites using HTML,
          CSS, Javascript and React. Reach out if you'd like to learn more
        </p>
        <a href="mailto:khuaga2003@gmail.com" className={styles.contactBtn}>Contact Me</a>
      </div>
      <img src={getImageUrl("hero/heroImage.png")} alt="Hero Image" className={styles.heroImg}/>
      <div className={styles.topBlur}/>
      <div className={styles.bottomBlur}/>
    </section>
  );
};
