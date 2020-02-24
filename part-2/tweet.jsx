function Tweet(props) {
    const { username, name, date, message } = props;
    return (
        <div>
            <div>
                {name} @{username} {date}
            </div>
            <div> {message}</div>
        </div>
    )
}