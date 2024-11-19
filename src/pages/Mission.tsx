import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Problem } from "../types/problem";
import type { Mission } from "../types/mission";

export default function Mission() {
  const params = useParams();
  console.log(params);
  // const [problems, setProblems] = useState([] as Problem[]);
  // const [mission, setMission] = useState<Mission | undefined>(undefined);
  // useEffect(() => {
  //   fetch("https://htf.collide.be/quest/f7a431de-dd78-4c76-beec-c8c21c2c13e7")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setProblems(data.problems);
  //     });

  //   problems.forEach((problem) => {
  //     for (let i = 0; i < problem.mission.length; i++) {
  //       if (problem.mission[i].id === id) {
  //         setMission(problem.mission[i]);
  //       }
  //     }
  //   });
  // }, [id]);
  // console.log(problems);
  // console.log(mission);
  // if (!id) {
  //   return <div>Error: No mission ID provided</div>;
  // }

  return (
    <div className="App">
      <h1>Mission</h1>
      {/* <p>Mission ID: {id}</p> */}
    </div>
  );
}
