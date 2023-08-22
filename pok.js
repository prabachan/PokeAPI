document.addEventListener("DOMContentLoaded",()=>{
    const pokeApiUrl="https://pokeapi.co/api/v2/pokemon/ditto"

    fetch(pokeApiUrl)
    .then(response=>response.json())
    .then(data=>{
        const pokId=data.id 
        const pokName=data.name 
        const pokUrl =data.sprites.front_default

        document.getElementById("pokId").textContent=pokId
        document.getElementById('pokName').textContent=pokName
        document.getElementById('pokUrl').textContent='Click to open'
        document.getElementById('pokUrl').href=pokUrl
        document.getElementById('pokImg').src=pokemonUrl
    
        )
    })
}
)