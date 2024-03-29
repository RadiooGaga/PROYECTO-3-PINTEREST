
import {searchBarSmartphone} from "../smartphoneSearchBar/smartphoneSearchBar.js";

export const createLupita = (parentDiv, sectionPinterestGallery) => {

    const divLupa = document.createElement("div");
    divLupa.className = "divLupa";
    const lupita = document.createElement("img");
    lupita.className = "lupita";
    lupita.src = "./assets/icons/lupa.png";
    
    parentDiv.appendChild(divLupa);
    divLupa.appendChild(lupita);

    lupita.addEventListener('click', (event) => {

        const smartphoneSearchBarContainer = document.getElementById("smartphoneSearchBar");
        smartphoneSearchBarContainer.innerHTML = "";
        searchBarSmartphone(smartphoneSearchBarContainer, sectionPinterestGallery, "Buscar"); 
    })
}

