import { useState } from 'react';

import Filter from './components/Filter';

import PersonForm from './components/PersonForm';

import Persons from './components/Persons';



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

    setPersons(persons.filter(person => person.id !== id));

};

 

  // Suodatetut henkilöt

  const personsToShow = persons.filter(person =>

    person.name.toLowerCase().includes(filter.toLowerCase())

  );

 

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