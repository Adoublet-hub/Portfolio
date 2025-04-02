function rangeAnim() {
    const photography = document.getElementById("photography")
    const webDesign = document.getElementById("webDesign");
    const photoshop = document.getElementById("photoshop");
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
}

export {
    rangeAnim
}