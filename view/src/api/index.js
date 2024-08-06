// api.js or equivalent file
let socket;

// Function to initialize the WebSocket connection
export const connect = (cb) => {
  console.log("connecting");

  // Ensure the WebSocket is only created once and is assigned
  socket = new WebSocket("ws://localhost:8080/ws"); // Replace with your WebSocket URL

  socket.onopen = () => {
    console.log("Successfully Connected");
  };

  socket.onmessage = (msg) => {
    console.log("Received message: ", msg);
    cb(msg); // Call the callback with the message
  };

  socket.onclose = (event) => {
    console.log("Socket Closed Connection: ", event);
  };

  socket.onerror = (error) => {
    console.log("Socket Error: ", error);
  };
};

// Function to send a message over the WebSocket
export const sendMsg = (msg) => {
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.send(msg);
    console.log("Message sent: ", msg);
  } else {
    console.log("WebSocket not connected or not open");
  }
};
