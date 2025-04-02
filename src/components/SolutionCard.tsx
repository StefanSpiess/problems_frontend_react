import { ProblemSolution } from '@/types';

interface SolutionCardProps {
  solution: ProblemSolution;
}

export default function SolutionCard({ solution }: SolutionCardProps) {
  return (
    <div className="rounded-lg shadow-sm my-3 border-l-4 py-3 px-4" style={{ borderColor: '#3CC19F', backgroundColor: '#E8E8E8' }}>
      <h4 className="font-semibold text-lg" style={{ color: '#1E1E1E' }}>{solution.id}: {solution.name}</h4>
      <ul className="text-sm mt-1" style={{ color: '#1E1E1E' }}>
        <li><strong style={{ color: '#328E57' }}>Marktnachfrage ID:</strong> {solution.market_demand_id}</li>
        <li><strong style={{ color: '#328E57' }}>Lösungsraum ID:</strong> {solution.solution_space_id}</li>
        <li><strong style={{ color: '#328E57' }}>Lösungsreife ID:</strong> {solution.solution_maturity_id}</li>
      </ul>
      {solution.updated_at && (
        <p className="text-xs italic mt-2" style={{ color: '#747474' }}>
          Aktualisiert am {new Date(solution.updated_at).toLocaleString()}
        </p>
      )}
    </div>
  );
}