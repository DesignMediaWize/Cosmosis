import { NavItem, Service, TeamMember, Project } from './types';
import { Palette, Globe, Zap, Cpu, Search, Video } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'branding',
    title: 'Cosmic Branding',
    description: 'Identity systems that transcend the ordinary. We forge brands that leave a lasting crater in the market.',
    icon: Palette,
    features: ['Logo Design', 'Visual Identity', 'Brand Strategy', 'Style Guides'],
    details: {
      heroImage: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=2808&auto=format&fit=crop',
      fullDescription: 'Your brand is not just a logo; it is the gravitational force that pulls your audience in. We strip away the noise to find the core signal of your business, then amplify it across all frequencies. Our approach to branding is architectural—we build systems that can scale from a mobile screen to a monolithic billboard without losing fidelity.',
      benefits: [
        'Distinct market positioning that cuts through static.',
        'Scalable visual systems for future expansion.',
        'Psychologically tuned color and typography hierarchies.',
        'Comprehensive guidebooks for brand consistency.'
      ],
      process: [
        { step: '01', title: 'Discovery', description: 'We map the current landscape and identify the black holes in your market sector.' },
        { step: '02', title: 'Synthesis', description: 'We compress your core values into a dense, high-impact visual direction.' },
        { step: '03', title: 'Construction', description: 'We build the assets: logos, type systems, and visual languages.' },
        { step: '04', title: 'Launch', description: 'We deploy the new identity system with guidelines for universal application.' }
      ]
    }
  },
  {
    id: 'web',
    title: 'Web Universes',
    description: 'Immersive digital experiences. We build websites that feel like a journey through space-time.',
    icon: Globe,
    features: ['UI/UX Design', 'Full-Stack Development', '3D WebGL', 'Responsive Layouts'],
    details: {
      heroImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop',
      fullDescription: 'The web is no longer about static pages; it is about living environments. We engineer digital spaces that react, breathe, and evolve with user interaction. Using cutting-edge frameworks and brutalist design principles, we create websites that are not just visited, but experienced. Performance, accessibility, and aesthetics converge to form a perfect digital singularity.',
      benefits: [
        'Blazing fast load times using modern frameworks.',
        'Immersive interactions that increase dwell time.',
        'Fully responsive architectures for all devices.',
        'SEO-optimized foundations for maximum visibility.'
      ],
      process: [
        { step: '01', title: 'Blueprint', description: 'Wireframing the user journey and defining the information architecture.' },
        { step: '02', title: 'Interface', description: 'High-fidelity UI design with motion prototypes and interaction models.' },
        { step: '03', title: 'Code', description: 'Full-stack development using React, Node, and WebGL technologies.' },
        { step: '04', title: 'Deploy', description: 'Rigorous testing and global content delivery network integration.' }
      ]
    }
  },
  {
    id: 'media',
    title: 'Media Production',
    description: 'Visual storytelling at light speed. High-fidelity motion graphics and video editing.',
    icon: Video,
    features: ['Motion Graphics', 'Video Editing', 'Post-Production', 'Commercials'],
    details: {
      heroImage: 'https://images.unsplash.com/photo-1535016120720-40c6874c3b13?q=80&w=2664&auto=format&fit=crop',
      fullDescription: 'Static images are silent; motion speaks. We produce high-octane visual content that demands attention. From 3D motion graphics to cinematic video editing, our media production team manipulates time and light to tell your story. We treat every frame as a canvas and every second as an opportunity to convert viewers into believers.',
      benefits: [
        'High-retention video content for social platforms.',
        'Cinema-quality color grading and sound design.',
        'Complex 3D animations and visual effects.',
        'Narrative-driven editing that evokes emotion.'
      ],
      process: [
        { step: '01', title: 'Script', description: 'Developing the narrative arc and visual storyboard.' },
        { step: '02', title: 'Capture', description: 'Filming or asset generation using high-end equipment/software.' },
        { step: '03', title: 'Edit', description: 'Post-production magic: cutting, grading, and sound mixing.' },
        { step: '04', title: 'Render', description: 'Final output generation in multi-format deliverables.' }
      ]
    }
  },
  {
    id: 'strategy',
    title: 'Digital Strategy',
    description: 'Navigational charts for the digital age. We plot the course for your growth.',
    icon: Search,
    features: ['SEO', 'Content Strategy', 'Market Analysis', 'Growth Hacking'],
    details: {
      heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop',
      fullDescription: 'A beautiful ship is useless without a star chart. Our strategy division analyzes data streams to find the most efficient path to your goals. We combine creativity with analytics, ensuring that every creative decision is backed by hard logic. We do not guess; we calculate, execute, and iterate based on real-world feedback loops.',
      benefits: [
        'Data-driven insights into customer behavior.',
        'Content roadmaps that align with business KPIs.',
        'Technical SEO audits to dominate search rankings.',
        'Conversion rate optimization for better ROI.'
      ],
      process: [
        { step: '01', title: 'Analyze', description: 'Deep dive into current metrics, competitors, and market trends.' },
        { step: '02', title: 'Plot', description: 'Developing a strategic roadmap with clear milestones.' },
        { step: '03', title: 'Execute', description: 'Implementing the strategy across selected channels.' },
        { step: '04', title: 'Optimize', description: 'Continuous monitoring and adjustment based on performance data.' }
      ]
    }
  }
];

export const TEAM: TeamMember[] = [
  {
    name: "Suneth Wijesiri",
    role: "Full Stack Developer",
    bio: "Mastering the code cosmos to build resilient, full-stack digital universes.",
    image: "https://cosmosis.se/wp-content/uploads/2024/05/Cosmosis-Team-Suneth.jpg"
  },
  {
    name: "Martine Rossing",
    role: "Project Manager",
    bio: "Orchestrating complex missions with precision, ensuring every project lands safely.",
    image: "https://cosmosis.se/wp-content/uploads/2024/05/Cosmosis-Team-Martine.jpg"
  },
  {
    name: "Asanka Fernando",
    role: "Multidisciplinary Creative",
    bio: "A multidisciplinary visionary bending light and pixel to forge new visual identities.",
    image: "https://cosmosis.se/wp-content/uploads/2024/05/Cosmosis-Team-Asanka.jpg"
  },
  {
    name: "Natasha Withanage",
    role: "Sales and Customer Relations",
    bio: "Connecting brands with their future, guiding partners through the creative nebula.",
    image: "https://cosmosis.se/wp-content/uploads/2024/05/Cosmosis-Team-Natasha.jpg"
  }
];

export const PROJECTS: Project[] = [
  { 
    id: "neon-horizon", 
    title: "Neon Horizon", 
    category: "Branding", 
    imageUrl: "https://picsum.photos/seed/neon/800/600",
    description: "Rebranding a synth-wave music festival for the 2025 season.",
    details: {
      client: "SynthWave Global",
      year: "2024",
      role: "Visual Identity & Art Direction",
      challenge: "The festival's visual identity had become stagnant, blending in with competitors. They needed a radiant, high-energy system that would dominate social feeds and translate physically to massive stage environments.",
      solution: "We developed a dynamic 'Living Light' system. Using generative code, we created a logo that pulsates to the BPM of the headlining track. The color palette was shifted from standard purples to aggressive acid greens and deep blacks.",
      results: [
        "300% increase in social media engagement pre-launch.",
        "Merchandise sold out within 48 hours.",
        "Featured in 'Best Branding of 2024' by DesignWeek."
      ],
      gallery: [
        "https://picsum.photos/seed/neon1/800/600",
        "https://picsum.photos/seed/neon2/800/600",
        "https://picsum.photos/seed/neon3/800/600"
      ]
    }
  },
  { 
    id: "void-walker", 
    title: "Void Walker", 
    category: "Web Design", 
    imageUrl: "https://picsum.photos/seed/void/800/600",
    description: "An immersive 3D commerce experience for high-end streetwear.",
    details: {
      client: "Void Walker Apparel",
      year: "2023",
      role: "UI/UX & WebGL Development",
      challenge: "Void Walker wanted to sell digital-only fashion items (NFTs) alongside physical garments. The challenge was to create a web experience that felt like a futuristic dressing room.",
      solution: "We built a WebGL-powered environment where users can explore the garments in zero gravity. The interface mimics a spaceship HUD, providing technical specs of the fabrics as users hover over items.",
      results: [
        "Average session duration increased by 4 minutes.",
        "Conversion rate for digital items doubled.",
        "Winner of Awwwards Site of the Day."
      ],
      gallery: [
        "https://picsum.photos/seed/void1/800/600",
        "https://picsum.photos/seed/void2/800/600",
        "https://picsum.photos/seed/void3/800/600"
      ]
    }
  },
  { 
    id: "star-dust", 
    title: "Star Dust", 
    category: "Motion", 
    imageUrl: "https://picsum.photos/seed/star/800/600",
    description: "A kinetic typography campaign for a space exploration startup.",
    details: {
      client: "Astra Nova",
      year: "2024",
      role: "Motion Design & Video Production",
      challenge: "Space exploration can feel cold and scientific. Astra Nova needed to convey the emotion and wonder of human expansion into the stars to attract private investment.",
      solution: "We created 'Star Dust', a 60-second manifesto film driven by kinetic typography. Words disintegrate into stardust and reform into new constellations, symbolizing the recycling of matter and ideas.",
      results: [
        "Video garnered 2M+ views on launch week.",
        "Helped secure Series B funding round.",
        "Used as the opening visual for their global summit."
      ],
      gallery: [
        "https://picsum.photos/seed/star1/800/600",
        "https://picsum.photos/seed/star2/800/600",
        "https://picsum.photos/seed/star3/800/600"
      ]
    }
  },
  { 
    id: "cyber-core", 
    title: "Cyber Core", 
    category: "Development", 
    imageUrl: "https://picsum.photos/seed/cyber/800/600",
    description: "Full-stack platform for a decentralized gaming network.",
    details: {
      client: "Nexus Gaming",
      year: "2023",
      role: "Full-Stack Development",
      challenge: "Nexus needed a community platform that could handle real-time matchmaking and cryptocurrency transactions without lag, all wrapped in a 'hacker terminal' aesthetic.",
      solution: "We utilized a MERN stack with WebSocket integration for real-time latency. The frontend was styled with a custom retro-terminal library we built, featuring CRT scanlines and phosphor glow effects.",
      results: [
        "Platform supports 50k concurrent users.",
        "Zero downtime during launch event.",
        "Community grew by 40% in first month."
      ],
      gallery: [
        "https://picsum.photos/seed/cyber1/800/600",
        "https://picsum.photos/seed/cyber2/800/600",
        "https://picsum.photos/seed/cyber3/800/600"
      ]
    }
  },
];