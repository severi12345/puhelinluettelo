// Palvelimella olevan datan käsittely
import { useEffect, useState } from "react";

function DataFetch() {
  const [data, setData] = useState([]);         // Korjattu setData
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/henkilot/')
      .then(response => {
        if (!response.ok) {                    // Korjattu ehdon suunta
          throw new Error('Verkkovirhe: ' + response.status);
        }
        return response.json();                // Korjattu response.json() kutsu
      })
      .then(data => {
        setData(data);                         // Korjattu setData
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Ladataan dataa...</p>;
  if (error) return <p>Virhe: {error}</p>;

  return (
      <ul>
        <h2>Henkilöt</h2>
        {data.map(person => (
          <li key={person.id}>
            {person.name} - {person.number}
          </li>
        ))}
      </ul>

  );
}

export default DataFetch;
