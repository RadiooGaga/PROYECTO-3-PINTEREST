import "./style.css";

import { reset } from "./public/components/inicio/inicio.js";
import { explorarButton } from "./public/components/explorar/explorar.js";
import { crearButton } from "./public/components/crear/crear.js";
import { searchBar, searchInfo } from "./public/components/busqueda/busqueda.js";
import { userButton } from "./public/components/user/user.js";
import { accountButton } from "./public/components/account/account.js";
import { inicioButtonHouse } from "./public/components/FOOTER-SPECIAL/footer-inicio/footerInicio.js";
import { createLupita } from "./public/components/FOOTER-SPECIAL/footer-lupa/footer-lupa.js";
import { messagesButton } from "./public/components/FOOTER-SPECIAL/footer-messages/footer-messages.js";
import { notificationsButton } from "./public/components/FOOTER-SPECIAL/footer-notifications/footer-notifications.js";


//header
const header = document.querySelector("header");
const sectionHeader = document.querySelector("#pinterestHeader");
const divLogo = document.createElement("div");
divLogo.className = "divLogo";
const imgLogo = document.createElement("img");
imgLogo.className = "picLogo";
imgLogo.src = "./assets/logos/pinterest-logo.jpeg";
sectionHeader.appendChild(divLogo);
divLogo.appendChild(imgLogo);

const smartphoneBarSection = document.querySelector("#smartphoneSearchBar");
header.appendChild(sectionHeader);
header.appendChild(smartphoneBarSection);

//Galeria
const sectionPinterestGallery = document.querySelector("#pinterestGallery");
const mainGallery = document.createElement("div");
mainGallery.id = "mainGalleryId"
mainGallery.className = "mainGallery";
sectionPinterestGallery.appendChild(mainGallery);


//Footer
const sectionFooter = document.querySelector("#pinterestFooter");
const sectionIndexNames = document.querySelector(".indexNames");
const divIndexNames = document.createElement("div");




//div bandeja entrada smartphone
const divMessages = document.createElement("div");
divMessages.className = "divMessages";
const imgMessage = document.createElement("img");
imgMessage.className = "messageImg";
imgMessage.src = "./assets/icons/messageIcon.svg";

//div usuario smartphone
const divUser = document.createElement("div");
divUser.className = "divUser";
const imgUser = document.createElement("img");
imgUser.className = "imgUser";
imgUser.src = "./assets/icons/userIcon.svg";


reset(sectionHeader, mainGallery);
explorarButton(sectionHeader, "Explorar");
crearButton(sectionHeader, "Crear");
searchBar(sectionHeader, mainGallery,"Buscar");
searchInfo("random", mainGallery);
createLupita(sectionFooter, mainGallery);
notificationsButton(sectionHeader,"./assets/icons/bellIcon.svg");
messagesButton(sectionHeader, "./assets/icons/messageIcon.svg");
userButton(sectionHeader, "./assets/icons/userIcon.svg");
accountButton(sectionHeader, "./assets/icons/flecha-hacia-abajo.png");
inicioButtonHouse(sectionFooter, mainGallery, "./assets/icons/home.svg");


sectionFooter.appendChild(divMessages);
divMessages.appendChild(imgMessage);
sectionFooter.appendChild(divUser);
divUser.appendChild(imgUser);
sectionIndexNames.appendChild(divIndexNames);


















