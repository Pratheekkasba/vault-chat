document.getElementById('sendMessage').addEventListener('click', function () {
    const message = document.getElementById('messageField').value.trim();
    if (message) {
        socket.emit('message', { username, message });
        document.getElementById('messageField').value = '';
    }
});

socket.on('message', function (data) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('p');
    messageElement.innerHTML = `<strong>${data.username}:</strong> ${data.message}`;
    chatBox.appendChild(messageElement);
});
