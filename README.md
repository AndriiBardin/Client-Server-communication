Simple client and server communication apps.

## Getting Started

First, run the server:

npm run server

then

npm run client

Open http://localhost:8081 with your browser to see the result.


## Explanation to the task

SSE communication method was chosen over the others like (web-sockets or polling) since the main task was to establish reliable, self- repearing way of displaying server status. Client gets information from server on request and the information is updated every 5 seconds. If server stops responding - client tries to reconnect.

Found this solution to be better than polling in terms of number of requests sent to the server, and websockets are to unnecessary complex for the task, where only listening to server changes is required.
