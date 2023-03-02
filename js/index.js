const loadPhone = async() =>{
    const url =`https://openapi.programming-hero.com/api/ai/tools`;
    const res = await fetch(url)
    const data = await res.json()
    displayAll(data.data);
}

const displayAll= (universes) =>{
    universes.forEach(universe => {
        console.log(universe);
    });
}
loadPhone();
