import React, { useState } from 'react';
import { Grid, FileText, Bell, Layers, Settings, LogOut, Menu } from 'lucide-react';

export default function AdminSidebar({ view, setView, onLogout }: { view: string; setView: (v: string) => void; onLogout: () => void; }) {
  const [collapsed, setCollapsed] = useState(false);
  const items = [
    { key: 'dashboard', label: 'Dashboard', icon: <Grid className="h-4 w-4" /> },
    { key: 'news', label: 'News', icon: <FileText className="h-4 w-4" /> },
    { key: 'notices', label: 'Notices', icon: <Bell className="h-4 w-4" /> },
    { key: 'projects', label: 'Projects', icon: <Layers className="h-4 w-4" /> },
    { key: 'settings', label: 'Settings', icon: <Settings className="h-4 w-4" /> },
  ];

  return (
    <aside className={`flex flex-col gap-4 ${collapsed ? 'w-16' : 'w-64'} flex-none rounded bg-white p-3 transition-all`}>
      <div className="flex items-center justify-between gap-3">
        {!collapsed && (
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded bg-ocean-100" />
            <div>
              <div className="font-semibold">Admin</div>
              <div className="text-xs text-ink-500">Control panel</div>
            </div>
          </div>
        )}
        <button onClick={() => setCollapsed((s) => !s)} className="rounded p-1 hover:bg-slate-50">
          <Menu className="h-4 w-4" />
        </button>
      </div>

      <nav className="flex flex-1 flex-col gap-1">
        {items.map((it) => (
          <button key={it.key} onClick={() => setView(it.key)} className={`flex items-center gap-3 rounded px-3 py-2 transition hover:bg-ocean-50 ${view === it.key ? 'bg-ocean-100 font-semibold' : 'text-ink-700'}`}>
            <span className="opacity-80">{it.icon}</span>
            {!collapsed && <span>{it.label}</span>}
          </button>
        ))}
      </nav>

      <div>
        <button onClick={onLogout} className="flex w-full items-center gap-3 rounded border px-3 py-2 text-left text-red-600">
          <LogOut className="h-4 w-4" />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
}
