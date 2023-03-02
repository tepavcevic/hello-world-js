const createMessage = (msg) => {
const root = document.createElement("div");
root.setAttribute("id", "root");

document.body.appendChild(root);

const message = document.createElement("h1");
message.innerText = msg;

root.appendChild(message)
}

createMessage("Hello World");