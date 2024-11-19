import Quest from "../components/Quest";
import styles from "../css/missions.module.css";

export default function Missions() {
  return (
    <div className={styles.App}>
      <img src="/images/missionsbackground.jpg" alt="Space background" />
      <Quest />
    </div>
  );
}
