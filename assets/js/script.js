const photography = document.getElementById("photography")
const webDesign = document.getElementById("webDesign");
const photoshop = document.getElementById("photoshop");
const goTop = document.getElementById("goTop");
let defil

const imgElements = document.querySelectorAll(".cards img");
//console.dir(imgElements);
const imgFull = [];
const frameImg = document.createElement("div");
frameImg.style.width = "100vw";
frameImg.style.height = "100vh";
frameImg.style.backdropFilter = "blur(7px)";
frameImg.style.display = "none";
frameImg.style.justifyContent = "center";
frameImg.style.alignItems = "center";
frameImg.style.position = "fixed";
frameImg.style.zIndex = 1;


//console.dir(document);
window.addEventListener(
    "scroll",
    () => {
        //console.log(document.scrollTop | document.scrollingElement.scrollTop | window.scrollY);
        defil = document.scrollTop || document.scrollingElement.scrollTop || window.scrollY;
        if (defil >= 400) {
            photography.style.opacity = 1;
            photography.style.width = "90%";
        }
        if (defil >= 500) {
            webDesign.style.opacity = 1;
            webDesign.style.width = "85%";
        }
        if (defil >= 600) {
            photoshop.style.opacity = 1;
            photoshop.style.width = "75%";
        }
        if (defil >= 1400 || defil < 400) {
            photography.style.opacity = 0;
            photography.style.width = "0%";
        }
        if (defil >= 1500 || defil < 500) {
            webDesign.style.opacity = 0;
            webDesign.style.width = "0%";
        }
        if (defil >= 1600 || defil < 600) {
            photoshop.style.opacity = 0;
            photoshop.style.width = "0%";
        }
    }
)

document.body.prepend(frameImg);
let i = 0;
while (i < imgElements.length) {
    let n = i;
    imgElements[i].addEventListener(
        "click",
        () => {
            frameImg.style.display = "flex";
            imgFull[n] = document.createElement("img");
            imgFull[n].src = imgElements[n].src;
            frameImg.append(imgFull[n]);
        }
    )
    i++;
}
frameImg.addEventListener(
    "click",
    (event) => {
        if (!frameImg.querySelector("img").contains(event.target)) {
            frameImg.style.display = "none";
            frameImg.innerHTML = "";
        }
    }
)

goTop.addEventListener(
    "click",
    (event) => {
        document.documentElement.scrollTop = 0;
    }
)

function openModal(project) {
    const modal = document.getElementById('modal');
    const modalDetails = document.getElementById('modal-details');

    // Mise à jour du contenu en fonction du projet
    if (project === 'forum') {
        modalDetails.innerHTML = `
            <h3>Forum Web</h3>
            <p>Ce projet consiste en la création d'un forum avec authentification, gestion des posts, des commentaires et des filtres de contenu. Il utilise Go pour le backend, SQLite pour la base de données et Docker pour le déploiement.</p>
            <a href="https://ton-site.com/forum" class="btn">Voir la démo</a>
        `;
    } else if (project === 'reseau-social') {
        modalDetails.innerHTML = `
            <h3>Réseau Social</h3>
            <p>Un réseau social avec profils, posts, groupes, chat en temps réel et notifications. Les utilisateurs peuvent se suivre et interagir dans des groupes privés ou publics. Le backend est en Go et la communication en temps réel se fait avec WebSockets.</p>
            <a href="https://ton-site.com/reseau-social" class="btn">Voir la démo</a>
        `;
    } else if (project === 'smart-road') {
        modalDetails.innerHTML = `
            <h3>Smart Road</h3>
            <p>Un projet utilisant Rust pour gérer la circulation intelligente avec des véhicules autonomes qui communiquent entre eux pour éviter les collisions et améliorer la fluidité du trafic.</p>
            <a href="https://ton-site.com/smart-road" class="btn">Voir la démo</a>
        `;
    }

    modal.style.display = "block"; // Afficher le modal
}

function closeModal() {
    document.getElementById('modal').style.display = "none"; // Fermer le modal
}

let media = [
    { type: "video", src: "assets/video/Forum.mp4" },
    { type: "image", src: "assets/images/forum1.jpg" },
    { type: "image", src: "assets/images/forum2.jpg" },
    { type: "image", src: "assets/images/forum3.jpg" }
];

let mediaIndex = 0;  // Indice de l'image ou vidéo actuelle

// Tableau contenant les médias
const mediaArray = [
    { type: 'image', src: 'assets/img/Forum_Register.png' },
    { type: 'image', src: 'assets/img/Forum_Blog.png' },
    { type: 'image', src: 'assets/img/Forum_Profil.png' },
    { type: 'image', src: 'assets/img/Forum_Modify_Profil.png' },
    { type: 'image', src: 'assets/img/Forum_About.png' },
    { type: 'image', src: 'assets/img/Forum_Historique_Commentaire.png' }
];

// Fonction pour ouvrir la lightbox
function openLightbox(index) {
    mediaIndex = index;
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxVideo = document.getElementById("lightbox-video");

    // Afficher l'image en grande taille
    if (mediaArray[mediaIndex].type === 'video') {
        lightboxImg.style.display = 'none';
        lightboxVideo.style.display = 'block';
        lightboxVideo.src = mediaArray[mediaIndex].src;
        lightboxVideo.play();
    } else {
        lightboxImg.style.display = 'block';
        lightboxVideo.style.display = 'none';
        lightboxImg.src = mediaArray[mediaIndex].src;
    }

    // Ouvrir la lightbox
    lightbox.style.display = 'flex';
}

// Fonction pour fermer la lightbox
function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxVideo = document.getElementById("lightbox-video");

    lightbox.style.display = 'none';
    lightboxImg.src = "";
    lightboxVideo.src = "";
    lightboxVideo.pause();
}

// Fonction pour changer les médias dans la lightbox
function changeMedia(direction) {
    mediaIndex += direction;
    if (mediaIndex < 0) mediaIndex = mediaArray.length - 1;
    if (mediaIndex >= mediaArray.length) mediaIndex = 0;
    openLightbox(mediaIndex);
}

// Fonction pour gérer le clic sur les images de la galerie
document.querySelectorAll('.gallery img').forEach((image, index) => {
    image.addEventListener('click', () => {
        openLightbox(index);
    });
});

// Ferme la lightbox lorsqu'on clique en dehors de l'image
document.getElementById("lightbox").addEventListener('click', (e) => {
    if (e.target === document.getElementById("lightbox")) {
        closeLightbox();
    }
});


// Ouvrir la lightbox pour une vidéo
function openLightbox(index) {
    const lightbox = document.getElementById("lightbox");
    const lightboxVideo = document.getElementById("lightbox-video");

    if (index === 0) {
        lightboxVideo.src = "assets/video/Forum.mp4";
        lightbox.style.display = "flex";
        lightboxVideo.play();
    }
}

// Fermer la lightbox
function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    const lightboxVideo = document.getElementById("lightbox-video");

    lightbox.style.display = "none";
    lightboxVideo.src = ""; // Arrêter la vidéo
    lightboxVideo.pause();
}

// Ouvrir le popup pour les images
function openImagePopup(imageElement) {
    const popup = document.getElementById("image-popup");
    const popupImage = document.getElementById("popup-image");

    popupImage.src = imageElement.src;
    popup.style.display = "flex";
}

// Fermer le popup de l'image
function closeImagePopup() {
    const popup = document.getElementById("image-popup");
    popup.style.display = "none";
}

