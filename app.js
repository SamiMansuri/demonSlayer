const demonSlayers = [
  {
    id: 1,
    name: "Giyu Tomioka",
    type: "Water Breathing",
    img: "images/Giyu.jpg",
    img_hover: "images/Giyu Tomioka.jpg",
    info: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "Tanjiro Kamado",
    type: "Sun Breathing",
    img: "images/Tanjiro.jpg",
    img_hover: "images/Tanjiro Kamado.jpg",
    info: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "Zenitsu Agatsuma",
    type: "Thunder Breathing",
    img: "images/Zenitsu.jpg",
    img_hover: "images/Zenitsu Agatsuma.jpg",
    info: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "Inosuke Hashibira",
    type: "Beast Breathing",
    img: "images/Inosuke.jpg",
    img_hover: "images/Inosuke Hashibira.jpg",
    info: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];
const demon = [
  {
    id: 1,
    name: "Giyu Tomioka",
    type: "Water Breathing",
    img: "images/Giyu.jpg",
    img_hover: "images/Giyu Tomioka.jpg",
    info: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "Tanjiro Kamado",
    type: "Sun Breathing",
    img: "images/Tanjiro.jpg",
    img_hover: "images/Tanjiro Kamado.jpg",
    info: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "Zenitsu Agatsuma",
    type: "Thunder Breathing",
    img: "images/Zenitsu.jpg",
    img_hover: "images/Zenitsu Agatsuma.jpg",
    info: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "Inosuke Hashibira",
    type: "Beast Breathing",
    img: "images/Inosuke.jpg",
    img_hover: "images/Inosuke Hashibira.jpg",
    info: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

let title_name = document.getElementById("title-name");
const img = document.getElementById("person_image");
const img_hover = document.getElementById("person_image_hvr");
const n = document.getElementById("hero");
const type = document.getElementById("type");
const info = document.getElementById("info");
const review_mode = document.querySelector(".review");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

const char_name = document.getElementById("char_name");
const search_btn = document.getElementById("search_btn");

let currentItem = 0;

let changeModeTheme = true;

window.addEventListener("DOMContentLoaded", function () {
  const item = demonSlayers[currentItem];
  img.src = item.img;
  img_hover.src = item.img_hover;
  n.textContent = item.name;
  type.textContent = item.type;
  info.textContent = item.info;
});

function showPerson(person) {
  const item = demonSlayers[currentItem];
  img.src = item.img;
  img_hover.src = item.img_hover;
  n.textContent = item.name;
  type.textContent = item.type;
  info.textContent = item.info;
}

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > demonSlayers.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = demonSlayers.length - 1;
  }
  showPerson(currentItem);
});

document.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    showName();
  }
});

function showName() {
  const foundObjects = demonSlayers.filter((obj) =>
    obj.name.toLowerCase().includes(char_name.value.toLowerCase())
  );
  if (foundObjects.length > 0) {
    const id = foundObjects.map((obj) => obj.id);
    currentItem = id - 1;
    showPerson(id - 1);
  } else {
    alert("character does not exist!");
  }
}

function changeMode() {
  console.log("change");
  let body = document.body;
  title_name.innerHTML = changeModeTheme ? "Demon" : "Demon Slayer";

  body.style.backgroundColor = changeModeTheme ? "#1F1717" : "#f1f5f8";
  body.style.color = changeModeTheme ? "white" : "";
  review_mode.style.backgroundColor = changeModeTheme ? "black" : "#f1f5f8";
  changeModeTheme = !changeModeTheme;
}
