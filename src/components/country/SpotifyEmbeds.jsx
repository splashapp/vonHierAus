export default function SpotifyEmbeds({ playlists = [] }) {
  return (
    <div className="spotify-grid">
      {playlists.map((p) => (
        <div key={p.spotifyUrl}>
          <iframe
            title={p.title}
            src={p.embedUrl}
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}
