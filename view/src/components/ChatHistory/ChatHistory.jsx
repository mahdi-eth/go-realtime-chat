// ChatHistory.js
import React, { Component } from "react";
import Message from "../Message/Message";
import "./ChatHistory.scss";

class ChatHistory extends Component {
  render() {
    const messages = this.props.chatHistory.map((msg, _) => (
      <Message message={msg.data} />
    ));

    return (
      <div className="ChatHistory">
        <h2>Chat History</h2>
        {messages}
      </div>
    );
  }
}

export default ChatHistory;
