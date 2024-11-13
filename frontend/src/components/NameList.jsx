// Datakokelmien renderöinti näytölle
function NameList() {
const names = ['Elias', 'Matti', 'Jaakko', 'Anna'];
return(
    <ul>
        <h2>Numerot</h2>
        {names.map((name,index) => (
            <li key={index}>{name}</li>
        ))}
    </ul>
);
}

export default NameList;