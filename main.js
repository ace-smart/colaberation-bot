var alldata = require('./data.json')
const full_list = alldata.full_species_list

let entry_template = `
  <h3></h3>
  <p></p>
  <img></img>
`
let entry_list = document.querySelector('.dex');

let form = document.querySelector(".annex");
form.addEventListener('submit', (event) => {
  event.preventDefault();
  adder();
})

let adder = function() {
  const input = document.querySelector('#species');

  let entry = document.createElement("div");
  entry.setAttribute("class", "entry");
  entry.innerHTML = entry_template;

  entry.querySelector("h3").innerText = input.selectedIndex;
  entry.querySelector("p").innerText = input.value;
  entry.querySelector("img").src = "images/sprites_full/"+ input.value + ".gif";
  entry.querySelector("img").setAttribute("class", "portrait");

  entry_list.appendChild(entry);
}

function loadDex(list) {
  console.log("Loaded!");

  list.forEach((pokemon) => {
    let species = document.querySelector("[id='species']")
    let option = document.createElement("option")
    option.text = pokemon.name
    species.add(option)
  });
}

function loadRank(){
  console.log("Also loaded!");
  let ranker = document.querySelector("[id='rank']")
  var i;
  for (i = 0; i < 10; i++) {
    let rank = document.createElement("option")
    rank.text = i+1
    ranker.add(rank)
  }
}

window.addEventListener("load", (event) => {
  loadDex(full_list);
  loadRank();
  });
