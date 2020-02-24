function Person(props) {
    const { name, age, hobbies } = props;
    const displayName = name.length > 8 ? name.slice(0, 6) : name;
    const message = age > 18 ? "please go vote!" : "you must be 18";

    return (<div><p> Learn some information about {displayName}.</p>
        <h3>{message}</h3>
        <ul>Hobbies:
        {hobbies.map(h => <li>{h}</li>)}
        </ul>

    </div>)
}