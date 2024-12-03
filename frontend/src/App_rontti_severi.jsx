import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    //{ name: 'Arvo Allas' },
    { id: -1, name: 'aaa', number: '040-1234567' },
    { id: 0, name: 'bbb', number: '040-1234567' },
    { id: 1, name: 'Jouni Dolonen', number: '040-1234567' },
    { id: 2, name: 'Jaana Dolonen', number: '040-2345678' },
    { id: 3, name: 'Jaakko Seppä', number: '050-3456789' },
    { id: 4, name: 'Jaani Jansson', number: '050-4567890' }
  ])

  // Tila newName on tarkoitettu lomakkeen kentän kontrollointiin
  const [newName, setNewName] = useState('')

  // Tila newNumber on tarkoitettu lomakkeen puhelinnumeron kentän kontrollointiin
  const [newNumber, setNewNumber] = useState('')

  //
  const [filter, setFilter] = useState('');

  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()));
  //

  // Käsittele henkilön lisäyslomakkeen lähetys
  const addPerson = (event) => {
    event.preventDefault()

    // Tarkista, onko nimi jo luettelossa
    if (!newName ) {
      alert('nimikenttä ei voi olla tyhjä')
      return
    }
    // Lisätty numerokenttä
    if (!newNumber) {
      alert('numerokenttä ei voi olla tyhjä')
      return
    }
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} on jo lisätty puhelinluetteloon`)
      return
    }

    // Lisää uusi henkilö luetteloon
    const personObject = {
      name: newName,
      number: newNumber // Lisää puhelinnumero tieto tähän
    }

    setPersons(persons.concat(personObject))
    setNewName('') // Tyhjennä syöttökenttä
    setNewNumber('') // Tyhjennä puhelinnumeron syöttökenttä
  }

  // Päivitä newName-state syöttökentän arvolla
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  // Päivitä newNumber-state syöttökentän arvolla
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    
  <div className="form-container">
  <h2>Puhelinluettelo</h2>
  haku puhelinluettelosta <input value={filter} onChange={(event) => setFilter(event.target.value)} />
  <form onSubmit={addPerson}>
    <div className="form-field">
      <label htmlFor="name">nimi:</label>
      <input id="name" type="text" value={newName} onChange={handleNameChange} />
    </div>
    <div className="form-field">
      <label htmlFor="number">numero:</label>
      <input id="number" type="text" value={newNumber} onChange={handleNumberChange} />
    </div>
    <div className="form-button">
      <button type="submit">Lisää</button>
  </div>
  </form>

  <h2>Numerot</h2>
  <ul>
    {personsToShow.map((person, index) => (
      <li key={index}>
        {person.name} {person.number}
      </li>
    ))}
  </ul>
</div>


  )
}

export default App;