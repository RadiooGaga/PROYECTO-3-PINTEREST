

export const crearButton = (parentDiv, text) => {

    const divCreate = document.createElement("div");
    divCreate.className = "divCrear";
    const createButton = document.createElement("button");
    createButton.className = "crearButton";
    createButton.textContent = text;

    parentDiv.appendChild(divCreate);
    divCreate.appendChild(createButton);
}