'use client';
import { useEffect, useState } from 'react';
import { ProblemSolution } from '@/types';
import SolutionCard from '@/components/SolutionCard';

export default function SolutionsPage() {
  const [solutions, setSolutions] = useState<ProblemSolution[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/problemsolutions`)
      .then((res) => res.json())
      .then((data: ProblemSolution[]) => setSolutions(data))
      .catch((err) => {
        console.error("Fehler beim Laden der Solutions:", err);
      });
  }, []);

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8" style={{ color: '#698C23' }}>
        🚀 Problemsolutions
      </h1>

      {solutions.length ? (
        solutions.map((solution) => (
          <SolutionCard key={solution.id} solution={solution} />
        ))
      ) : (
        <p className="text-gray-500 text-center mt-10">Keine Lösungen gefunden.</p>
      )}
    </div>
  );
}