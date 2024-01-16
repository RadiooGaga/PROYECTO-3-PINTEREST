
export const messagesButton = (parentDiv, img) => {

    const divMessages = document.createElement("div");
    divMessages.className = "divMessages";
    const imgMessage = document.createElement("img");
    imgMessage.src = img;
    imgMessage.className = "messageImg";

    parentDiv.appendChild(divMessages);
    divMessages.appendChild(imgMessage);
}

