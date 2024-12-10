const Filter = ({ filter, handleFilterChange }) => {
    return (
      <div>
        {/* placeholder lisätty */}
        Haku puhelinluettelosta <input value = {filter} onChange={handleFilterChange} placeholder = "Haku puhelinluettelosta" />
      </div>
    );
  };
 
  export default Filter;
 