export default function FlightInfo({ flights }) {
  if (!flights || flights.routes.length === 0) return null;

  return (
    <div className="flight-info">
      <p>Anreise ab {flights.fromCity}:</p>
      <table className="flight-table">
        <thead>
          <tr>
            <th>Airline</th>
            <th>Verbindung</th>
            <th>Flugdauer</th>
            <th>Hinweis</th>
          </tr>
        </thead>
        <tbody>
          {flights.routes.map((route) => (
            <tr key={route.airline + route.bookingNote}>
              <td>
                {route.url ? (
                  <a href={route.url} target="_blank" rel="noreferrer">
                    {route.airline}
                  </a>
                ) : (
                  route.airline
                )}
              </td>
              <td>{route.via}</td>
              <td>{route.durationApprox}</td>
              <td>{route.bookingNote}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
