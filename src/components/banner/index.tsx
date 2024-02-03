import React from "react";
import Card from "../card";
import styles from "./index.module.scss";

const Banner = () => {
  return (
    <div className={styles.Banner}>
      <h1>Shadow UI V0.1</h1>
      <p>
        Help designers/developers building beautiful products more flexible and
        working with happiness
      </p>
      <button>Getting started</button>
      <div className={styles.Cards}>
        <Card
          title={"Shadow UI prereleased"}
          description={"Скоро будет выпущена первая версия"}
        />
        <Card
          title={"Shadow UI prereleased"}
          description={"Скоро будет выпущена первая версия"}
        />
        <Card
          title={"Shadow UI prereleased"}
          description={"Скоро будет выпущена первая версия"}
        />
      </div>
    </div>
  );
};

export default Banner;
