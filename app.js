const createMessage = (msg) => {
const root = document.getElementById("root");

const message = document.createElement("h1");
message.innerText = msg;

root.appendChild(message)
}

createMessage("Hello World");