import { useState, useEffect } from 'react';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { PROJECTS as STATIC_PROJECTS } from '../constants';
import { Project } from '../types';

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Subscribe to real-time updates from Firestore
    const q = query(collection(db, 'projects'), orderBy('year', 'desc')); // Assuming year or create date

    const unsubscribe = onSnapshot(q, (snapshot) => {
      if (!snapshot.empty) {
        // If we have data in Firebase, use it
        const firebaseProjects = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Project[];
        setProjects(firebaseProjects);
      } else {
        // Fallback to hardcoded constants if DB is empty
        // This ensures the site is populated even before you add content to the CMS
        setProjects(STATIC_PROJECTS);
      }
      setLoading(false);
    }, (error) => {
      console.error("Error fetching projects:", error);
      // Fallback on error
      setProjects(STATIC_PROJECTS);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { projects, loading };
};