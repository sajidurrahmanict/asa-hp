import React from 'react';

export default function ConfirmModal({ open, message, onConfirm, onCancel }: { open: boolean; message: string; onConfirm: () => void; onCancel: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-md rounded bg-white p-6">
        <div className="mb-4 text-lg font-semibold">Confirm</div>
        <div className="mb-6 text-sm text-ink-600">{message}</div>
        <div className="flex justify-end gap-2">
          <button onClick={onCancel} className="rounded border px-4 py-2">Cancel</button>
          <button onClick={onConfirm} className="rounded bg-red-600 px-4 py-2 text-white">Delete</button>
        </div>
      </div>
    </div>
  );
}
