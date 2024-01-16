import "./smartphoneSearchBar.css";
import {searchInfo} from "../../busqueda/busqueda.js";

export const searchBarSmartphone = (parentDiv, mainGallery, text) => {

    const smartphoneBarDiv = document.createElement("div");
    smartphoneBarDiv.className = "divSearchSmartphone";
    const inputSearch = document.createElement("input");
    inputSearch.type = "search";
    inputSearch.className = "phoneClassSearchPlaceholder";
    inputSearch.id = "phoneSearchPlaceholderId";
    inputSearch.placeholder = text;
    
    parentDiv.appendChild(smartphoneBarDiv);
    smartphoneBarDiv.appendChild(inputSearch); 
    
    inputSearch.addEventListener('keydown', (event) => {
    
        if (event.key === "Enter" && event.type === 'keydown') {
        const inputData = document.getElementById("phoneSearchPlaceholderId").value;
        mainGallery.innerHTML = "";
        parentDiv.innerHTML = "";
        searchInfo(inputData, mainGallery);
        }
    }) 
}
