document.addEventListener("DOMContentLoaded", function() {
    fetch("https://digimon-api.vercel.app/api/digimon")
        .then(function(response) {
            //funciona
            return response.json();
        })
        .then(function(ListDigimon) {

            for (let i = 0; i < ListDigimon.length; i++) {
                let newdigimon = createDigimonCard(ListDigimon[i])
                document.getElementById("digimon-list").appendChild(newdigimon)
            }

        })
        .catch(function(response) {
            //error
        })

});

function createDigimonCard(data) {
    const div = document.createElement('li');
    const img = document.createElement('img');
    const nombre = document.createElement('h2');
    img.src = data.img;
    nombre.innerText = data.name
    div.appendChild(img)
    div.appendChild(nombre)

    return div
}