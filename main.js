import "./style.css";

import { reset } from "./src/components/inicio/inicio.js";
import { explorarButton } from "./src/components/explorar/explorar.js";
import { crearButton } from "./src/components/crear/crear.js";
import { searchBar, searchInfo } from "./src/components/busqueda/busqueda.js";
import { userButton } from "./src/components/user/user.js";
import { accountButton } from "./src/components/account/account.js";
import { inicioButtonHouse } from "./src/components/FOOTER-SPECIAL/footer-inicio/footerInicio.js";
import { createLupita } from "./src/components/FOOTER-SPECIAL/footer-lupa/footer-lupa.js";
import { messagesButton } from "./src/components/FOOTER-SPECIAL/footer-messages/footer-messages.js";
import { notificationsButton } from "./src/components/FOOTER-SPECIAL/footer-notifications/footer-notifications.js";


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
const sectionPinterestGallery = document.getElementById("pinterestGallery");




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


reset(sectionHeader, sectionPinterestGallery);
explorarButton(sectionHeader, "Explorar");
crearButton(sectionHeader, "Crear");
searchBar(sectionHeader, sectionPinterestGallery,"Buscar");
searchInfo("random", sectionPinterestGallery);
createLupita(sectionFooter, sectionPinterestGallery,);
notificationsButton(sectionHeader,"./assets/icons/bellIcon.svg");
messagesButton(sectionHeader, "./assets/icons/messageIcon.svg");
userButton(sectionHeader, "./assets/icons/userIcon.svg");
accountButton(sectionHeader, "./assets/icons/flecha-hacia-abajo.png");
inicioButtonHouse(sectionFooter, sectionPinterestGallery, "./assets/icons/home.svg");



sectionFooter.appendChild(divMessages);
divMessages.appendChild(imgMessage);
sectionFooter.appendChild(divUser);
divUser.appendChild(imgUser);
sectionIndexNames.appendChild(divIndexNames);


















