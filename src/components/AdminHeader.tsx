import React from 'react';
import { Search } from 'lucide-react';

export default function AdminHeader({
  title,
  onSearch,
  onNew,
}: {
  title: string;
  onSearch?: (q: string) => void;
  onNew?: () => void;
}) {
  return (
    <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <div className="text-sm text-ink-500 mb-2">Admin / CMS</div>
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-400"><Search className="h-4 w-4" /></span>
          <input onChange={(e)=>onSearch && onSearch(e.target.value)} placeholder="Search..." className="w-64 rounded border bg-white py-2 pl-10 pr-3" />
        </div>
        {onNew && (
          <button onClick={onNew} className="rounded bg-ocean-600 px-4 py-2 text-white">New</button>
        )}
      </div>
    </div>
  );
}
