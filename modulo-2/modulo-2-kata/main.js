"use strict";

// Objetivo:
//   Debéis poner el texto que está en el span de la derecha del primer div
// dentro del span del segundo div, transformando el texto en mayúsculas y
// usando unicamente JavaScript (podéis poner clases en las etiquetas del HTML).
// Pista: buscad en MDN los métodos de strings.
//
// Pasos:
//
// 1. Traer el <span> con el texto original a una constante.
// 2. Traer el <span> donde se escribirá el texto modificado.
// 3. Obtener el texto que contiene.
// 4. Transformar el texto a mayúsculas.
// 5. Poner el texto transformado en el <span> destino.

const textOriginal = document.querySelector(".ml-1");
const textModificada = document.querySelector(".ml-2");
textModificada.innerHTML = textOriginal.innerHTML.toUpperCase(); //.toUpperCase() lo pone en mayúscula.
