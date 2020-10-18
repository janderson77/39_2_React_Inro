const App = () =>{
    return(
        <div>
            <Person name="Bob Ross" age={42} hobbies={['Painting', 'Caring for orphaned animals', 'Being kind']}/>
            <Person name="James Anderson" age={33} hobbies={['Gaming', 'Drawing', 'Coding']}/>
            <Person name="Chai" age={14} hobbies={['Sleeping', 'Eating', 'Whining']}/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))