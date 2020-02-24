ReactDOM.render(
    <div>
        <Person name="will" age={32} hobbies={["skiing", "drinking"]} />
        <Alert type="success" message="Good Job!" />
        <Alert type="danger" message="You're in danger!" />
    </div>,
    document.getElementById("root")
)
