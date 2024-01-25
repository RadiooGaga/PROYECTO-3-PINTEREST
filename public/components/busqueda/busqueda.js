import "./busqueda.css";
import { pinCard } from "../pinCard/pinCard.js";


export const searchBar = (parentDiv, sectionPinterestGallery, text ) => {

    const divSearchContainer = document.createElement("div");
    divSearchContainer.className = "divSearch";
    const inputSearch = document.createElement("input");
    inputSearch.type = "search";
    inputSearch.className = "searchPlaceholder";
    inputSearch.id = "searchPlaceholderId";
    inputSearch.placeholder = text;
    

    parentDiv.appendChild(divSearchContainer);
    divSearchContainer.appendChild(inputSearch); 

    inputSearch.addEventListener('keydown', (event) => {
        
    if (event.key === 'Enter' && event.type === 'keydown') {
        const inputData = document.getElementById("searchPlaceholderId").value;
        sectionPinterestGallery.innerHTML = "";
        searchInfo(inputData, sectionPinterestGallery);
        }
    })
}



export const searchInfo = (searchData, sectionPinterestGallery) => {
  
    let unsplashId = "74vRF6e1l9a6WTlt7b7Nh9VT5zqNeqK-APQEnqePUHo";
    let url =  `https://api.unsplash.com/search/photos?query=${searchData}&per_page=50&client_id=${unsplashId}`;

    if (searchData.trim() !== '') {
       
        fetch(url)
        .then(response => response.json())
        .then(jsonData => {
            let pages = jsonData.total_pages;

            if(pages > 5) {
                pages = 5
            } 

            if (pages === 0) {
                const noPics = document.createElement("div");
                noPics.id = "noPicsAvailableId";
                sectionPinterestGallery.appendChild(noPics)
                noPics.innerHTML = "NO HAY FOTOS QUE COINCIDAN CON SU BÚSQUEDA";
            } else 

            {
                const mainGallery = document.createElement("div");
                mainGallery.id = "mainGalleryId";
                sectionPinterestGallery.appendChild(mainGallery);

                for (let page = 1; page <= pages; page++) {
                    fetch(`${url}&page=${page}`)
                        .then(response2 => response2.json())
                        .then(jsonData2 => {
                        for (let i = 0; i < jsonData2.results.length; i++) {
                                
                            pinCard(mainGallery, jsonData2.results[i].urls.small);   
                        }
                    })    
                }
            }
        })
        .catch(error => {
            console.error('Error en la búsqueda:', error);
        });
    } 

};




