import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { doc, getDoc, setDoc, addDoc, collection } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../lib/firebase';
import { Project } from '../../types';
import Button from '../../components/ui/Button';
import { ArrowLeft, Plus, X, Upload } from 'lucide-react';

const ProjectEditor: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = !!id;
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);

  // Initial State
  const [formData, setFormData] = useState<Project>({
    id: '',
    title: '',
    category: '',
    imageUrl: '',
    description: '',
    details: {
      client: '',
      year: new Date().getFullYear().toString(),
      role: '',
      challenge: '',
      solution: '',
      results: [''],
      gallery: []
    }
  });

  useEffect(() => {
    if (isEditing && id) {
      const fetchProject = async () => {
        const docRef = doc(db, 'projects', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setFormData({ id: docSnap.id, ...docSnap.data() } as Project);
        }
      };
      fetchProject();
    }
  }, [id, isEditing]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...(prev as any)[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  // Image Upload Handler
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, targetField: 'imageUrl' | 'gallery') => {
    if (!e.target.files || e.target.files.length === 0) return;
    
    setUploading(true);
    const file = e.target.files[0];
    const storageRef = ref(storage, `projects/${Date.now()}_${file.name}`);
    
    try {
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      
      if (targetField === 'imageUrl') {
        setFormData(prev => ({ ...prev, imageUrl: url }));
      } else {
        setFormData(prev => ({
          ...prev,
          details: {
            ...prev.details,
            gallery: [...prev.details.gallery, url]
          }
        }));
      }
    } catch (err) {
      console.error("Upload failed", err);
      alert("Image upload failed");
    } finally {
      setUploading(false);
    }
  };

  // Array Handlers
  const handleArrayChange = (index: number, value: string, field: 'results') => {
    const newArray = [...formData.details[field]];
    newArray[index] = value;
    setFormData(prev => ({
      ...prev,
      details: { ...prev.details, [field]: newArray }
    }));
  };

  const addArrayItem = (field: 'results') => {
    setFormData(prev => ({
      ...prev,
      details: { ...prev.details, [field]: [...prev.details[field], ''] }
    }));
  };

  const removeArrayItem = (index: number, field: 'results' | 'gallery') => {
    const newArray = [...formData.details[field]];
    newArray.splice(index, 1);
    setFormData(prev => ({
      ...prev,
      details: { ...prev.details, [field]: newArray }
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Create a slug ID if new
      const projectId = isEditing ? id! : formData.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
      
      const projectData = { ...formData, id: projectId };
      
      await setDoc(doc(db, 'projects', projectId), projectData);
      
      navigate('/admin/dashboard');
    } catch (error) {
      console.error("Error saving project:", error);
      alert("Failed to save project");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-cosmic-950 pt-32 px-6 pb-20">
      <div className="max-w-4xl mx-auto">
        <button onClick={() => navigate('/admin/dashboard')} className="flex items-center text-zinc-500 hover:text-white mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Dashboard
        </button>

        <h1 className="text-3xl font-display font-bold text-white mb-8">
          {isEditing ? 'Edit Project' : 'New Mission Protocol'}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-12">
          
          {/* Main Info */}
          <div className="bg-zinc-900/30 p-8 border border-zinc-800 rounded-lg space-y-6">
            <h3 className="text-neon font-mono text-xs uppercase tracking-widest mb-4">Core Data</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-zinc-400 text-sm mb-2">Project Title</label>
                <input required name="title" value={formData.title} onChange={handleInputChange} className="w-full bg-black border border-zinc-700 p-3 text-white rounded focus:border-neon outline-none" />
              </div>
              <div>
                <label className="block text-zinc-400 text-sm mb-2">Category</label>
                <input required name="category" value={formData.category} onChange={handleInputChange} className="w-full bg-black border border-zinc-700 p-3 text-white rounded focus:border-neon outline-none" />
              </div>
            </div>

            <div>
              <label className="block text-zinc-400 text-sm mb-2">Short Description</label>
              <textarea required name="description" value={formData.description} onChange={handleInputChange} rows={3} className="w-full bg-black border border-zinc-700 p-3 text-white rounded focus:border-neon outline-none" />
            </div>

            <div>
              <label className="block text-zinc-400 text-sm mb-2">Main Hero Image</label>
              <div className="flex items-center gap-4">
                {formData.imageUrl && <img src={formData.imageUrl} className="h-20 w-32 object-cover rounded border border-zinc-700" />}
                <label className="cursor-pointer bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded flex items-center">
                  <Upload className="w-4 h-4 mr-2" /> {uploading ? 'Uploading...' : 'Upload Image'}
                  <input type="file" className="hidden" onChange={(e) => handleImageUpload(e, 'imageUrl')} accept="image/*" />
                </label>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="bg-zinc-900/30 p-8 border border-zinc-800 rounded-lg space-y-6">
            <h3 className="text-neon font-mono text-xs uppercase tracking-widest mb-4">Mission Details</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-zinc-400 text-sm mb-2">Client</label>
                <input required name="details.client" value={formData.details.client} onChange={handleInputChange} className="w-full bg-black border border-zinc-700 p-3 text-white rounded focus:border-neon outline-none" />
              </div>
              <div>
                <label className="block text-zinc-400 text-sm mb-2">Year</label>
                <input required name="details.year" value={formData.details.year} onChange={handleInputChange} className="w-full bg-black border border-zinc-700 p-3 text-white rounded focus:border-neon outline-none" />
              </div>
              <div>
                <label className="block text-zinc-400 text-sm mb-2">Role</label>
                <input required name="details.role" value={formData.details.role} onChange={handleInputChange} className="w-full bg-black border border-zinc-700 p-3 text-white rounded focus:border-neon outline-none" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-zinc-400 text-sm mb-2">The Challenge</label>
                <textarea required name="details.challenge" value={formData.details.challenge} onChange={handleInputChange} rows={6} className="w-full bg-black border border-zinc-700 p-3 text-white rounded focus:border-neon outline-none" />
              </div>
              <div>
                <label className="block text-zinc-400 text-sm mb-2">The Solution</label>
                <textarea required name="details.solution" value={formData.details.solution} onChange={handleInputChange} rows={6} className="w-full bg-black border border-zinc-700 p-3 text-white rounded focus:border-neon outline-none" />
              </div>
            </div>

            {/* Results Array */}
            <div>
              <label className="block text-zinc-400 text-sm mb-2">Results (Bullet Points)</label>
              <div className="space-y-3">
                {formData.details.results.map((result, idx) => (
                  <div key={idx} className="flex gap-2">
                    <input 
                      value={result} 
                      onChange={(e) => handleArrayChange(idx, e.target.value, 'results')}
                      className="flex-1 bg-black border border-zinc-700 p-2 text-white rounded focus:border-neon outline-none"
                    />
                    <button type="button" onClick={() => removeArrayItem(idx, 'results')} className="text-zinc-500 hover:text-red-500"><X /></button>
                  </div>
                ))}
                <button type="button" onClick={() => addArrayItem('results')} className="text-xs text-neon hover:text-white flex items-center">
                  <Plus className="w-3 h-3 mr-1" /> Add Result
                </button>
              </div>
            </div>

            {/* Gallery Upload */}
            <div>
              <label className="block text-zinc-400 text-sm mb-2">Gallery Images</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                {formData.details.gallery.map((img, idx) => (
                  <div key={idx} className="relative group">
                    <img src={img} className="w-full h-24 object-cover rounded border border-zinc-700" />
                    <button type="button" onClick={() => removeArrayItem(idx, 'gallery')} className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
                
                <label className="cursor-pointer bg-black border border-dashed border-zinc-700 hover:border-neon text-zinc-500 hover:text-white h-24 rounded flex flex-col items-center justify-center transition-colors">
                  <Upload className="w-6 h-6 mb-1" />
                  <span className="text-xs">{uploading ? '...' : 'Add Image'}</span>
                  <input type="file" className="hidden" onChange={(e) => handleImageUpload(e, 'gallery')} accept="image/*" />
                </label>
              </div>
            </div>
          </div>

          <Button variant="neon" size="lg" className="w-full" disabled={loading || uploading}>
            {loading ? 'Saving...' : 'Save Mission Data'}
          </Button>

        </form>
      </div>
    </div>
  );
};

export default ProjectEditor;