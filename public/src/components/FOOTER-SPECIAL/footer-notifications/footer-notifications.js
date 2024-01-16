
export const notificationsButton = (parentDiv, img) => {

    const divNotifications = document.createElement("div");
    divNotifications.className = "divBell";
    const imgBell = document.createElement("img");
    imgBell.src = img;
    imgBell.className = "bell";

    parentDiv.appendChild(divNotifications);
    divNotifications.appendChild(imgBell);

}