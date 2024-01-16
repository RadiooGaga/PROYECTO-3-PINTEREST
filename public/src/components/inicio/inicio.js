
export const reset = (mainGallery) => {

    const divReset = document.createElement("div");
    divReset.className = "divInicio";
    const resetButton = document.createElement("button");
    resetButton.className = "inicioButton";
    resetButton.textContent = "Inicio";

    mainGallery.appendChild(divReset);
    divReset.appendChild(resetButton);
    
    resetButton.addEventListener('click', (event) => {
        window.location.href = mainGallery;
    })

}

