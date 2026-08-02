import { useState } from 'react';

function extractYouTubeId(url) {
  const match = url.match(/(?:v=|youtu\.be\/|embed\/)([\w-]{11})/);
  return match ? match[1] : null;
}

export default function VideoCard({ video }) {
  const [playing, setPlaying] = useState(false);
  const videoId = extractYouTubeId(video.url);

  if (!videoId) {
    return (
      <div className="link-item">
        <strong>{video.title}</strong>
        <span>{video.type === 'documentary' ? 'Dokumentation' : 'Reisevideo'}</span>
      </div>
    );
  }

  if (playing) {
    return (
      <div className="video-card video-card--playing">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <button type="button" className="video-card" onClick={() => setPlaying(true)}>
      <img src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`} alt="" loading="lazy" />
      <span className="video-card-play" aria-hidden="true">▶</span>
      <span className="video-card-info">
        <strong>{video.title}</strong>
        <span>{video.type === 'documentary' ? 'Dokumentation' : 'Reisevideo'}</span>
      </span>
    </button>
  );
}
