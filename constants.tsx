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
    id: "breathe", 
    title: "Breathe IT", 
    category: "Custom IT Solutions", 
    imageUrl: "https://framerusercontent.com/images/ipeDv4UoBeUDIIBrnWkuhVMqN4.webp", 
    description: "Integrating advanced technology with user-friendly design to enhance business efficiency.",
    details: {
      client: "Breathe IT",
      year: "2024",
      role: "Branding, Web & CRM",
      challenge: "Breathe IT’s existing website lacked clarity and functionality, making it difficult for users to understand the company’s full capabilities. A more structured and engaging online presence was needed to showcase their expertise in custom IT systems effectively.",
      solution: "We redesigned the website with a fresh, modern look, drastically improving navigation and segmentation. Key to the solution was the development of a dedicated client portal with a custom CRM system for seamless account access. Visually, we created a concept fusing technology with nature—balancing blues and violets with grounding organic greens—to align the technological and human-centered aspects of the brand.",
      results: [
        "Enhanced clarity of service offerings.",
        "Successful deployment of custom CRM portal.",
        "Improved user engagement via 'Tech + Nature' design."
      ],
      gallery: [
        "https://framerusercontent.com/images/p36p9VvDRIKXpeDh6BIPdj1SuhU.webp", 
        "https://framerusercontent.com/images/kGkwuvQElM0W3pwyo8yzR4A7YOw.webp", 
        "https://framerusercontent.com/images/ZCGsaYimnKL6XUK4ZfJ1t2hLino.webp"
      ]
    }
  },
  { 
    id: "cepheo", 
    title: "Cepheo", 
    category: "Business Technology", 
    imageUrl: "https://framerusercontent.com/images/dpozrVzvaD4r2jJnCV1qtcO3vGM.webp",
    description: "Optimizing business operations with Microsoft Dynamics and advanced digital tools.",
    details: {
      client: "Cepheo",
      year: "2024",
      role: "Portal Redesign & UX",
      challenge: "Cepheo’s customer portal was functional but lacked a modern, intuitive interface. Users needed improved navigation, better data accessibility, and additional features to enhance their experience. A redesign was necessary to align with current usability standards while maintaining brand consistency.",
      solution: "We modernized the portal with a refined look that preserved Cepheo’s brand identity. We introduced Report Generation for deeper insights, automated Task Scheduling for efficiency, and Advanced Filtering for quicker data access. The interface was streamlined to ensure a seamless, user-friendly browsing experience for enterprise clients.",
      results: [
        "Streamlined user navigation flows.",
        "Increased efficiency via automated task scheduling.",
        "Enhanced data accessibility for end-users."
      ],
      gallery: [
        "https://framerusercontent.com/images/XgdbF0XMjSu41cccDi2CUVBmSY.webp",
        "https://framerusercontent.com/images/p8utfsptHN53MpeKwTkyByNELXc.webp",
        "https://framerusercontent.com/images/i3rzRUjQLTtho7by4gfMx0edIg.webp"
      ]
    }
  },
  { 
    id: "business-insights", 
    title: "Business Insights", 
    category: "CRM Integration & UI", 
    imageUrl: "https://framerusercontent.com/images/i1LsuLMArWeb9ebIKmHCeusuDo.webp",
    description: "Integrating Dynamics 365 with Proff for critical company insights.",
    details: {
      client: "Breathe IT",
      year: "2024",
      role: "UI/UX & Data Design",
      challenge: "The existing interface of the Breathe Business Insights module lacked a structured and visually appealing layout, making data presentation less intuitive. A refreshed design was needed to improve readability and create a more engaging user experience for CRM users who need instant access to financial performance and key metrics.",
      solution: "We executed a comprehensive UI redesign using a modern card-based layout to enhance usability. By organizing complex information into structured cards, we improved the visual hierarchy, allowing users to scan for critical company structures and financial data. We optimized typography and spacing to make data-heavy content accessible while ensuring the design language aligned perfectly with the broader brand ecosystem.",
      results: [
        "Enhanced visual hierarchy via card-based layout.",
        "Improved data readability and user accessibility.",
        "Seamless integration with Dynamics 365 workflow."
      ],
      gallery: [
        "https://framerusercontent.com/images/ESYDvnmfY55TbNaL3UOkk5eBRc.png",
        "https://framerusercontent.com/images/b8k8XUVGIMOTMSh3olYYLo07otw.png",
        "https://framerusercontent.com/images/iQ3ljixVblAeEzMi0RdMZLmyAsg.webp"
      ]
    }
  },
  { 
    id: "nordic-dynamics", 
    title: "Nordic Dynamics", 
    category: "IT & Cloud Solutions", 
    imageUrl: "https://framerusercontent.com/images/XmN1lYP3PhmjHSX3vc9lEOoqSe4.webp",
    description: "Modernizing the infrastructure. A digital transformation for a tech giant.",
    details: {
      client: "Nordic Dynamics",
      year: "2024",
      role: "Rebranding & Web Design",
      challenge: "Nordic Dynamics is a leader in IT infrastructure and cloud solutions, but their brand image was stuck in the server rooms of the past. They needed a visual identity that reflected their transition into modern, agile cloud computing and AI-driven services.",
      solution: "We executed a complete digital transformation. We discarded the legacy corporate blue for a sharp, monochrome palette accented with dynamic motion graphics that represent data flow. The new website is built on a headless architecture, matching the speed and reliability of the services they provide. We turned a traditional IT firm into a forward-thinking tech powerhouse.",
      results: [
        "Inbound leads increased by 50% in the first month.",
        "Brand perception shifted from 'Legacy' to 'Innovator'.",
        "Winner of the Nordic Digital Design Award."
      ],
      gallery: [
        "https://framerusercontent.com/images/zhLfgKI0sm8fc5G57BFGGx7dSTU.webp",
        "https://framerusercontent.com/images/MxKGyrOqHGyczXOpHFYYGR0B4vM.webp",
        "https://framerusercontent.com/images/GhX3ABoZ6PbD4dNVKtyRZJ39fs.webp?scale-down-to=4096"
      ]
    }
  },
];