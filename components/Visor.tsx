import React, { useEffect, useState, useRef } from 'react';

const MESSAGES = [
  "UPLINK_ESTABLISHED",
  "PACKET_LOSS: 0.001%",
  "TELEMETRY_NOMINAL",
  "ATMOSPHERE: STABLE",
  "SCANNING_SECTOR...",
  "ENCRYPTION_KEY_ROTATED",
  "INCOMING_TRANSMISSION",
  "RENDERING_VIEWPORT",
  "CONNECTION_SECURE",
  "DATA_STREAM_ACTIVE",
  "PING: 12ms",
  "BUFFER_CLEARED",
  "SYSTEM_OPTIMAL"
];

interface Log {
  id: number;
  text: string;
}

const Visor: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [logs, setLogs] = useState<Log[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Random Log Generator
  useEffect(() => {
    const addLog = () => {
      const randomMsg = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];
      const newLog = { id: Date.now(), text: randomMsg };
      
      setLogs(prev => [...prev.slice(-3), newLog]); // Keep max 4 visible

      // Schedule next log
      const nextInterval = Math.random() * 4000 + 2000; // Random between 2s and 6s
      timeoutRef.current = setTimeout(addLog, nextInterval);
    };

    // Initial start
    let timeoutRef = { current: setTimeout(addLog, 2000) };

    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden h-screen w-screen">
      
      {/* 1. Curved Glass Reflection (Glare) - Moves opposite to mouse to simulate depth */}
      <div 
        className="absolute -inset-[50px] opacity-20 mix-blend-screen transition-transform duration-75 ease-out"
        style={{
          transform: `translate(${(0.5 - mousePos.x) * 30}px, ${(0.5 - mousePos.y) * 30}px)`,
          background: 'radial-gradient(circle at 50% -20%, rgba(255,255,255,0.15) 0%, transparent 50%)'
        }}
      ></div>

      {/* 2. Helmet Vignette (The Frame) - Kept to very edges to avoid obstruction */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, transparent 70%, rgba(10,10,10,0.5) 90%, #000 100%)',
        }}
      ></div>

      {/* 3. Subtle Scratches/Dust Texture */}
      <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      ></div>

      {/* 4. Breath Fog (Bottom Center) - Rhythmic pulsing */}
      <div 
        className="absolute bottom-[-15%] left-1/2 -translate-x-1/2 w-[60%] h-[40%] bg-white/10 blur-[100px] rounded-full animate-pulse-slow pointer-events-none opacity-20"
      ></div>

      {/* 5. HUD Elements - Minimal & Non-intrusive (Hidden on mobile) */}
      <div className="absolute inset-0 p-8 hidden md:flex flex-col justify-between pointer-events-none">
        {/* Top Left - Added margin-top to clear navbar logo */}
        <div className="flex flex-col items-start opacity-40 mt-24">
           <div className="flex gap-1 mb-1">
             <div className="w-1 h-1 bg-neon rounded-full"></div>
             <div className="w-1 h-1 bg-neon rounded-full opacity-50"></div>
           </div>
           <span className="font-mono text-[9px] text-neon tracking-widest">ENV_STABLE</span>
        </div>

        {/* Top Right */}
        <div className="flex flex-col items-end opacity-40">
           <span className="font-mono text-[9px] text-neon tracking-widest">REC ●</span>
        </div>

        {/* Bottom Left Container */}
        <div className="flex flex-col justify-end items-start">
           {/* Rolling Log Feed */}
           <div className="mb-6 flex flex-col gap-1 w-64 h-20 justify-end overflow-hidden mask-linear-fade">
             {logs.map((log) => (
               <div key={log.id} className="text-[10px] font-mono text-neon/80 animate-log-scroll whitespace-nowrap">
                 {`> ${log.text}`}
               </div>
             ))}
           </div>

           {/* O2 Meter */}
           <div className="flex flex-col items-start opacity-40">
              <span className="font-mono text-[9px] text-neon tracking-widest">O2_LEVELS</span>
              <div className="w-16 h-0.5 bg-zinc-800 mt-1 relative overflow-hidden">
                 <div className="absolute inset-0 bg-neon w-[90%]"></div>
              </div>
           </div>
        </div>

        {/* Bottom Right */}
        <div className="flex flex-col items-end opacity-40">
           <span className="font-mono text-[9px] text-neon tracking-widest">v.4.2.0</span>
        </div>
      </div>

      {/* 6. Scanlines (Very subtle) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] z-[91] bg-[length:100%_3px,3px_100%] pointer-events-none opacity-10"></div>
    </div>
  );
};

export default Visor;