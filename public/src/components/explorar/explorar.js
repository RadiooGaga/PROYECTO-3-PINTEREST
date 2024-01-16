
export const explorarButton = (parentDiv, text) => {

    const divExplore = document.createElement("div");
    divExplore.className = "divExplorar";
    const exploreButton = document.createElement("button");
    exploreButton.className = "explorarButton";
    exploreButton.textContent = text;

    parentDiv.appendChild(divExplore);
    divExplore.appendChild(exploreButton);
}