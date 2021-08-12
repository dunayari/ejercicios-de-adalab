"use strict";
const myName = "Iván";

if (myName === "Ana" || myName === "Daniela") {
  console.log(`Bienvenida: ${myName}`);
} else if (myName === "Miguel" || myName === "Iván") {
  console.log(`Chicos, ustedes no pueden entrar`);
} else {
  console.log("El usuario no está registrado");
}
