import Banner from "@/components/banner";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.Page}>
      <Banner />
    </div>
  );
}
