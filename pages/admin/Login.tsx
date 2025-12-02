import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../lib/firebase';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';
import Logo from '../../components/Logo';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/admin/dashboard');
    } catch (err: any) {
      setError('Access Denied: Invalid Credentials');
    }
  };

  return (
    <div className="min-h-screen w-full bg-cosmic-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md p-8 border border-zinc-800 bg-zinc-900/50 backdrop-blur-xl rounded-lg">
        <div className="flex justify-center mb-8">
          <Logo className="h-8" />
        </div>
        <h2 className="text-2xl font-display font-bold text-white text-center mb-8">Mission Control Login</h2>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-xs font-mono text-neon mb-2 uppercase">Identifier</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-black/50 border border-zinc-700 p-3 text-white focus:border-neon focus:outline-none transition-colors"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-mono text-neon mb-2 uppercase">Passcode</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-black/50 border border-zinc-700 p-3 text-white focus:border-neon focus:outline-none transition-colors"
              required
            />
          </div>
          
          {error && <p className="text-red-500 text-sm font-mono text-center">{error}</p>}

          <Button variant="neon" className="w-full">Initialize Session</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;