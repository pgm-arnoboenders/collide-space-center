export type Problem = {
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
};
