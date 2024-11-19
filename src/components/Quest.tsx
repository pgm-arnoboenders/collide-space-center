import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Problem } from "../types/problem";
import styles from "../css/quests.module.css";

export default function Quest() {
  const [problems, setProblems] = useState([] as Problem[]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch("https://htf.collide.be/quest/f7a431de-dd78-4c76-beec-c8c21c2c13e7")
      .then((response) => response.json())
      .then((data) => setProblems(data.problems))
      .catch((error) => setError(error));
  }, []);

  if (error) {
    return <div className={styles.error}>Error: {error.message}</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Quest</h1>
      <h2 className={styles.subtitle}>Problems:</h2>
      <div className={styles.problemList}>
        {problems.map((problem, index) => (
          <div key={`problem${index}`} className={styles.problemCard}>
            <h3 className={styles.problemTitle}>{problem.name}</h3>
            <p className={styles.description}>{problem.description}</p>
            <p className={styles.solved}>
              Solved: {problem.solved ? "Yes" : "No"}
            </p>
            <ul className={styles.missionList}>
              {problem.mission.map((mission) => (
                <li key={mission.id} className={styles.missionItem}>
                  <a href={`missions/:${mission.id}`} className={styles.missionLink}>
                    {mission.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
