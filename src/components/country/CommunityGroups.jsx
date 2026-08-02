import CommunityCard from './CommunityCard.jsx';

export default function CommunityGroups({ groups = [], countryName }) {
  if (groups.length === 0) {
    return (
      <p className="community-empty-note">
        Uns ist aktuell kein {countryName}-Verein oder -Kulturzentrum in Hamburg bekannt — kennst
        du eine Gruppe, die hier fehlt?
      </p>
    );
  }
  return (
    <div className="community-grid">
      {groups.map((group) => (
        <CommunityCard key={group.name} group={group} />
      ))}
    </div>
  );
}
