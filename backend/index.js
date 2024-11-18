const express = require('express');
const app = express();

let henkilot = [
    { id: 1, name: 'Jouni Dolonen', number: '040-1234567' },
    { id: 2, name: 'Jaana Dolonen', number: '040-8765432' },
    { id: 3, name: 'Jaakko Seppä', number: '050-3456789' },
    { id: 4, name: 'Jaani Jansson', number: '050-4567890' },
    { id: 5, name: 'Etunimi Sukunimi', number: '123-4567890' }
  ];

app.get('/api/henkilot', (req, res) => {
  res.json(henkilot);
});

app.get('/api/henkilot/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const henkilo = henkilot.find(h => h.id === id);

  if (henkilo) {
    res.json(henkilo);
  } else {
    res.status(404).send({ error: 'henkilöä ei löytynyt' })
  }
});

app.get('/info', (req, res) => {
  const currentData = new Date();
  const info = `
  <p>Puhelinuettelossa on ${henkilot.length} henkilön tiedot<p>
  <p>${currentData}<p>
  `;
  res.send(info);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});