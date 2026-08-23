import { useEffect, useState } from 'react';
import { NEWS, NOTICES, ONGOING_PROJECTS, NewsItem, Notice, Project } from '../lib/data';
import AdminLayout from './AdminLayout';
import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';
import Toast from './Toast';
import ConfirmModal from './ConfirmModal';

function useLocalState<T>(key: string, initial: T) {
  const [state, setState] = useState<T>(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? (JSON.parse(raw) as T) : initial;
    } catch {
      return initial;
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch {}
  }, [key, state]);
  return [state, setState] as const;
}

export default function Admin() {
  const [authed, setAuthed] = useLocalState<boolean>('admin_authed', false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [view, setView] = useState<string>('dashboard');

  const [news, setNews] = useLocalState<NewsItem[]>('admin_news', NEWS);
  const [projects, setProjects] = useLocalState<Project[]>('admin_projects', ONGOING_PROJECTS);
  const [notices, setNotices] = useLocalState<Notice[]>('admin_notices', NOTICES);

  const [editing, setEditing] = useState<{ type: 'news' | 'project' | 'notice'; idx: number } | null>(null);
  const [toast, setToast] = useState<{ open: boolean; message: string }>({ open: false, message: '' });
  const [confirm, setConfirm] = useState<{ open: boolean; onConfirm?: () => void; message?: string }>({ open: false });

  // Simple add forms state
  const [newNews, setNewNews] = useState<Partial<NewsItem>>({ date: '', title: '', excerpt: '', tag: '', image: '' });
  const [newNotice, setNewNotice] = useState<Partial<Notice>>({ date: '', title: '', tag: '' });
  const [newProject, setNewProject] = useState<Partial<Project>>({ name: '', donor: '', duration: '', category: '', activities: '', objectives: '', budget: '', areas: '', beneficiary: '', image: '' });

  // CRUD handlers
  function addNews() {
    if (!newNews.title) return;
    setNews([ { ...({} as NewsItem), date: newNews.date || new Date().toISOString().slice(0,10), title: newNews.title, excerpt: newNews.excerpt||'', tag: newNews.tag||'', image: newNews.image||'' }, ...news]);
    setNewNews({ date: '', title: '', excerpt: '', tag: '', image: '' });
  }
  function deleteNews(i: number) { setConfirm({ open: true, message: 'Delete this news item?', onConfirm: () => { setNews(news.filter((_,idx)=>idx!==i)); setToast({ open: true, message: 'News deleted' }); setConfirm({ open: false }); } }); }
  function saveNews(i:number, updated: NewsItem) { const copy = [...news]; copy[i]=updated; setNews(copy); setEditing(null); }

  function addNotice() {
    if (!newNotice.title) return;
    setNotices([{ date: newNotice.date || new Date().toISOString().slice(0,10), title: newNotice.title || '', tag: newNotice.tag || '' }, ...notices]);
    setNewNotice({ date: '', title: '', tag: '' });
  }
  function deleteNotice(i:number){ setConfirm({ open: true, message: 'Delete this notice?', onConfirm: () => { setNotices(notices.filter((_,idx)=>idx!==i)); setToast({ open: true, message: 'Notice deleted' }); setConfirm({ open: false }); } }); }
  function saveNotice(i:number, updated:Notice){ const copy=[...notices]; copy[i]=updated; setNotices(copy); setEditing(null); }

  function addProject(){ if(!newProject.name) return; setProjects([ { name: newProject.name||'', donor: newProject.donor||'', duration: newProject.duration||'', category: newProject.category||'', activities: newProject.activities||'', objectives: newProject.objectives, budget: newProject.budget||'', areas: newProject.areas||'', beneficiary: newProject.beneficiary||'', image: newProject.image||'' }, ...projects]); setNewProject({ name: '', donor: '', duration: '', category: '', activities: '', budget: '', areas: '', beneficiary: '', image: '' }); }
  function deleteProject(i:number){ setConfirm({ open: true, message: 'Delete this project?', onConfirm: () => { setProjects(projects.filter((_,idx)=>idx!==i)); setToast({ open: true, message: 'Project deleted' }); setConfirm({ open: false }); } }); }
  function saveProject(i:number, updated:Project){ const copy=[...projects]; copy[i]=updated; setProjects(copy); setEditing(null); }

  function doLogin() {
    // simple client-side login panel — accepts any non-empty credentials
    if (!username || !password) return alert('Please enter username and password');
    setAuthed(true);
  }

  function doLogout() {
    setAuthed(false);
    setUsername('');
    setPassword('');
  }

  if (!authed) {
    return (
      <div className="container-x py-24">
        <h1 className="mb-6 text-3xl font-bold">Admin Login</h1>
        <div className="max-w-md rounded border p-6">
          <label className="mb-2 block text-sm font-medium">Username</label>
          <input value={username} onChange={(e)=>setUsername(e.target.value)} className="mb-4 w-full rounded border px-3 py-2" />
          <label className="mb-2 block text-sm font-medium">Password</label>
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="mb-4 w-full rounded border px-3 py-2" />
          <div className="flex gap-2">
            <button onClick={doLogin} className="rounded bg-ocean-500 px-4 py-2 text-white">Sign in</button>
          </div>
        </div>
        <p className="mt-4 text-sm text-ink-600">Note: This is a client-side demo login; do not use for production.</p>
      </div>
    );
  }

  return (
    <AdminLayout>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[minmax(16rem,18rem)_1fr]">
        <AdminSidebar view={view} setView={setView} onLogout={doLogout} />

        <div className="min-w-0">
          <AdminHeader title={view === 'dashboard' ? 'Dashboard' : view.charAt(0).toUpperCase() + view.slice(1)} onSearch={(q)=>{/* TODO: implement search */}} onNew={view==='projects' ? ()=>setView('projectAdd'): undefined} />

          {view === 'news' && (
            <section className="mb-10">
              <h2 className="mb-3 text-2xl font-semibold">News</h2>
              <div className="mb-4 flex gap-2">
                <input value={newNews.title} onChange={(e)=>setNewNews({...newNews,title:e.target.value})} placeholder="Title" className="flex-1 rounded border px-3 py-2" />
                <input value={newNews.tag} onChange={(e)=>setNewNews({...newNews,tag:e.target.value})} placeholder="Tag" className="w-32 rounded border px-3 py-2" />
                <input value={newNews.date} onChange={(e)=>setNewNews({...newNews,date:e.target.value})} placeholder="YYYY-MM-DD" className="w-40 rounded border px-3 py-2" />
                <button onClick={addNews} className="rounded bg-ocean-500 px-4 py-2 text-white">Add</button>
              </div>
              <div className="grid gap-3">
                {news.map((n, i) => (
                  <div key={i} className="flex items-start justify-between gap-3 rounded border p-3">
                    <div>
                      <div className="text-sm text-ink-500">{n.date} · {n.tag}</div>
                      <div className="font-medium">{n.title}</div>
                      <div className="text-sm text-ink-600">{n.excerpt}</div>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => setEditing({ type: 'news', idx: i })} className="rounded border px-3 py-1">Edit</button>
                      <button onClick={() => deleteNews(i)} className="rounded border px-3 py-1 text-red-600">Delete</button>
                    </div>
                  </div>
                ))}
              </div>

              {editing?.type === 'news' && (
                <EditNewsModal item={news[editing.idx]} onSave={(u)=>saveNews(editing.idx, u)} onCancel={()=>setEditing(null)} />
              )}
            </section>
          )}

          {view === 'notices' && (
            <section className="mb-10">
              <h2 className="mb-3 text-2xl font-semibold">Notices</h2>
              <div className="mb-4 flex gap-2">
                <input value={newNotice.title} onChange={(e)=>setNewNotice({...newNotice,title:e.target.value})} placeholder="Title" className="flex-1 rounded border px-3 py-2" />
                <input value={newNotice.tag} onChange={(e)=>setNewNotice({...newNotice,tag:e.target.value})} placeholder="Tag" className="w-32 rounded border px-3 py-2" />
                <input value={newNotice.date} onChange={(e)=>setNewNotice({...newNotice,date:e.target.value})} placeholder="YYYY-MM-DD" className="w-40 rounded border px-3 py-2" />
                <button onClick={addNotice} className="rounded bg-ocean-500 px-4 py-2 text-white">Add</button>
              </div>
              <div className="grid gap-3">
                {notices.map((m, i) => (
                  <div key={i} className="flex items-start justify-between gap-3 rounded border p-3">
                    <div>
                      <div className="text-sm text-ink-500">{m.date} · {m.tag}</div>
                      <div className="font-medium">{m.title}</div>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => setEditing({ type: 'notice', idx: i })} className="rounded border px-3 py-1">Edit</button>
                      <button onClick={() => deleteNotice(i)} className="rounded border px-3 py-1 text-red-600">Delete</button>
                    </div>
                  </div>
                ))}
              </div>

              {editing?.type === 'notice' && (
                <EditNoticeModal item={notices[editing.idx]} onSave={(u)=>saveNotice(editing.idx, u)} onCancel={()=>setEditing(null)} />
              )}
            </section>
          )}

          {view === 'projects' && (
            <section className="mb-10">
              <h2 className="mb-3 text-2xl font-semibold">Projects</h2>
              <div className="mb-4 flex items-center justify-between gap-2">
                <div className="grid flex-1 grid-cols-1 gap-2 md:grid-cols-3">
                  <input value={newProject.name} onChange={(e)=>setNewProject({...newProject,name:e.target.value})} placeholder="Project name" className="rounded border px-3 py-2" />
                  <input value={newProject.donor} onChange={(e)=>setNewProject({...newProject,donor:e.target.value})} placeholder="Donor" className="rounded border px-3 py-2" />
                  <input value={newProject.duration} onChange={(e)=>setNewProject({...newProject,duration:e.target.value})} placeholder="Duration" className="rounded border px-3 py-2" />
                </div>
                <div className="ml-4">
                  <button onClick={() => setView('projectAdd')} className="rounded bg-ocean-500 px-4 py-2 text-white">Open detailed add page</button>
                </div>
              </div>
              <div className="overflow-auto rounded border">
                <table className="w-full table-auto">
                  <thead className="bg-slate-50 text-sm text-ink-600">
                    <tr>
                      <th className="px-4 py-3 text-left">Project</th>
                      <th className="px-4 py-3 text-left">Donor</th>
                      <th className="px-4 py-3 text-left">Duration</th>
                      <th className="px-4 py-3 text-left">Areas</th>
                      <th className="px-4 py-3 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects.map((p, i) => (
                      <tr key={i} className="border-t">
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-3">
                            {p.image ? <img src={p.image} className="h-12 w-16 rounded object-cover" alt="thumb" /> : <div className="h-12 w-16 rounded bg-slate-100" />}
                            <div>
                              <div className="font-medium">{p.name}</div>
                              <div className="text-sm text-ink-500">{p.category}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3">{p.donor}</td>
                        <td className="px-4 py-3">{p.duration}</td>
                        <td className="px-4 py-3">{p.areas}</td>
                        <td className="px-4 py-3">
                          <div className="flex gap-2">
                            <button onClick={() => setEditing({ type: 'project', idx: i })} className="rounded border px-3 py-1">Edit</button>
                            <button onClick={() => deleteProject(i)} className="rounded border px-3 py-1 text-red-600">Delete</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {editing?.type === 'project' && (
                <EditProjectModal item={projects[editing.idx]} onSave={(u)=>saveProject(editing.idx, u)} onCancel={()=>setEditing(null)} />
              )}
            </section>
          )}

          {view === 'projectAdd' && (
            <section className="mb-10">
              <h2 className="mb-3 text-2xl font-semibold">Add Project — Details</h2>
              <div className="rounded border p-4">
                <div className="grid gap-3 md:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium">Project name</label>
                    <input value={newProject.name} onChange={(e)=>setNewProject({...newProject,name:e.target.value})} className="w-full rounded border px-3 py-2" />

                    <label className="mt-3 mb-1 block text-sm font-medium">Donor</label>
                    <input value={newProject.donor} onChange={(e)=>setNewProject({...newProject,donor:e.target.value})} className="w-full rounded border px-3 py-2" />

                    <label className="mt-3 mb-1 block text-sm font-medium">Duration</label>
                    <input value={newProject.duration} onChange={(e)=>setNewProject({...newProject,duration:e.target.value})} className="w-full rounded border px-3 py-2" />

                    <label className="mt-3 mb-1 block text-sm font-medium">Category</label>
                    <input value={newProject.category} onChange={(e)=>setNewProject({...newProject,category:e.target.value})} className="w-full rounded border px-3 py-2" />

                    <label className="mt-3 mb-1 block text-sm font-medium">Budget</label>
                    <input value={newProject.budget} onChange={(e)=>setNewProject({...newProject,budget:e.target.value})} className="w-full rounded border px-3 py-2" />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium">Areas</label>
                    <input value={newProject.areas} onChange={(e)=>setNewProject({...newProject,areas:e.target.value})} className="w-full rounded border px-3 py-2" />

                    <label className="mt-3 mb-1 block text-sm font-medium">Beneficiary</label>
                    <input value={newProject.beneficiary} onChange={(e)=>setNewProject({...newProject,beneficiary:e.target.value})} className="w-full rounded border px-3 py-2" />

                    <label className="mt-3 mb-1 block text-sm font-medium">Objectives</label>
                    <textarea value={newProject.objectives as string || ''} onChange={(e)=>setNewProject({...newProject,objectives:e.target.value})} className="w-full rounded border px-3 py-2" />

                    <label className="mt-3 mb-1 block text-sm font-medium">Activities</label>
                    <textarea value={newProject.activities as string || ''} onChange={(e)=>setNewProject({...newProject,activities:e.target.value})} className="w-full rounded border px-3 py-2" />

                    <label className="mt-3 mb-1 block text-sm font-medium">Image</label>
                    <input type="file" accept="image/*" onChange={(e)=>{
                      const f = e.target.files?.[0];
                      if(!f) return;
                      const reader = new FileReader();
                      reader.onload = ()=> setNewProject({...newProject, image: reader.result as string});
                      reader.readAsDataURL(f);
                    }} className="w-full" />

                    {newProject.image && (
                      <img src={newProject.image} alt="preview" className="mt-3 max-h-48 w-full object-contain" />
                    )}
                  </div>
                </div>

                <div className="mt-4 flex gap-2">
                  <button onClick={() => {
                    if(!newProject.name) return alert('Please enter project name');
                    const toAdd: Project = {
                      name: newProject.name||'', donor: newProject.donor||'', duration: newProject.duration||'', category: newProject.category||'', activities: newProject.activities||'', objectives: newProject.objectives, budget: newProject.budget||'', areas: newProject.areas||'', beneficiary: newProject.beneficiary||'', image: newProject.image||''
                    };
                    setProjects([toAdd, ...projects]);
                    setNewProject({ name: '', donor: '', duration: '', category: '', activities: '', objectives: '', budget: '', areas: '', beneficiary: '', image: '' });
                    setToast({ open: true, message: 'Project added' });
                    setView('projects');
                  }} className="rounded bg-ocean-500 px-4 py-2 text-white">Save project</button>
                  <button onClick={()=>setView('projects')} className="rounded border px-4 py-2">Cancel</button>
                </div>
              </div>
            </section>
          )}

          {view === 'dashboard' && (
            <section className="mb-10">
              <h2 className="mb-3 text-xl font-medium">Overview</h2>
              <div className="grid gap-3 md:grid-cols-3">
                <div className="rounded border p-4">News: {news.length}</div>
                <div className="rounded border p-4">Notices: {notices.length}</div>
                <div className="rounded border p-4">Projects: {projects.length}</div>
              </div>
            </section>
          )}

          {view === 'settings' && (
            <section>
              <h2 className="mb-3 text-2xl font-semibold">Settings</h2>
              <p className="text-sm text-ink-600">No settings yet.</p>
            </section>
          )}
        </div>
      </div>
      <Toast message={toast.message} open={toast.open} onClose={() => setToast({ open: false, message: '' })} />
      <ConfirmModal open={confirm.open} message={confirm.message || ''} onCancel={() => setConfirm({ open: false })} onConfirm={() => confirm.onConfirm && confirm.onConfirm()} />
    </AdminLayout>
  );
}

function EditNewsModal({ item, onSave, onCancel }: { item: NewsItem; onSave: (u: NewsItem) => void; onCancel: () => void }) {
  const [state, setState] = useState<NewsItem>(item);
  return (
    <div className="mt-4 rounded border p-4">
      <h3 className="mb-2 font-semibold">Edit News</h3>
      <div className="grid gap-2 md:grid-cols-3">
        <input value={state.title} onChange={(e)=>setState({...state,title:e.target.value})} className="col-span-3 rounded border px-3 py-2" />
        <input value={state.tag} onChange={(e)=>setState({...state,tag:e.target.value})} className="rounded border px-3 py-2" />
        <input value={state.date} onChange={(e)=>setState({...state,date:e.target.value})} className="rounded border px-3 py-2" />
        <input value={state.image} onChange={(e)=>setState({...state,image:e.target.value})} className="col-span-3 rounded border px-3 py-2" />
        <textarea value={state.excerpt} onChange={(e)=>setState({...state,excerpt:e.target.value})} className="col-span-3 rounded border px-3 py-2" />
      </div>
      <div className="mt-3 flex gap-2">
        <button onClick={()=>onSave(state)} className="rounded bg-ocean-500 px-4 py-2 text-white">Save</button>
        <button onClick={onCancel} className="rounded border px-4 py-2">Cancel</button>
      </div>
    </div>
  );
}

function EditNoticeModal({ item, onSave, onCancel }: { item: Notice; onSave: (u: Notice) => void; onCancel: () => void }) {
  const [state, setState] = useState<Notice>(item);
  return (
    <div className="mt-4 rounded border p-4">
      <h3 className="mb-2 font-semibold">Edit Notice</h3>
      <div className="grid gap-2 md:grid-cols-3">
        <input value={state.title} onChange={(e)=>setState({...state,title:e.target.value})} className="col-span-3 rounded border px-3 py-2" />
        <input value={state.tag} onChange={(e)=>setState({...state,tag:e.target.value})} className="rounded border px-3 py-2" />
        <input value={state.date} onChange={(e)=>setState({...state,date:e.target.value})} className="rounded border px-3 py-2" />
      </div>
      <div className="mt-3 flex gap-2">
        <button onClick={()=>onSave(state)} className="rounded bg-ocean-500 px-4 py-2 text-white">Save</button>
        <button onClick={onCancel} className="rounded border px-4 py-2">Cancel</button>
      </div>
    </div>
  );
}

function EditProjectModal({ item, onSave, onCancel }: { item: Project; onSave: (u: Project) => void; onCancel: () => void }) {
  const [state, setState] = useState<Project>(item);
  return (
    <div className="mt-4 rounded border p-4">
      <h3 className="mb-2 font-semibold">Edit Project</h3>
      <div className="grid gap-2 md:grid-cols-2">
        <input value={state.name} onChange={(e)=>setState({...state,name:e.target.value})} className="col-span-2 rounded border px-3 py-2" />
        <input value={state.donor} onChange={(e)=>setState({...state,donor:e.target.value})} className="rounded border px-3 py-2" />
        <input value={state.duration} onChange={(e)=>setState({...state,duration:e.target.value})} className="rounded border px-3 py-2" />
        <input value={state.category} onChange={(e)=>setState({...state,category:e.target.value})} className="rounded border px-3 py-2" />
        <input value={state.budget} onChange={(e)=>setState({...state,budget:e.target.value})} className="rounded border px-3 py-2" />
        <textarea value={state.activities} onChange={(e)=>setState({...state,activities:e.target.value})} className="col-span-2 rounded border px-3 py-2" />
      </div>
      <div className="mt-3 flex gap-2">
        <button onClick={()=>onSave(state)} className="rounded bg-ocean-500 px-4 py-2 text-white">Save</button>
        <button onClick={onCancel} className="rounded border px-4 py-2">Cancel</button>
      </div>
    </div>
  );
}
