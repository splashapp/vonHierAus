import ImageWithFallback from './ImageWithFallback.jsx';

export default function FlagBadge({ flagImage, size = 'md' }) {
  if (!flagImage) return null;
  return (
    <div className={`flag-badge flag-badge--${size}`}>
      <ImageWithFallback src={flagImage.src} alt={flagImage.alt} />
    </div>
  );
}
