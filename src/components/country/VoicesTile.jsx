import { useState, useEffect } from 'react';
import Section from '../shared/Section.jsx';

/*
  VoicesTile — "Stimmen zum Land"
  ---------------------------------------------------------------------------
  Zwei Schichten, beide ohne Backend:

  1) KURATIERT (für alle sichtbar): kommt aus der Länder-Datei als
     country.voices = [{ role, text, name?, place? }]. Redaktionell gepflegt —
     das ist der Weg, wie ein Besucher-Beitrag zu echtem Inhalt für alle wird.

  2) LOKAL (nur im Browser des jeweiligen Besuchers): eigene Beiträge, in
     localStorage gespeichert, bleiben beim Wiederkommen erhalten, löschbar.
     NICHT geteilt — jede:r sieht nur die eigenen Beiträge.

  Optional: "An die Redaktion senden" öffnet eine vorbereitete Mail (nur wenn
  EDITOR_EMAIL gesetzt ist), damit gute Beiträge in country.voices übernommen
  werden können.
*/

const EDITOR_EMAIL = '';

const ROLES = [
  { id: 'traveler', label: 'Ich war dort' },
  { id: 'local', label: 'Ich komme von dort' },
  { id: 'hamburg', label: 'Ich lebe in Hamburg' },
];

const roleLabel = (id) => ROLES.find((r) => r.id === id)?.label ?? '';
const storageKey = (countryId) => `voices:${countryId}`;

function loadLocal(countryId) {
  try {
    const raw = localStorage.getItem(storageKey(countryId));
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveLocal(countryId, entries) {
  try {
    localStorage.setItem(storageKey(countryId), JSON.stringify(entries));
  } catch {
    /* Speicher voll oder blockiert — Beitrag bleibt für diese Sitzung sichtbar */
  }
}

export default function VoicesTile({ countryId, countryName, voices = [] }) {
  const [mine, setMine] = useState([]);
  const [role, setRole] = useState('traveler');
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    setMine(loadLocal(countryId));
  }, [countryId]);

  const persist = (next) => {
    setMine(next);
    saveLocal(countryId, next);
  };

  const addEntry = () => {
    const body = text.trim();
    if (!body) return;
    const entry = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      role,
      name: name.trim(),
      text: body,
      createdAt: new Date().toISOString(),
    };
    persist([entry, ...mine]);
    setText('');
  };

  const removeEntry = (id) => {
    persist(mine.filter((e) => e.id !== id));
  };

  const sendToEditor = (entry) => {
    const subject = `Beitrag zu ${countryName}`;
    const lines = [
      `Land: ${countryName}`,
      `Rolle: ${roleLabel(entry.role)}`,
      entry.name ? `Name: ${entry.name}` : null,
      '',
      entry.text,
    ].filter(Boolean);
    const href = `mailto:${EDITOR_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
    window.location.href = href;
  };

  const teaser = `Warst du in ${countryName}, kommst du von dort oder lebst du in Hamburg? Teile eine Beobachtung, einen Tipp oder eine Geschichte.`;

  return (
    <Section
      title="Stimmen zum Land"
      teaser={teaser}
      openLabel="Stimmen lesen & mitschreiben"
      closeLabel="Stimmen schließen"
      defaultOpen
    >
      <div className="voices">
        {voices.length > 0 && (
          <ul className="voices-list voices-list--curated">
            {voices.map((v, i) => (
              <li className="voice-card" key={`curated-${i}`}>
                <p className="voice-text">{v.text}</p>
                <p className="voice-meta">
                  <span className="voice-role">{roleLabel(v.role)}</span>
                  {v.name && <span className="voice-name"> · {v.name}</span>}
                  {v.place && <span className="voice-place"> · {v.place}</span>}
                </p>
              </li>
            ))}
          </ul>
        )}

        <div className="voice-form">
          <div className="voice-roles" role="radiogroup" aria-label="Deine Rolle">
            {ROLES.map((r) => (
              <button
                type="button"
                key={r.id}
                role="radio"
                aria-checked={role === r.id}
                className={`voice-role-btn${role === r.id ? ' is-active' : ''}`}
                onClick={() => setRole(r.id)}
              >
                {r.label}
              </button>
            ))}
          </div>

          <input
            className="voice-name-input"
            type="text"
            placeholder="Name (optional)"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <textarea
            className="voice-textarea"
            rows={3}
            placeholder={`Was möchtest du zu ${countryName} beitragen?`}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <button type="button" className="voice-submit" onClick={addEntry} disabled={!text.trim()}>
            Beitrag speichern
          </button>
          <p className="voice-hint">
            Wird nur in deinem Browser gespeichert und bleibt beim nächsten Besuch erhalten.
          </p>
        </div>

        {mine.length > 0 && (
          <div className="voices-mine">
            <h4 className="voices-mine-title">Deine Beiträge</h4>
            <ul className="voices-list">
              {mine.map((e) => (
                <li className="voice-card voice-card--mine" key={e.id}>
                  <p className="voice-text">{e.text}</p>
                  <p className="voice-meta">
                    <span className="voice-role">{roleLabel(e.role)}</span>
                    {e.name && <span className="voice-name"> · {e.name}</span>}
                  </p>
                  <div className="voice-actions">
                    {EDITOR_EMAIL && (
                      <button type="button" className="voice-action" onClick={() => sendToEditor(e)}>
                        An die Redaktion senden
                      </button>
                    )}
                    <button
                      type="button"
                      className="voice-action voice-action--remove"
                      onClick={() => removeEntry(e.id)}
                    >
                      Löschen
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Section>
  );
}
