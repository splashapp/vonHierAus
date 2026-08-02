import { motion } from 'framer-motion';
import ImageWithFallback from './ImageWithFallback.jsx';

export default function Card({ image, title, subtitle, children, className = '', imageAction }) {
  const imageEl = image && (
    <ImageWithFallback src={image.src} alt={image.alt} credit={image.credit} className="card-image" />
  );

  return (
    <motion.div
      className={`card ${className}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4 }}
    >
      {image &&
        (imageAction ? (
          <button
            type="button"
            className="card-image-action"
            onClick={imageAction.onClick}
            aria-expanded={imageAction.toggle ? imageAction.active : undefined}
            aria-controls={imageAction.controls}
          >
            {imageEl}
            <span className="card-image-overlay">
              <span className="card-image-overlay-label">
                {imageAction.active ? imageAction.activeLabel || imageAction.label : imageAction.label}
              </span>
            </span>
          </button>
        ) : (
          imageEl
        ))}
      <div className="card-body">
        {title && <h3 className="card-title">{title}</h3>}
        {subtitle && <p className="card-subtitle">{subtitle}</p>}
        {children}
      </div>
    </motion.div>
  );
}
