const PersonForm = ({ addPerson, newName, handleNameChange, newNumber, handleNumberChange }) => {
    return (
      <form onSubmit={addPerson}>
        <div>
           {/* placeholder lisätty */}
          Nimi: <input value={newName} onChange={handleNameChange} placeholder="Syötä nimi"/>
        </div>
        <div>
           {/* placeholder lisätty */}  
          Numero: <input value={newNumber} onChange={handleNumberChange} placeholder="Syötä numero"/>
        </div>
        <div>
          <button type="submit">Lisää</button>
        </div>
      </form>
    );
  };
 
  export default PersonForm;
 