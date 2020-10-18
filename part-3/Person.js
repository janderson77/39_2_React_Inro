const Person = (props) => {
    let dude = {}
    if(props.age >= 18){
        dude.message = "Please go vote!"
    }else{
        dude.message = "You must be 18."
    }
    if(props.name.length > 6){
        dude.name = props.name.substring(0,6)
    }else{
        dude.name = props.name
    }

    return (
        <div>
            <p>Learn some information about this person</p>
            <h3>{dude.name}</h3>
            <h3>{dude.message}</h3>

            <h3>Hobbies</h3>
            <ul>
                {props.hobbies.map(h => <li>{h}</li>)}
            </ul>

        </div>
        
    )
}