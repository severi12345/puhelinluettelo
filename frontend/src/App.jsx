import { useState } from 'react';

import Filter from './components/Filter';

import PersonForm from './components/PersonForm';

import Persons from './components/Persons';

const Notification = ({ message, type }) => {
  // jos message - arvo on tyhjä tai määrittelemätön, komponentti ei renderöi mitään ja palauttaa null.
  if (!message) return null;
  
  // Lisätään sitten viesteille sopivat tyylit:
  const style = {
  color: type === 'success' ? 'green' :
  type === 'error' ? 'red' :
  type === 'info' ? 'blue' : 'black',
  backgroundColor: '#cccccc',
  border: `2px solid ${type === 'success' ? 'green' :
  type === 'error' ? 'red' : 'blue'}`,
  padding: '10px',
  marginBottom: '20px',
  borderRadius: '5px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
  fontWeight: 'bold',
  };
  // ilmoitus näytetään <div>-elementissä, joka tyyli on määritelty alla olevalla style-objektilla. message-props toimii ilmoituksen sisältönä
  return <div style={style}>{message}</div>;
};

const App = () => {

  const [persons, setPersons] = useState([

   //{ name: 'Arvo Allas', number: '040-1234567' },

  //{ name: 'Arvo Allas' },

  { id: 1, name: 'Jouni Dolonen', number: '040-1234567' },

  { id: 2, name: 'Jaana Dolonen', number: '040-2345678' },

 { id: 3, name: 'Jaakko Seppä', number: '050-3456789' },

  { id: 4, name: 'Jaani Jansson', number: '050-4567890' }

 

  ]);

  const [newName, setNewName] = useState('');

  const [newNumber, setNewNumber] = useState('');

  const [filter, setFilter] = useState('');

  const [notificationMessage, setNotificationMessage] = useState('');

  const [notificationType, setNotificationType] = useState('');

  const showNotification = (message, type) => {
    setNotificationMessage(message); // Asetetaan ilmoituksen viesti (message) Reactin tilaan
    setNotificationType(type);       // Asetetaan ilmoituksen tyyppi (type), joka määrittää sen ulkoasun
    // Käytetään ajastinta (setTimeout) piilottamaan ilmoitus 3 sekunnin kuluttua
      setTimeout(() => {
      setNotificationMessage(null);    // Tyhjennetään ilmoituksen viesti
      setNotificationType(null);       // Tyhjennetään ilmoituksen tyyppi
      // Ajastimen kesto on 3 000 millisekuntia (3 sekuntia)
      }, 3000);
  };

  // Lisää uuden henkilön

  const addPerson = (event) => {

    event.preventDefault();

 

// Lisätty nimikenttä tarkistus

if (!newName ) {

  alert('nimikenttä ei voi olla tyhjä')

  return

}

// Lisätty numerokenttä tarkistus 7.11.2024

if (!newNumber) {

  alert('numerokenttä ei voi olla tyhjä')

  return

}

 

// Tarkista, onko nimi jo luettelossa

    if (persons.some(person => person.name.toLowerCase() === newName.toLowerCase())) {

      alert(`${newName} on jo lisätty puhelinluetteloon`);

      return;

    }

    //Lisätty id: Math.max(...persons.map(person => person.id)) + 1,

    const newPerson = { id: Math.max(...persons.map(person => person.id)) + 1, name: newName, number: newNumber };

    setPersons(persons.concat(newPerson));

    setNewName('');

    setNewNumber('');

  };

 

  // Päivittää suodatustekstin

  const handleFilterChange = (event) => {

    setFilter(event.target.value);

  };

 

  // Päivittää nimen

  const handleNameChange = (event) => {

    setNewName(event.target.value);

  };

 

   // Päivittää numeron

  const handleNumberChange = (event) => {

    setNewNumber(event.target.value);

  };

 

  // Poistaa henkilön listalta

 

  const handleDelete = (id) => {
    if (window.confirm("Haluatko varmasti poistaa yhteystiedon?")) {
      setPersons(persons.filter(person => person.id !== id));
      showNotification(`${newName} poistettu onnistuneesti!`, 'error');
    }

};

 

  // Suodatetut henkilöt

  const personsToShow = persons.filter(person =>

    person.name.toLowerCase().includes(filter.toLowerCase())

  );

  const existingPerson = persons.find(person => person.name.toLowerCase() === newName.toLowerCase());

    if (existingPerson) {
      if (window.confirm(`${existingPerson.name} on jo luettelossa, haluatko päivittää numeron?`)) {
        const updatedPerson = { ...existingPerson, number: newNumber };
        setPersons(persons.map(person =>
          person.id === existingPerson.id ? updatedPerson : person
        ));
        showNotification(`${existingPerson.name} numero päivitetty!`, 'info');
      }
    } else {
      const newPerson = { id: Math.max(...persons.map(person => person.id)) + 1, name: newName, number: newNumber };
      setPersons(persons.concat(newPerson));
      showNotification(`${newName} lisätty onnistuneesti!`, 'success');
    }

    setNewName('');
    setNewNumber('');
  };

  return (  

    <div>

      <h2>Puhelinluettelo</h2>

      <Filter filter={filter} handleFilterChange={handleFilterChange} />

      <h3>Lisää uusi</h3>

      <PersonForm

        addPerson={addPerson}

        newName={newName}

        handleNameChange={handleNameChange}

        newNumber={newNumber}

        handleNumberChange={handleNumberChange}

      />

      <h3>Numerot</h3>

      <Persons persons={personsToShow} handleDelete={handleDelete}/>

      {personsToShow.length === 0 && <p>Ei tuloksia</p>}

    </div>

  );

};

export default App;