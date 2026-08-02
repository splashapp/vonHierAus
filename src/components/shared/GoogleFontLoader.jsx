import { useEffect } from 'react';

export default function GoogleFontLoader({ href }) {
  useEffect(() => {
    if (!href) return undefined;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, [href]);

  return null;
}
