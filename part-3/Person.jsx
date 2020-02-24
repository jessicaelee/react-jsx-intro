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

function Alert(props) {
    const { message, type } = props;
    let style;
    if (type === "success") {
        style = { backgroundColor: "#D4EDDA", color: "#155724", border: "1px solid #C3E6CB" }
    } else if (type === "danger") {
        style = { backgroundColor: "#F8D7DA", color: "#721C24", border: "1px solid #F5C6CB" }
    }
    style.width = "100%";
    style.borderRadius = "5px";
    style.padding = "12px 20px";
    style.fontFamily = "Arial";

    return <div style={style}> {message}</div>

}