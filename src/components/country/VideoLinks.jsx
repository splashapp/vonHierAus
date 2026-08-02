import VideoCard from './VideoCard.jsx';
import Card from '../shared/Card.jsx';

export default function VideoLinks({ videos = [], movies = [] }) {
  return (
    <div className="video-grid">
      {videos.map((v) => (
        <VideoCard key={v.url} video={v} />
      ))}
      {movies.map((m) => (
        <Card key={m.title} image={m.image} title={`${m.title} (${m.year})`} subtitle={m.note} />
      ))}
    </div>
  );
}
