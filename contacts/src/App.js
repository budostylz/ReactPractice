import logo from './logo.svg';
import './App.css';
import React from 'react';


class ContactList extends React.Component {
  render() {
    const people = this.props.contacts

    return <ol>
      {people.map((person) => (
        <li key={person.name}>{person.name}</li>
      ))}
    </ol>
  }



}

function App() {
  return (
    <div className="App">
      <ContactList contacts={
        [
          { name: 'Tyler' },
          { name: 'Karen' },
          { name: 'Richard' }
        ]} />
      <ContactList contacts={[
        { name: 'Amanda' },
        { name: 'Mikenzi' },
        { name: 'Ryan' }
      ]} />

    </div>
  );
}

export default App;
