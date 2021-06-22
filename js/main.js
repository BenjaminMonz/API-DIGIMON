let txtNombre = document.getElementById('txtNombre');
let ul = document.getElementById('digimon-list');


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
    const li = document.createElement('li');
    const img = document.createElement('img');
    const nombre = document.createElement('h2');
    img.src = data.img;
    nombre.innerText = data.name
    li.appendChild(img)
    li.appendChild(nombre)

    return li
}

function filtarxnombre() {
    let arraydigi = ul.children;
    for (let i = 0; i < arraydigi.length; i++) {
        if (!arraydigi[i].innerText.toUpperCase().includes(txtNombre.value.toUpperCase())) {
            arraydigi[i].classList.add('filtro');
        } else {
            arraydigi[i].classList.remove('filtro')
        }
    }
}

txtNombre.onkeypress = filtarxnombre;
txtNombre.onkeyup = filtarxnombre;