"use strict";

// avatar por defecto
const DEFAULT_AVATAR = "http://placehold.it/300x300";
// avatar que eligió el usuario al registrarse
let userAvatar = "http://www.fillmurray.com/300/300";

/*document.querySelector(".user__avatar");
let avatar = document.querySelector(".user__avatar");

avatar.innerHTML = userAvatar.innerHTML;*/

let userAvatar = "";
let user = document.querySelector(".js_user");

const newAvatar = user;
const newAvatar = userAvatar || DEFAULT_AVATAR;
user.innerHTML += `<img src="${newAvatar}" alt="profile image" class="user__avatar js_user_avatar" />`;
