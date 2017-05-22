import React from 'react';

class App extends React.Component {
    sayHey() {
        alert("hey");
    }

    render(){
        let text="Dev-Server"
        return (
            <div>
                <h1>Hello Trander</h1>
                <h2>Welcome to {text}</h2>
                <button onClick={this.sayHey}>Click Me</button>
            </div>
        );
    }
}

export default App;
