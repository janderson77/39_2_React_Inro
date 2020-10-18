const App = () =>{
    return(
        <div>
            <Tweet username="jdude" name="James" date="08/19/2019" tweet="Man, 2020 is going to be my year!"/>
            <Tweet username="jdude" name="James" date="11/21/2019" tweet="Another year older, and still looking forward to 2020!"/>
            <Tweet username="jdude" name="James" date="04/05/2020" tweet="Wow... This is not going as expected..."/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))