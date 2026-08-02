import { AnimatePresence, motion } from 'framer-motion';

export default function Collapsible({ id, open, children }) {
  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          id={id}
          key="content"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          style={{ overflow: 'hidden' }}
        >
          <div className="collapsible-inner">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
