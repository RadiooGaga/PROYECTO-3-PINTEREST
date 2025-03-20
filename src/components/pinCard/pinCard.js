import "./pinCard.css";

export const pinCard = (parentDiv, img) => {
    
    const pinterestCard = document.createElement("div");
    pinterestCard.className = "pinterestCard";
    const imgCard = document.createElement("img");
    imgCard.className = "pin";
    imgCard.src = img;
    
    parentDiv.appendChild(pinterestCard)
    pinterestCard.appendChild(imgCard);
    
    
    const keepButton = document.createElement("button");

    pinterestCard.addEventListener("mouseover", (event) => {
        keepButton.className = "keepButton";
        keepButton.id = "idKeepButton";
        keepButton.textContent= "Guardar";
        pinterestCard.appendChild(keepButton);
    });

    pinterestCard.addEventListener("mouseleave", (event) =>{
        const idKeep = document.getElementById("idKeepButton");
        idKeep.remove();
    })

}




