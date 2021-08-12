"use strict";

// avatar por defecto
const DEFAULT_AVATAR = "http://placehold.it/300x300";
// avatar que eligió el usuario al registrarse
let userAvatar = "http://www.fillmurray.com/300/300";

/*document.querySelector(".user__avatar");
let avatar = document.querySelector(".user__avatar");

avatar.innerHTML = userAvatar.innerHTML;*/

//userAvatar = "";
let user = document.querySelector(".js_user__avatar");
user.src = userAvatar || DEFAULT_AVATAR;
