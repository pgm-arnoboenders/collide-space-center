// For navigation
import styles from '../css/home.module.css';

export default function Home() {
  const handleNavigation = () => {
    window.location.href = '/missions';
  };

  return (
    <div>
      <video 
        className={styles.video} 
        src="/video/homebackground.mp4" 
        autoPlay 
        loop 
        muted
      ></video>
      <button className={styles.button} onClick={handleNavigation}>
        Explore Missions
      </button>
    </div>
  );
}
