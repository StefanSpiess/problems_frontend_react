import { useState } from 'react';
import SolutionCard from './SolutionCard';
import { Problem } from '@/types';

interface ProblemCardProps {
  problem: Problem;
}

export default function ProblemCard({ problem }: ProblemCardProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border rounded-lg shadow-md mb-4 overflow-hidden border-[#465E12]">
      <div
        onClick={() => setOpen(!open)}
        style={{ backgroundColor: '#698D1A' }}
        className="text-white p-4 cursor-pointer flex justify-between items-center"
      >
        <h2 className="font-semibold text-xl">{problem.id}: {problem.description}</h2>
        <span className="text-xl">{open ? '🔽' : '▶️'}</span>
      </div>

      {open && (
        <div className="px-5 py-4 bg-white">
          <p className="text-base" style={{ color: '#1E1E1E' }}>
            <strong style={{ color: '#328E57' }}>Kontext:</strong> {problem.context || "—"}
          </p>
          <p className="text-base mt-2" style={{ color: '#1E1E1E' }}>
            <strong style={{ color: '#328E57' }}>Auswirkung:</strong> {problem.impact}
          </p>

          {problem.root_causes?.length && (
            <div className="mt-3">
              <strong style={{ color: '#328E57' }}>Ursachen:</strong>
              <ul className="list-disc list-inside ml-2" style={{ color: '#1E1E1E' }}>
                {problem.root_causes.map((cause, idx) => <li key={idx}>{cause}</li>)}
              </ul>
            </div>
          )}

          {problem.stakeholders?.length && (
            <div className="mt-3">
              <strong style={{ color: '#328E57' }}>Stakeholder:</strong>
              <ul className="list-disc list-inside ml-2" style={{ color: '#1E1E1E' }}>
                {problem.stakeholders.map((stakeholder, idx) => <li key={idx}>{stakeholder}</li>)}
              </ul>
            </div>
          )}

          {problem.problem_solutions && problem.problem_solutions.length > 0 ? (
            <div className="mt-4 pt-3 border-t border-[#D7D7D7]">
              <strong className="mb-2 block" style={{ color: '#328E57' }}>Lösungsansätze:</strong>
              {problem.problem_solutions.map((solution) => (
                <SolutionCard key={solution.id} solution={solution} />
              ))}
            </div>
          ) : (
            <div className="mt-4 pt-3 border-t border-[#D7D7D7]">
              <strong className="mb-2 block" style={{ color: '#328E57' }}>Lösungsansätze:</strong>
              <p className="text-sm italic" style={{ color: '#747474' }}>
                Noch keine Lösungen vorhanden.
              </p>
            </div>
          )}
          
          {problem.updated_at && (
            <p className="text-xs italic mt-4" style={{ color: '#747474' }}>
              Aktualisiert am {new Date(problem.updated_at).toLocaleString()}
            </p>
          )}
        </div>
      )}
    </div>
  );
}