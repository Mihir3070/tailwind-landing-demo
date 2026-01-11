import React from 'react';

export const ResourcesMegaMenu = ({ onNavigate }: { onNavigate: () => void }) => (
  <div className="space-y-4">
    <h4 className="font-semibold">Resources</h4>
    {['Blog','Webinars','eBooks','Customer Stories'].map(i => (
      <button key={i} onClick={onNavigate} className="block w-full text-left p-2 hover:bg-gray-50 rounded">
        {i}
      </button>
    ))}
  </div>
);