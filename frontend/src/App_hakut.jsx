import { useState } from 'react';

const App = () => {
    const [persons, setPersons] = useState([
        //{ name: 'Arvo Allas', number: '040-1234567' },
        { id: 1, name: 'Jouni Dolonen', number: '040-1234567' },
        { id: 2, name: 'Jaana Dolonen', number: '040-2345678' },
        { id: 3, name: 'Jaakko Seppä', number: '050-3456789' },
        { id: 4, name: 'Jaani Jansson', number: '050-4567890' }
    ]);

    const [filter, setFilter] = useState('');

    const personsToShow = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())
    );

<ul>
{personsToShow.map(person =>(
<li key={person.id}>
{person.name} {person.number}
</li>
))}
</ul>

return(
    <div>
    <h2>Puhelinluettelo</h2>
    <div>
    haku puhelinluettelosta <input value={filter} onChange={(event) => setFilter(event.target.value)} />
    </div>
    <h3>Numerot</h3>
    <ul>
    {personsToShow.map(person =>(
    <li key={person.id}>
    {person.name} {person.number}
    </li>
    ))}
    </ul>
    </div>
    );
};
export default App;