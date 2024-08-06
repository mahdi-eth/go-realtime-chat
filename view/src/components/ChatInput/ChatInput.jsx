import React, { Component } from "react";
import "./ChatInput.scss";

class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
  }

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleKeyDown = (e) => {
    if (e.key === "Enter") {
      this.props.send(this.state.inputValue);
      this.setState({ inputValue: "" });
    }
  };

  render() {
    return (
      <div className="ChatInput">
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          onKeyDown={this.handleKeyDown}
        />
      </div>
    );
  }
}

export default ChatInput;
