import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function CapitalTile({ capital, capitalImage }) {
  const prefersReducedMotion = useReducedMotion();
  const [failed, setFailed] = useState(false);

  return (
    <div className="fact-tile fact-tile-capital">
      {capitalImage?.src && !failed && (
        <motion.img
          className="fact-tile-capital-photo"
          src={capitalImage.src}
          alt={capitalImage.alt}
          onError={() => setFailed(true)}
          animate={
            prefersReducedMotion
              ? undefined
              : { scale: [1, 1.14, 1], x: [0, 8, 0], y: [0, -10, 0] }
          }
          transition={
            prefersReducedMotion
              ? undefined
              : { duration: 22, repeat: Infinity, ease: 'easeInOut' }
          }
        />
      )}
      <div className="fact-tile-capital-overlay" />
      <div className="fact-tile-capital-content">
        <div className="fact-tile-label">Hauptstadt</div>
        <div className="fact-tile-value">{capital}</div>
      </div>
    </div>
  );
}
