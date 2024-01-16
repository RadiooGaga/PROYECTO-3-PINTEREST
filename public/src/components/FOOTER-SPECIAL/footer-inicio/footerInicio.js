
export const inicioButtonHouse = (mainGallery) => {
    
    const divHouseReset = document.createElement("div");
    divHouseReset.className = "divHouseReset";
    const house = document.createElement("img");
    house.id = "houseId";
    house.className = "house";
    house.src = "./public/assets/icons/home.svg" ;

    mainGallery.appendChild(divHouseReset);
    mainGallery.insertBefore(divHouseReset, mainGallery.firstChild);
    divHouseReset.appendChild(house);
    
    divHouseReset.addEventListener('click', (event) => {
        window.location.href = mainGallery;
    })
}
