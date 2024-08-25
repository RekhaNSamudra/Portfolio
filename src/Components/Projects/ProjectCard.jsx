import React from "react";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <>
      <div className={styles.container}>
        <img src={imageSrc} alt={title} className={styles.img} />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.links}>
          <a href={demo} className={styles.link} target="_blank">
            Demo
          </a>
          <a href={source} className={styles.link} target="_blank">
            Source
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
