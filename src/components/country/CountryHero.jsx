import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

const SLIDE_DURATION = 9000;

function CloudsOverlay() {
  return (
    <div className="hero-clouds-overlay" aria-hidden="true">
      <div className="hero-cloud hero-cloud--1" />
      <div className="hero-cloud hero-cloud--2" />
    </div>
  );
}

function StarsOverlay() {
  const stars = useMemo(
    () =>
      Array.from({ length: 70 }, (_, i) => ({
        id: i,
        top: Math.random() * 70,
        left: Math.random() * 100,
        size: Math.random() * 1.6 + 0.6,
        delay: Math.random() * 18,
        duration: 14 + Math.random() * 8,
      })),
    [],
  );
  return (
    <div className="hero-stars-overlay" aria-hidden="true">
      <div className="hero-dusk-overlay" />
      <div className="hero-stars-field">
        {stars.map((s) => (
          <span
            key={s.id}
            className="hero-star hero-star--rising"
            style={{
              top: `${s.top}%`,
              left: `${s.left}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              animationDelay: `${s.delay}s`,
              animationDuration: `${s.duration}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function HeroSlide({ slide, prefersReducedMotion, onError }) {
  return (
    <motion.div
      className="country-hero-slide"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.4, ease: 'easeInOut' }}
    >
      <motion.img
        src={slide.src}
        alt={slide.alt}
        onError={onError}
        animate={
          prefersReducedMotion
            ? undefined
            : { scale: [1, 1.12, 1], x: [0, -16, 0], y: [0, 12, 0] }
        }
        transition={
          prefersReducedMotion
            ? undefined
            : { duration: 22, repeat: Infinity, ease: 'easeInOut' }
        }
      />
      {!prefersReducedMotion && slide.effect === 'clouds' && <CloudsOverlay />}
      {!prefersReducedMotion && slide.effect === 'stars' && <StarsOverlay />}
    </motion.div>
  );
}

export default function CountryHero({ data }) {
  const prefersReducedMotion = useReducedMotion();
  const slides = data.heroSlides?.length ? data.heroSlides : [data.heroImage];
  const [index, setIndex] = useState(0);
  const [failed, setFailed] = useState({});

  useEffect(() => {
    if (slides.length < 2 || prefersReducedMotion) return undefined;
    const timer = setTimeout(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => clearTimeout(timer);
  }, [index, slides.length, prefersReducedMotion]);

  const activeSlide = !failed[index] ? slides[index] : null;
  const goTo = (i) => setIndex((i + slides.length) % slides.length);

  return (
    <div className="country-hero">
      <div className="country-hero-bg">
        <AnimatePresence mode="sync">
          {activeSlide && (
            <HeroSlide
              key={index}
              slide={activeSlide}
              prefersReducedMotion={prefersReducedMotion}
              onError={() => setFailed((f) => ({ ...f, [index]: true }))}
            />
          )}
        </AnimatePresence>
      </div>
      <div className="country-hero-overlay" />

      {slides.length > 1 && (
        <div className="country-hero-dots" role="tablist" aria-label="Bildauswahl">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              className={`country-hero-dot${i === index ? ' country-hero-dot--active' : ''}`}
              onClick={() => goTo(i)}
              role="tab"
              aria-selected={i === index}
              aria-label={`Bild ${i + 1} von ${slides.length}`}
            />
          ))}
        </div>
      )}

      <a href="#quiz" className="country-hero-quiz-link">
        <span className="country-hero-quiz-icon" aria-hidden="true">?</span>
        Quiz starten
      </a>
      <motion.div
        className="country-hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="country-hero-flag">
          <img src={data.flagImage.src} alt={data.flagImage.alt} />
        </div>
        <h1>{data.name}</h1>
        <p className="country-hero-tagline">{data.tagline}</p>
        {data.heroLede && <p className="country-hero-lede">{data.heroLede}</p>}
      </motion.div>
    </div>
  );
}
