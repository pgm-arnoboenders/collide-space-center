import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Problem } from "../types/problem";

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
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="App">
      <h1>Quest</h1>
      <h2>Problems:</h2>

      {problems.map((problem, index) => (
        <div key={`problem${index}`}>
          <h3>{problem.name}</h3>
          <p>{problem.description}</p>
          <p>{problem.score}</p>
          <p>{problem.solved ? "Solved" : "Not Solved"}</p>
          {problem.mission.map((mission: { id: string; name: string }) => (
            <li key={mission.id}>
              <Link to={`/missions/${mission.id}`}>{mission.name}</Link>
            </li>
          ))}
        </div>
      ))}
    </div>
  );
}
