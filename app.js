const createMessage = (msg) => {
    const message = document.createElement("h1");
    message.innerText = msg;

    root.appendChild(message);
}

createMessage("Hello World");