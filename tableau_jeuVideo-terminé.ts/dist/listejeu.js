"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jeu = exports.tabJeu = void 0;
const jeu_1 = require("./jeu");
Object.defineProperty(exports, "Jeu", { enumerable: true, get: function () { return jeu_1.Jeu; } });
let tabJeu = [
    new jeu_1.Jeu("Mario", "action", "Nintendo", 3, 1990, "oui", "non", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI7P5D1_-JZ6CUydfljMr6k41KwPDQWSlVWSFWGV5-7t38kJEjMWzQ1gSr8ustkNIHVVY&usqp=CAU"),
    new jeu_1.Jeu("crash bandicoot", "action", "eZAEZAEE", 3, 1998, "oui", "non", "https://m.media-amazon.com/images/I/61CnDvx9EcL._AC_SX425_.jpg"),
];
exports.tabJeu = tabJeu;
