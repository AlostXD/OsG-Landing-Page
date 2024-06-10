const sidebar = document.getElementById("mySidebar");
const sidebarBtn = document.getElementById("sideButton");
const sideOpen = document.getElementById("openSide");

function openSide(){
    sidebar.style.display = 'flex';
}

function closeSide(){
    sidebar.style.display = 'none';
}



// Lista de Patrocinadores

let patrocinadores = [{
    nome: 'Host Havoc',
    img: 'img/image1.png',
    btn: 'https://hosthavoc.com',
},
{
    nome: 'Overclock',
    img: 'img/image2.png',
    btn: 'https://bebaoverclock.com.br',
},
{
    nome: 'Nerd or Die',
    img: 'img/image3.png',
    btn: 'https://nerdordie.com/shop/ref/osguerreiros/',
},
{
    nome: 'Creators by Husky',
    img: 'img/image4.png',
    btn: 'https://app.husky.io/onboarding/profile-type?ref=d0f98ae2-dc0d-4615-819a-29201c361ba6',
},
{
    nome: 'Dogmil Kettymil',
    img: 'img/image5.png',
    btn: 'https://imbramil.com.br/',
}]
let patron = document.getElementById("patron");


patrocinadores.forEach(element => {
    let patreonItem = document.createElement("li");
    patreonItem.innerHTML = `<a class="patreon-item" href="${element.btn}" target="_blanket">
    <img src="${element.img}" alt="${element.nome}">
    <h2>${element.nome}</h2>
    </a>`;
    patron.appendChild(patreonItem);
});

//Modal

const button = document.querySelector("button");
const modal = document.querySelector("dialog");
const buttonClose = document.querySelector("dialog button");

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.showModal();
    } else {
        console.error('Modal não encontrado:', modalId);
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.close();
    } else {
        console.error('Modal não encontrado:', modalId);
    }
}

// Lista de Membros da equipe

let equipe = [{
    nome: 'Bruno "BFshow" Felipe',
    img: 'img/BF.webp',
    cargo: 'CEO',
    modalID: 'modal7'
},
{
    nome: 'Luciano "Cubano" Pavan',
    img: 'img/Cubano.webp',
    cargo: 'CTO',
    modalID: 'modal8'
},
{
    nome: 'Vanderlei "Alost" Junio',
    img: 'img/Alost.webp',
    cargo: 'CCO',
    modalID: 'modal9'
}]

let headstaffs = document.getElementById("headstaff");


equipe.forEach(element => {
    let hstaffmember = document.createElement("li");
    hstaffmember.innerHTML = `
    <a class="equipe-card-item" onclick="openModal('${element.modalID}')">
    <img src="${element.img}" alt="${element.nome}">
    <h2>${element.nome}</h2>
    <p>${element.cargo}</p>
    </a>
    `;
    headstaffs.appendChild(hstaffmember);
});