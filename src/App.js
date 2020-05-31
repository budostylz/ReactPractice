import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Textbox from './Textbox'
import SendButton from './SendButton'

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/




class App extends Component {
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  
  state = {  
    users: [{ username: 'Amy' }, { username: 'John' }],
    messages: [
                { username: 'Amy', text: 'Hi, Jon!' },
                { username: 'Amy', text: 'How are you?' },
                { username: 'John', text: 'Hi, Amy! Good, you?' }
			  ]
  }
  
  isDisabled = () => {
    return true;
  };

  appendMessage = (message) => {
    //observe state
    //this.setState(currentState => (console.log([...currentState.messages])))
    
    this.setState(currentState => ({
    	messages:[...currentState.messages, message]
    
    }))
    
  }

  render() {
    //console.log('state', this.state)
	const { users, messages } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
    
    
        <div className="container">
          <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{users[0].username}</div>

            <ul className="message-list">
              {messages.map((message, index) => (
                
               
                <li
                  key={index}
                  className={
                    message.username === users[0].username ? 'message sender' : 'message recipient'
                  }
                >
                  <p>{`${message.username}: ${message.text}`}</p>
                </li>
              ))}
            </ul>

            <div>
              <form className="input-group">
                <Textbox
					owner={users[0].username}
					isDisabled={this.isDisabled}
				/>
                <div className="input-group-append">
                  <SendButton 
					owner={users[0].username}
					disableButton={this.isDisabled}
					appendMessage={this.appendMessage}
					/>
                </div>
              </form>
            </div>
          </div>

          <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{users[1].username}</div>
            <ul className="message-list">
              {messages.map((message, index) => (
                <li
                  key={index}
                  className={
                    message.username === users[1].username ? 'message sender' : 'message recipient'
                  }
                >
                  <p>{`${message.username}: ${message.text}`}</p>
                </li>
              ))}
            </ul>

            <div>
              <form className="input-group">
                 <Textbox
					owner={users[1].username}
					isDisabled={this.isDisabled}
				 />
                <div className="input-group-append">
					<SendButton 
						owner={users[1].username}
						disableButton={this.isDisabled}
						appendMessage={this.appendMessage}

					/>
                 
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
