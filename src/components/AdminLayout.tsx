import React from 'react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container-x py-16">
      <div className="rounded-lg bg-white/95 p-6 shadow-lg">
        {children}
      </div>
    </div>
  );
}
