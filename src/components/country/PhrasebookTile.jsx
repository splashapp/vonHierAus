export default function PhrasebookTile({ phrasebook }) {
  if (!phrasebook?.categories?.length) return null;

  return (
    <div className="fact-tile fact-tile-phrasebook">
      {phrasebook.languageName && (
        <span className="phrasebook-lang-label">{phrasebook.languageName}</span>
      )}
      <div className="phrasebook-scroll">
        {phrasebook.categories.map((category) => (
          <div className="phrasebook-category" key={category.title}>
            {category.phrases.map((phrase) => (
              <div className="phrasebook-row" key={phrase.de}>
                <span className="phrasebook-de">{phrase.de}</span>
                <span className="phrasebook-local">
                  <bdi>{phrase.local}</bdi> · {phrase.phonetic}
                  {phrase.note && <span className="phrasebook-note"> ({phrase.note})</span>}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
