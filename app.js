const createMessage = (msg) => {
    const message = document.createElement("h1");
    message.innerText = msg;

    document.body.appendChild(message);
}

createMessage("Hello World");