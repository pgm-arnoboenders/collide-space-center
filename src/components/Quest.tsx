import { useState, useEffect } from "react";

interface Problem {
  name: string;
  description: string;
  mission: {
    difficulty: number;
    effect: string;
    id: string;
    name: string;
    objective: string;
    parameters: string;
    remainingAttempts: string;
    solved: boolean;
    type: string;
  }[];
  score: number;
  solved: boolean;
}

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
  console.log(problems);

  return (
    <div className="App">
      <h1>Quest</h1>
      <h2>Problems:</h2>

      {problems.map((problem, index) => (
        <div>
          <h3 key={`problem${index}`}>{problem.name}</h3>
          <p>{problem.description}</p>
          <p>{problem.score}</p>
          <p>{problem.solved}</p>
          {problem.mission.map((mission) => (
            <li key={mission.id}>
              <a href={`missions/:${mission.id}`}>{mission.name}</a>
            </li>
          ))}
        </div>
      ))}
    </div>
  );
}
