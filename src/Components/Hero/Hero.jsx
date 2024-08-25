import React from "react";
import profileImage from "../../assets/profileImg3.png";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <>
      <section className={styles.heroSection} id="about">
        <div className={styles.herocontent}>
          <span className={styles.hello}>Hello,</span>
          <p className={styles.introText}>
            I'm <span className={styles.introName}>Rekha</span>
            <br />
            Software Developer{" "}
          </p>
          <p className={styles.introPara}>
            "A passionate developer with a strong foundation in frontend
            technologies, excited to learn and grow."
          </p>
          <a
            href="/assets/Resume.pdf"
            download="Rekha_Resume.pdf"
            className={styles.btn}
          >
            <span className={styles.btnText}>Resume</span>
          </a>
        </div>
        <div>
          <img
            className={styles.heroimage}
            src={profileImage}
            alt="profile image"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
