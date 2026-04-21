const messages = document.getElementById("messages");
const inputMsg = document.getElementById("message");
const sendBtn = document.getElementById("send");

function sendMsgToChat(text) {
    const msgDiv = document.createElement("div");
    msgDiv.textContent = text;
    messages.appendChild(msgDiv);
    messages.scrollTop = messages.scrollHeight;
}

const socket = new WebSocket("ws://localhost:8080");

socket.onopen = () => {
    sendMsgToChat("Connected to server");
};

socket.onmessage = (event) => {
    sendMsgToChat(`Message from server: ${event.data}`);
};

socket.onerror = (error) => {
    console.error(`WebSocket error: ${error}`);
};

sendBtn.onclick = () => {
    const text = inputMsg.value;
    if (text) {
        socket.send(text);
        sendMsgToChat(`Me: ${text}`);
        inputMsg.value = "";
    }
};
