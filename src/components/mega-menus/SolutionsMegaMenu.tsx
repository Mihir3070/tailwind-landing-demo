import React from 'react';

export const SolutionsMegaMenu = ({ onNavigate }: { onNavigate: () => void }) => (
  <div className="space-y-4">
    <h4 className="font-semibold">Solutions</h4>
    {['Applications','Use cases','Integrations'].map(i => (
      <button key={i} onClick={onNavigate} className="block w-full text-left p-2 hover:bg-gray-50 rounded">
        {i}
      </button>
    ))}
  </div>
);