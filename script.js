"use strict";

import p from "./datajs.js";

console.log(p);

const filterBtns = document.querySelectorAll(".filteterBtns");
const filterLists = document.querySelectorAll(".filteterLists");
const chevronicons = document.querySelectorAll(".chevronicons");    


const categoryItems = document.querySelectorAll("#categoryList li");
const colorItems = document.querySelectorAll("#colorlist li");
const sizeItems = document.querySelectorAll("#sizelist li");

const colorItemsDots = document.querySelectorAll("#colorlist li")

const filteredCategories = [];
const filteredColors = [];
const filteredSizes = [];

filterBtns.forEach((btn, indexed) => {
    btn.addEventListener("click", () => {
        filterLists[index].classList.toggle("hidden");
        chevronicons[index].classList.toggle("-rotate-180");
    });
});    

