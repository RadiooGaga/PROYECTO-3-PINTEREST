import { searchInfo } from "../busqueda/busqueda.js";

export const reset = (mainGallery) => {

    const divReset = document.createElement("div");
    divReset.className = "divInicio";
    const resetButton = document.createElement("button");
    resetButton.className = "inicioButton";
    resetButton.textContent = "Inicio";

    mainGallery.appendChild(divReset);
    divReset.appendChild(resetButton);
    
    resetButton.addEventListener('click', (event) => {
        const gallery = document.getElementById("pinterestGallery");
        gallery.innerHTML = "";
        searchInfo("random", gallery);
    })

}


