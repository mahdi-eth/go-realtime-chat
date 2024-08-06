package websocket

import "fmt"

type Pool struct {
	Register   chan *Client
	Unregister chan *Client
	Clients    map[*Client]bool
	Broadcast  chan MessageWithSender
}

type MessageWithSender struct {
	SenderID int
	Message  Message
}

func NewPool() *Pool {
	return &Pool{
		Register:   make(chan *Client),
		Unregister: make(chan *Client),
		Clients:    make(map[*Client]bool),
		Broadcast:  make(chan MessageWithSender),
	}
}

func (pool *Pool) Start() {
	for {
		select {
		case registeredClient := <-pool.Register:
			pool.Clients[registeredClient] = true
			for client := range pool.Clients {
				if client.ID != registeredClient.ID {
					client.Conn.WriteJSON(Message{Type: 1, Body: "New User Joined..."})
				}
			}
		case client := <-pool.Unregister:
			delete(pool.Clients, client)
			for client := range pool.Clients {
				client.Conn.WriteJSON(Message{Type: 1, Body: "User Disconnected..."})
			}
		case message := <-pool.Broadcast:
			for client := range pool.Clients {
				if err := client.Conn.WriteJSON(message.Message); err != nil {
					fmt.Println(err)
					return

				}
			}
		}
	}
}
