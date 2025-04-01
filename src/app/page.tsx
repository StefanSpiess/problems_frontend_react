'use client';
import { useEffect, useState } from 'react';
import { Problem } from '@/types';
import ProblemCard from '@/components/ProblemCard';

export default function Home() {
  const [problems, setProblems] = useState<Problem[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/problems_with_solutions`)
      .then((res) => res.json())
      .then((data: Problem[]) => setProblems(data))
      .catch(console.error);
  }, []);

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Probleme & Lösungen</h1>
      {problems.length ? problems.map(problem => (
        <ProblemCard key={problem.id} problem={problem} />
      )) : (
        <p className="text-gray-500 text-center mt-10">Keine Probleme gefunden.</p>
      )}
    </div>
  );
}