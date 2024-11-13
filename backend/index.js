const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(express.json()); 
app.use(morgan('tiny')); 
app.use(cors());

morgan.token('body', (req) => JSON.stringify(req.body));

app.use(
  morgan(':method :url :status :res[content-lenght] :response-time ms :body')
);

let henkilot = [
  { id: 1, name: 'Jaana Dolonen', number: '040-123456' },
  { id: 2, name: 'Jouni Dolonen', number: '040-2345678' },
  { id: 3, name: 'Jaakko Seppä', number: '050-3456789' },
  { id: 4, name: 'Jaani Jansson', number: '050-4567890' }
];

app.get('/api/henkilot', (req, res) => {
  res.json(henkilot);
});

app.get('/api/henkilot/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const henkilo = henkilot.find(h => h.id === id);
  res.json('message1')

  if (henkilo) {
    res.json(henkilo);
  } else {
    res.status(404).send({ error: 'Henkilöä ei löytynyt' });
  }
});

// Delete phone entry by id
app.delete('/api/henkilot/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = henkilot.findIndex(h => h.id === id);

  if (index !== -1) {
    henkilot.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).send({ error: 'Henkilöä ei löytynyt' });
  }
});

// Function to generate a unique ID
const generateUniqueId = () => {
  let id;
  do {
    id = Math.floor(Math.random() * 10000); // Generates an ID between 0 and 9999
  } while (henkilot.some(h => h.id === id)); // Ensure the ID is unique
  return id;
};

// Route to add a new phone entry
app.post('/api/henkilot', (req, res) => {
  const { name, number } = req.body; // Extract name and number from the request body

  // Check if both name and number are provided
  if (!name || !number) {
    return res.status(400).send({ error: 'Nimi tai numero puuttuu' }); // 400 Bad Request
  }

  // Check for duplicate names
  const duplicate = henkilot.find(h => h.name === name);
  if (duplicate) {
    return res.status(400).send({ error: 'Nimi on jo luettelossa' }); // 400 Bad Request
  }

  const newHenkilo = {
    id: generateUniqueId(), // Generate a unique ID
    name,
    number
  };

  henkilot.push(newHenkilo); // Add the new entry to the array
  res.status(201).json(newHenkilo); // Respond with the newly created entry and 201 Created status
});

// Route for displaying service info
app.get('/info', (req, res) => {
  const currentDate = new Date();
  const info = `
    <p>Puhelinluettelossa on ${henkilot.length} henkilön tiedot</p>
    <p>${currentDate}</p>
  `;
  res.send(info);
});

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);

});
