import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { countryCSSVars } from '../../utils/theme.js';

export default function CountryCard({ country }) {
  const isActive = country.status === 'active';
  const style = countryCSSVars(country.theme);
  const prefersReducedMotion = useReducedMotion();
  const [photoFailed, setPhotoFailed] = useState(false);

  const content = (
    <>
      {country.cardImage && !photoFailed && (
        <motion.img
          className="country-card-photo"
          src={country.cardImage.src}
          alt=""
          style={{ objectPosition: country.cardImage.position || 'center' }}
          onError={() => setPhotoFailed(true)}
          animate={
            prefersReducedMotion
              ? undefined
              : { scale: [1, 1.15, 1], x: [0, -12, 0], y: [0, 10, 0] }
          }
          transition={
            prefersReducedMotion
              ? undefined
              : { duration: 20, repeat: Infinity, ease: 'easeInOut' }
          }
        />
      )}
      <div className="country-card-flag">
        <img src={country.flagImage.src} alt="" />
      </div>
      {!isActive && <span className="country-card-badge">Bald verfügbar</span>}
      <div className="country-card-content">
        <h3>{country.name}</h3>
        {country.tagline && <p>{country.tagline}</p>}
      </div>
    </>
  );

  const Wrapper = isActive ? motion.create(Link) : motion.div;
  const wrapperProps = isActive
    ? { to: `/${country.id}` }
    : {};

  return (
    <Wrapper
      className={`country-card ${isActive ? '' : 'country-card--disabled'}`}
      style={style}
      whileHover={isActive ? { scale: 1.03 } : undefined}
      transition={{ duration: 0.2 }}
      {...wrapperProps}
    >
      {content}
    </Wrapper>
  );
}
