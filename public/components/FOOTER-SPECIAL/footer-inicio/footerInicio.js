import { searchInfo } from "../../busqueda/busqueda.js";

export const inicioButtonHouse = (mainGallery) => {
    
    const divHouseReset = document.createElement("div");
    divHouseReset.className = "divHouseReset";
    const house = document.createElement("img");
    house.id = "houseId";
    house.className = "house";
    house.src = "./assets/icons/home.svg" ;

    mainGallery.appendChild(divHouseReset);
    mainGallery.insertBefore(divHouseReset, mainGallery.firstChild);
    divHouseReset.appendChild(house);

    divHouseReset.addEventListener('touchstart', (event) => {
        const gallery = document.getElementById("mainGalleryId");
        gallery.innerHTML = "";
        searchInfo("random", gallery);
    })
}
