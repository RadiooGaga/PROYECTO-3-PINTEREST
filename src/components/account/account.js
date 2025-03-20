
export const accountButton = (parentDiv, img) => {

    const divAccountAndOptions = document.createElement("div");
    divAccountAndOptions.className = "divAccount";
    const imgAccount = document.createElement("img");
    imgAccount.src = img;
    imgAccount.className = "imgAccount";

    parentDiv.appendChild(divAccountAndOptions);
    divAccountAndOptions.appendChild(imgAccount);
}