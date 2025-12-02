import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Plus, Edit, Trash2, LogOut } from 'lucide-react';
import { signOut } from 'firebase/auth';
import { deleteDoc, doc } from 'firebase/firestore';
import { auth, db } from '../../lib/firebase';
import { useProjects } from '../../hooks/useProjects';
import Button from '../../components/ui/Button';

const Dashboard: React.FC = () => {
  const { projects, loading } = useProjects();
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth);
    navigate('/admin');
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this project? This action cannot be undone.')) {
      await deleteDoc(doc(db, 'projects', id));
      // Hook will auto-update
    }
  };

  return (
    <div className="min-h-screen w-full bg-cosmic-950 pt-32 px-6 pb-20">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex justify-between items-center mb-12 border-b border-zinc-800 pb-6">
          <h1 className="text-4xl font-display font-bold text-white">Mission Control</h1>
          <div className="flex gap-4">
             <Link to="/admin/project/new">
               <Button variant="neon" size="sm">
                 <Plus className="w-4 h-4 mr-2" /> New Project
               </Button>
             </Link>
             <button onClick={handleLogout} className="text-zinc-500 hover:text-white transition-colors">
               <LogOut className="w-6 h-6" />
             </button>
          </div>
        </div>

        {loading ? (
          <div className="text-neon font-mono">Loading telemetry...</div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="bg-zinc-900/30 border border-zinc-800 p-6 flex items-center justify-between group hover:border-neon/50 transition-colors">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-zinc-800 overflow-hidden rounded-md">
                    <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <p className="text-zinc-500 text-sm">{project.category}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Link to={`/admin/project/edit/${project.id}`}>
                    <button className="p-2 text-zinc-400 hover:text-neon transition-colors">
                      <Edit className="w-5 h-5" />
                    </button>
                  </Link>
                  <button onClick={() => handleDelete(project.id)} className="p-2 text-zinc-400 hover:text-red-500 transition-colors">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default Dashboard;