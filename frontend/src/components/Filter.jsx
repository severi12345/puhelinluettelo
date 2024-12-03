import { useState } from 'react';

const App = (numerot) => {
    const [persons, setPersons] = useState([
        numerot
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