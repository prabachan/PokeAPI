const pokApi= "https://pokeapi.co/api/v2/pokemon"

async function fetchPokemonData(){
    try{
        const response =await fetch(pokApi)
        const data =await response.json()
        const pokemonList=data.results
        console.log(pokemonList)
        const pok=document.getElementById('tabs')
        for (let i=0;i<=pokemonList.length;i++)
        {
            const tr=document.createElement('tr')
            console.log(pokemonList[i].name)
            const td="<td>"+pokemonList[i].name +"</td>"
            
            tr.innerHTML=td
            pok.appendChild(tr)
        }
            
       
    }
    catch(e){
        console.log('THis is error',e)
    }
}
    
    fetchPokemonData()

    
