// src/types.ts
export interface ProblemSolution {
    id: number;
    name: string;
    problem_id: number;
    market_demand_id: number;
    solution_space_id: number;
    solution_maturity_id: number;
    updated_at?: string;
  }
  
  export interface Problem {
    id: number;
    description: string;
    context?: string;
    impact: string;
    root_causes?: string[];
    stakeholders?: string[];
    problem_solution_ids?: number[];
    updated_at?: string;
    problem_solutions?: ProblemSolution[];
  }