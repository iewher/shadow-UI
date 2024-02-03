import styles from "./page.module.scss";

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

export default function Home() {
  return (
    <div className={styles.Page}>
      <div className={styles.Banner}>
        <h1>Shadow UI V0.1</h1>
        <p>
          Help designers/developers building beautiful products more flexible
          and working with happiness
        </p>
        <button>Getting started</button>
        <div className={styles.Cards}>
          <Card title={"Shadow UI prereleased"} description={"Скоро будет выпущена первая версия"} />
          <Card title={"Shadow UI prereleased"} description={"Скоро будет выпущена первая версия"} />
          <Card title={"Shadow UI prereleased"} description={"Скоро будет выпущена первая версия"} />
        </div>
      </div>
    </div>
  );
}
