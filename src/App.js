import './App.css';
import React, { Component, component } from 'react';
import Person from './Person/Person';
import styled from 'styled-components';
// import UserInput from './UserInput/UserInput'
// import UserOutput from './UserOutput/userOutput'


//will return react component.
//with styled-component we can define css with regular css syntax
const StyledButton = styled.button`
  background-color: green;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: lightgreen;
    color: black
  }
`;

class App extends Component {
  state = {
    persons: [
      { id: 'A1', name: "Alfan", age: 7 },
      { id: 'A2', name: "Zahriyono", age: 17 },
      { id: 'A3', name: "Tampan", age: 27 },
    ],
    showPersons: false
  }

  //pasing function with argument
  // switchHandler = (newName) => {
  //   this.setState({
  //     person: [
  //       { name: newName, age: 12 },
  //       { name: newName, age: 12 },
  //       { name: "Tmap Tamp", age: 12 },
  //     ]
  //   })
  // }

  //old way
  // nameChangedHandler = (event) => {
  //   this.setState({
  //     person: [
  //       { name: 'Tatan', age: 13 },
  //       { name: event.target.value, age: 13 },
  //       { name: "Tmap Tamp", age: 13 },
  //     ]
  //   })
  // }

  //elegant way
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id == id
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  //to show or hide person list
  togglePersonHandle = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  deletePersonHandler = (personIdx) => {
    //const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIdx, 1);
    this.setState({ persons: persons });
  }



  render() {
    //NOTE: There are two ways for syling in React 1. with CSS File. 2.With inline style
    //this sample for inline styles 
    const sampleInlineStyle = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((p, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={p.name}
              age={p.age}
              key={p.id}
              changed={(event) => this.nameChangedHandler(event, p.id)}
            />
          })}
        </div>
      );
      sampleInlineStyle.backgroundColor = 'red'
      sampleInlineStyle[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold') //it will be ['red', 'bold']
    }

    return (
      <div className="App">
        <h1>This is React APP for expert developer</h1>
        <p className={classes.join(' ')}>This is only for React JS expert, min 1 day experience</p>
        {/* <button
          style={sampleInlineStyle} 
          onClick={this.switchHandler.bind(this, 'You are awesome')}>Switch</button> */}

        <StyledButton onClick={this.togglePersonHandle}>
          Switch
        </StyledButton>
        {persons}
      </div>
    )
  }
}

// class App extends Component {

//   state = {
//     username: 'Master of React JS in The WORLD',
//     userage: 19
//   }

//   //event handler
//   usernameChangedHandler = (event) =>{
//     this.setState({username: event.target.value})
//   }

//   render(){
//     return (
//       <div className="App">
//         <UserInput 
//           changed={this.usernameChangedHandler} 
//           currentUserName = {this.state.username} />
//         <UserOutput userName={this.state.username} age={this.state.userage} />
//         <UserOutput userName={this.state.username} age={this.state.userage} />
//         <UserOutput userName="Zahriyono" age="20" />
//       </div>
//     )
//   }
// }

export default App;
