import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Problem } from "../types/problem";
import type { Mission } from "../types/mission";

export default function Mission() {
  const { id, category } = useParams();
  const correctCategory = category?.replace(":", "");
  const correctId = id?.replace(":", "");
  const [problems, setProblems] = useState([] as Problem[]);
  const [mission, setMission] = useState<Mission | undefined>(undefined);

  useEffect(() => {
    fetch("https://htf.collide.be/quest/f7a431de-dd78-4c76-beec-c8c21c2c13e7")
      .then((response) => response.json())
      .then((data) => {
        // Filter problems based on the category (problem.name)
        const filteredProblems = data.problems.filter(
          (problem: Problem) => problem.name === correctCategory
        );

        // Find the specific mission by its id in the filtered problems
        const foundMission = filteredProblems
          .flatMap((problem: Problem) => problem.mission)
          .find((mission: Mission) => mission.id === correctId);

        // Update state
        setProblems(filteredProblems);
        setMission(foundMission);
      });
  }, [id, correctCategory]);
console.log(mission);
  if (!id) {
    return <div>Error: No mission ID provided</div>;
  }

  return (
    <div>
      <h1>Mission: {mission?.name}</h1>
      <h2>Category: {correctCategory}</h2>
    </div>
  );
}
