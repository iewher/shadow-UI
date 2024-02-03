import React from "react";
import styles from "./index.module.scss";

const Card = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className={styles.Card}>
      <h5 className={styles.CardTitle}>{title}</h5>
      <p className={styles.CardDescription}>{description}</p>
    </div>
  );
};

export default Card;
