
export const userButton = (parentDiv, img) => {

    const divUser = document.createElement("div");
    divUser.className = "divUserProfile";
    const imgProfile = document.createElement("img");
    imgProfile.src = img;
    imgProfile.className = "imgUser";

    parentDiv.appendChild(divUser);
    divUser.appendChild(imgProfile);
}