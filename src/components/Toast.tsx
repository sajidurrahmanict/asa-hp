import React, { useEffect } from 'react';

export default function Toast({ message, open, onClose }: { message: string; open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(onClose, 3000);
    return () => clearTimeout(t);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="fixed right-6 top-6 z-50 rounded bg-emerald-600 px-4 py-2 text-white shadow">{message}</div>
  );
}
