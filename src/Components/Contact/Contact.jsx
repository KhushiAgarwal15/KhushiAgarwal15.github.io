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
        <a href="mailto:khuaga2003@gmail.com">
          <img src={getImageUrl("contact/message.png")} alt="Email icon" />
          </a>
        </li>
        <li className={styles.link}>
        <a href="https://www.linkedin.com/in/khushiaga15/">
          <img  src={getImageUrl("contact/linkedin.png")} alt="Linkedin icon" />
          </a>
        </li>
        <li className={styles.link}>
        <a href="https://github.com/KhushiAgarwal15">
          <img src={getImageUrl("contact/github.png")} alt="Github icon" />
          </a>
        </li>
      </ul>
    </footer>
  );
};
