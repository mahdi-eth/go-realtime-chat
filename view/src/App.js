// App.js
import React, { Component } from "react";
import "./App.css";
import { sendMsg, connect } from "./api"; // Ensure connect is imported
import Header from "./components/Header/Header";
import ChatHistory from "./components/ChatHistory/ChatHistory";
import ChatInput from "./components/ChatInput/ChatInput";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatHistory: [],
    };

    this.send = this.send.bind(this);
  }

  componentDidMount() {
    if (!this.connectionEstablished) {
      connect((msg) => {
        console.log("New Message");
        this.setState((prevState) => ({
          chatHistory: [...prevState.chatHistory, msg],
        }));
        console.log("Updated state: ", this.state);
      });
      this.connectionEstablished = true;
    }
  }
  
  send(msg) {
    sendMsg(msg);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ChatHistory chatHistory={this.state.chatHistory} />
        <ChatInput send={this.send} />
      </div>
    );
  }
}

export default App;
