import './App.css';
import React, { Component, component } from 'react';
import Validation from './Validation/Validation'
import Char from './Char/Char'


class App extends Component {
    
    state = {
        usserInput: ''
    }

    inputChangedHandler = (event) => {
        this.setState({usserInput: event.target.value});
    }

    deleteCharHandler = (index) => {
        const text = this.state.usserInput.split(''); //get array of string
        text.splice(index, 1); //remove char by index,and how many char will be removed
        const updateText = text.join('');
        this.setState({usserInput: updateText});
    }

    render() {
        const charList = this.state.usserInput.split('').map((ch, index) => {
            return <Char 
                character={ch} 
                key={index}
                clicked={() => this.deleteCharHandler(index)}/>
        });

        return (
            <div className="App">
                <h1>Hei</h1>
                <input type="text" 
                    onChange={this.inputChangedHandler}
                    value={this.state.usserInput}
                />
                <p>this is what you type: {this.state.usserInput}</p>
                <p>Length Chars:{this.state.usserInput.length}</p>
                <Validation inputLength = {this.state.usserInput.length} />
                {charList}
            </div>
        )
    }
}

export default App;