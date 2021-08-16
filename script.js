"use strict";

let apps = document.getElementById("menu-1");
let options = document.getElementById("menu-2");

function more() {
  if (options.style.visibility === "visible") {
    options.style.visibility = "hidden";
  } else {
    options.style.visibility = "visible";
    apps.style.visibility = "hidden";
    options.style.zIndex = "5";
  }
}

function ytapps() {
  if (apps.style.visibility === "visible") {
    apps.style.visibility = "hidden";
  } else {
    apps.style.visibility = "visible";
    options.style.visibility = "hidden";
  }
}

let query = document.getElementById("query");
let searchBtn = document.getElementById("search");

function search() {
    if(query !== null) {
    let url = "https://www.youtube.com/results?search_query=" + query.value;
    window.open(url);
  }
}
