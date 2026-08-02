import { useState } from 'react';

export default function ImageWithFallback({ src, alt, credit, className = '', ...rest }) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div className={`image-fallback ${className}`} role="img" aria-label={alt} {...rest}>
        <span>{alt}</span>
      </div>
    );
  }

  return (
    <figure className={`image-wrap ${className}`}>
      <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} {...rest} />
      {credit && <figcaption className="image-credit">{credit}</figcaption>}
    </figure>
  );
}
