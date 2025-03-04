/*
Cuando la usuaria haga click en el boton reset
    nivel de desesperación vacio
    frase escogida vacio
    Creado por vacio
    la imagen que vuelva la de por defecto
*/

const inputReset = document.querySelector(".js-reset")

const handleClick = () => {
    previewDesperation.innerHTML = "Nivel de desesperación: ";
    previewTxt.innerHTML = "Frase escogida";
    previewAuthor.innerHTML = "Creado por";
    profilePreview.src = "https://i.pinimg.com/550x/09/2a/93/092a93bd0e2f183f210e1840d2c126f4.jpg";
    previewTxt.classList.remove("mediumSize", "bigSize", "smallSize", "color1", "color2", "color3");
    previewDesperation.classList.remove("background1", "background2", "background3");
}

inputReset.addEventListener("click", handleClick);
