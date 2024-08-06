# Live Chat App

This project is a real-time chat application built with a React frontend and a Go backend. The backend is containerized using Docker, and the app utilizes WebSockets to enable multiple users to chat concurrently in real-time.

## Architecture Overview

- **Frontend:** The frontend is built using React, providing a dynamic and interactive user interface. Users can send and receive messages in real-time through the chat interface.
- **Backend:** The backend is developed in Go and serves as the WebSocket server, handling connections and broadcasting messages to all connected clients.
- **WebSockets:** WebSockets are used for full-duplex communication channels over a single TCP connection, allowing for low-latency, real-time interaction between the frontend and backend.

## Features

- **Real-time Messaging:** Users can send and receive messages instantly, with all participants in the chat seeing updates in real-time.
- **Concurrent Connections:** The application supports multiple users chatting simultaneously.
- **Dockerized Backend:** The backend is containerized using Docker, ensuring easy deployment and scalability.

## How It Works

1. **Establishing Connection:**
   - When the frontend is loaded, it establishes a WebSocket connection to the backend server.

2. **Sending Messages:**
   - Users can type messages into the chat input field and press Enter to send them.
   - The frontend sends these messages through the WebSocket connection to the backend.

3. **Broadcasting Messages:**
   - The backend receives incoming messages and broadcasts them to all connected clients, excluding the sender.
   - This ensures that all users see messages from others in real-time.

4. **Receiving Messages:**
   - The frontend listens for messages from the backend and updates the chat history, displaying new messages as they arrive.


## Prerequisites

- [Docker](https://www.docker.com/get-started) installed on your machine.
- [GNU Make](https://www.gnu.org/software/make/) installed on your machine.
- [Node.js](https://nodejs.org/) and npm installed on your machine.

## Makefile Usage

The `Makefile` in this project automates the process of building and running your chat application. Below are the available commands:

## Run the application

- **Build the backend container.**
  ```bash
  make build-backend
  ```

- **Run the backend container.**
  ```bash
  make run-backend
  ```

- **Run the frontend.**
  ```bash
    make run-frontend
  ```

## Testing the Application


1. **Open Multiple Frontend Instances:**
   - Open a web browser and navigate to `http://localhost:3000` to access the chat interface.
   - Open additional tabs or separate browser windows and enter the same URL (`http://localhost:3000`).

2. **Simulate Chatting:**
   - In any instance, type a message in the chat input field and press Enter to send it.
   - Observe that the message appears in real-time across all open instances, confirming that messages are broadcasted correctly to all connected users.

