import { useId, useState } from 'react';
import { motion } from 'framer-motion';
import Collapsible from './Collapsible.jsx';

export default function Section({
  title,
  teaser,
  icon,
  children,
  defaultOpen = false,
  anchorId,
  openLabel = 'Details anzeigen',
  closeLabel = 'Details schließen',
  className = '',
}) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();

  return (
    <motion.section
      id={anchorId}
      className={`section ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      {title && (
        <h2 className="section-title">
          {icon && <span className="section-icon" aria-hidden="true">{icon}</span>}
          {title}
        </h2>
      )}
      {teaser && <p className="section-teaser">{teaser}</p>}
      <button
        type="button"
        className="details-toggle"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((o) => !o)}
      >
        <span>{open ? closeLabel : openLabel}</span>
        <motion.svg
          className="details-toggle-chevron"
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          aria-hidden="true"
        >
          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
      </button>
      <Collapsible id={id} open={open}>
        {children}
      </Collapsible>
    </motion.section>
  );
}
