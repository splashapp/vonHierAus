import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Kleiner "i"-Info-Button, der bei Klick ein zentriertes Popup mit ergänzendem Text öffnet —
// für Hinweise, die nicht dauerhaft sichtbar sein müssen (z.B. ein Reisehinweis neben einer
// Uhrzeit-Anzeige), ohne eine Kachel dauerhaft mit Fließtext zu füllen.
export default function InfoPopover({ label = 'Weitere Informationen', children }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="info-popover-trigger"
        aria-label={label}
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        i
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className="info-popover-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="info-popover-box"
              role="dialog"
              aria-modal="true"
              aria-label={label}
              initial={{ opacity: 0, scale: 0.96, y: 6 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 6 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="info-popover-close"
                aria-label="Schließen"
                onClick={() => setOpen(false)}
              >
                ×
              </button>
              <p>{children}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
