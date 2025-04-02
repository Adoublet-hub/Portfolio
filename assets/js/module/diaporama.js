function diaporama() {
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
}

export {
    diaporama
}