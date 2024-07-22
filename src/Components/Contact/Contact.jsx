import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
        <a href="mailto:khuaga2003@gmail.com"></a>
          <img src={getImageUrl("contact/message.png")} alt="Email icon" />
        </li>
        <li className={styles.link}>
        <a href="https://www.linkedin.com/in/khushiaga15/"></a>
          <img  src={getImageUrl("contact/linkedin.png")} alt="Linkedin icon" />
        </li>
        <li className={styles.link}>
        <a href="https://github.com/KhushiAgarwal15"></a>
          <img src={getImageUrl("contact/github.png")} alt="Github icon" />
        </li>
      </ul>
    </footer>
  );
};
