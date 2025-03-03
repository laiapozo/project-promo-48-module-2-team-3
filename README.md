<img src="./public/images/logo.png" alt="drawing" width="200"/>

**¿Eres una programadora desesperada y necesita echarse unas risas para soltar tensiones? ¡Ésta es tu pagina!** 
Aquí podras crear los stickers de gatitos más divertidos con frases propias de una verdadera programadora web.

El acceso directo a nuestra página web es: https://laum25.github.io/project-promo-48-module-2-team-3/

>El **objetivo** de nuestro proyecto era darle un respiro a todas aquellas programadoras y futuras programadoras que se encuentran en un momento difícil para que puedan desahogarse y soltar unas carcajadas. Cuando se accede a la página del **formulario** a través del *landing* llegamos a la sección del formulario donde la usuaria tendrá que cargar una imagen de su ordenador y elegir la **frase** que más le represente, el nivel de **desesperación** y su **nombre**. A continuación deberá personalizar su **sticker** con tres tamaños de letras y tres colores diferentes. Finalmente podrá compartir su stickers con más programadoras desesperadas a través de **WhatsAppp**.

Os dejamos un ejemplo de nuestra página con algunas opciones seleccionadas:
![ejemplo página del proyecto](./public/images/Proyecto%20readme.jpg)

Para llevar a cabo este proyecto utilizamos:
- **HTML Y CSS**
- **JAVA SCRIPT**
- **GIT Y GITHUB**

Para nosotras es importante **destacar** que supuso todo un **reto** darle vida a la sección de **rellena**, por ello os dejamos un **fragmento** del código elaborado:

```js
    if (event.target.id === "desperation") {
        previewDesperation.innerHTML = "Nivel de desesperación: " + event.target.value;
        formData.desperation = event.target.value;
    } else if (event.target.id === "sentence") {
        console.log(event.target.value);
        if (event.target.value === "select") {
            previewTxt.innerHTML = select;
            formData.sentence = select;
        } else if (event.target.value === "process") {
            previewTxt.innerHTML = process;
            formData.sentence = process;
        } else if (event.target.value === "reverse") {
            previewTxt.innerHTML = reverse;
            formData.sentence = reverse;
        } else if (event.target.value === "crying") {
            previewTxt.innerHTML = crying;
            formData.sentence = crying;
        }
    } else if (event.target.id === "author") {
        previewAuthor.innerHTML = "Creado por " + event.target.value;
    }
   ```
   #### AUTORAS DEL PROYECTO
   >- Laura Montiel
   >- Laia Pozo
   >- Andrea Chust

