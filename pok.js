const pokApi = "https://pokeapi.co/api/v2/pokemon";

async function fetchPokemonData() {
  try {
    const response = await fetch(pokApi);
    const data = await response.json();
    const pokemonList = data.results;

    const pok = document.getElementById("tabs");

    for (let i = 0; i <= pokemonList.length; i++) {
      const tr = document.createElement("tr");
      // console.log(pokemonList[i].name);
      const PokId = "<td>" + `${i + 1}` + "</td>";
      const nameId = "<td class='nameid'>" + pokemonList[i].name + "</td>";
      let imageUrl = "";

      async function fetchPokemonImg() {
        try {
          const res = await fetch(pokemonList[i].url);
          const data = await res.json();
          imageUrl = data.sprites.front_default;
        } catch (e) {
          console.log(e);
        }
      }

      await fetchPokemonImg();

      // const imageUrl = pokemonList[i].url.sprites.front_default;
      const imageId =
        "<td><img src='" +
        imageUrl +
        "' alt='" +
        pokemonList[i].name +
        "'></td>";

      const urlId =
        "<td ><a href='" +
        pokemonList[i].url +
        "'>" +
        pokemonList[i].url +
        "</a></td>";

      const delId =
        "<td><img class='del-icon' src='trash.svg' data-index='" +
        i +
        "'></td>";
      tr.innerHTML = PokId + nameId + imageId + urlId + delId;
      pok.appendChild(tr);
    }
  } catch (e) {
    console.log("THis is error", e);
  }
}

fetchPokemonData();

setTimeout(() => {
  const deleteRow = (event) => {
    const rowIndex = event.target.getAttribute("data-index");
    const tableRow = event.target.closest("tr");
    tableRow.remove();
  };

  const deleteIcons = document.querySelectorAll(".del-icon");
  deleteIcons.forEach((icon) => {
    icon.addEventListener("click", deleteRow);
  });
}, 1000);
