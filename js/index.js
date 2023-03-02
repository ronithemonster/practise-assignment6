const loadPhone = () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayAll(data.data.tools));
}

const displayAll = (universes) => {
    const ContainerDiv = document.getElementById('card-container');
    universes.forEach(universe => {
          console.log(universe);
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('col');
        cardDiv.innerHTML = `
        <div class="col">
                  <div class="card h-100">
                    <img src="${universe.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h2 class="card-title">Features</h2>
                      <p class="card-text"><ul>
                      <li>1.Natural language processing</li>
                      <li>2.Contextual understanding</li>
                      <li>3.Text generation</li>
                  </ul>
                  </p>
                    </div>
                    <div class="card-footer">
                      <h2 class="">${universe.name}</h2>
                      <p>${universe.published_in}</p>
                    </div>
                  </div>
                </div>
        `
        ContainerDiv.appendChild(cardDiv);
    });
}
loadPhone();
