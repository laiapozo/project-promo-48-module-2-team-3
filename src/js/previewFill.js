/*
Seleccionamos los telementos de HTMl que utilizamos
   -las constantes están en collapsables.js y son: fillBox, designBox y shareBox
Seleccionar los elementos donde vamos a añadir el valor de los inputs. En este caso son : imagen, nivel desesperación, frase y el autor.
Cuando la usuaria escriba los inputs: 
    si el input es "Name" añadir el valor a su caja de la imagen
    y así con todos.
*/

// const previewImg = document.querySelector(".js-img-preview");
const previewDesperation = document.querySelector(".js-desperation-preview");
const previewTxt = document.querySelector(".js-txt-preview");
const previewAuthor = document.querySelector(".js-author-preview");

const formData = {
    field1: 0,
    field2: "",
    field3: "",
    field4: "",
    field5: "",
    photo: "",
}

function getPreview(event) {
    const select  = "Selecciona tu frase";
    const process  = "Confía en el proceso";
    const reverse = "Me siento un poco column-reverse";
    const crying = "Crying in JavaScript";


    // if (event.target.id === "image") {
    //     previewImg.innerHTML = event.target.value;
    //     formData.image = event.target.value;
    // }
    if (event.target.id === "desperation") {
        previewDesperation.innerHTML = "Nivel de desesperación: " + event.target.value;
        formData.field1 = event.target.value;
    } else if (event.target.id === "sentence") {
        // formData.sentence = event.target.options[parseInt(event.target.value)].text;
        // previewTxt.innerHTML = event.target.options[parseInt(event.target.value)].text;
        //  ¡¡¡ FORMA MáS AVANZADA DE HACERLO!!!
        if (event.target.value === "select") {
            previewTxt.innerHTML = select;
        } else if (event.target.value === "process") {
            previewTxt.innerHTML = process;
        } else if (event.target.value === "reverse") {
            previewTxt.innerHTML = reverse;
        } else if (event.target.value === "crying") {
            previewTxt.innerHTML = crying;
        }

        formData.field2 = event.target.value;
    } else if (event.target.id === "author") {
        previewAuthor.innerHTML = "Creado por " + event.target.value;
        formData.field3 =  "Creado por " + event.target.value;
    }
    
}

fillBox.addEventListener("input", getPreview);
