import React from "react";
import styles from "./Contact.module.css";
import "bootstrap-icons/font/bootstrap-icons.css"; // Ensures Bootstrap Icons CSS is imported

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <div className={styles.links}>
        <ul>
          <li className={styles.link}>
            <i className="bi bi-envelope-at"></i>
            <a href="mailto:myemail@email.com" target="_blank">
              rekhansamudra@gmail.com
            </a>
          </li>
          <li className={styles.link}>
            <i className="bi bi-linkedin"></i>
            <a
              href="https://www.linkedin.com/in/rekhansamudra/"
              target="_blank"
            >
              linkedin.com/rekhansamudra
            </a>
          </li>
          <li className={styles.link}>
            <i className="bi bi-github"></i>
            <a href="https://github.com/RekhaNSamudra" target="_blank">
              github.com/RekhaNSamudra
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Contact;
