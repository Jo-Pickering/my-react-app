import styles from "./Home.module.css";
import LOTR from "../Props/content.json";
import Fellowship from "./fellowship";

function Home() {
  return (
    <div className={styles.wrapper}>
      <p>Home</p>
      <div>
        <Fellowship lotr={LOTR}/>
      </div>
    </div>
  );
}

export default Home;
