// lomakkeenkäsittely käyttäen useState-hookia
import { useState } from "react";

function NameForm() {
  const [name, setName] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nimi: ${name}`);
  };

    return (
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={name} 
          onChange={(e)=> setName(e.target.value)}
          />
          <button type='submit'>Lisää</button>
      </form>
    );
}

export default NameForm;