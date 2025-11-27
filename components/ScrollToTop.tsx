import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there is no hash, scroll to top (standard page change)
    if (!hash) {
      window.scrollTo(0, 0);
    } 
    // If there is a hash, attempt to scroll to the element
    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Slight delay to ensure DOM is ready
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;