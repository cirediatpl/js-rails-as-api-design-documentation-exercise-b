console.log("Logging from the dogs-frontend/index.js");

// let search = document.querySelector("#filter")
const BASE_URL = "https://flatiron-dogs-api.herokuapp.com/"

document.addEventListener("DOMContentLoaded", function(){
    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault()
        let ulTag = document.querySelector('main')
        ulTag.innerHTML = ""
        let query = e.target.children[1].value
        let input = e.target.querySelector("input[type=radio]:checked") ? e.target.querySelector("input[type=radio]:checked").value : "name"
        fetch(`${BASE_URL}dog_search/?query=${query}&sort_field=${input}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json' 
            }
        })
        .then(res => res.json())
        .then(dogs => {
            // if(dogs !== null && dogs.length > 0){
            dogs.forEach((dog) => {
                ulTag.innerHTML += `<li>
                <h3 class="name">${dog.name}</h3>
                <div class="info">
                    <div class="breed">
                        <label for="breed">Breed: </label>
                        ${dog.breed}
                    </div>
                    <div class="phrase">
                        <label for="phrase">Tweet: </label>
                        ${dog.phrase}
                    </div>
                    <div class="size">
                        <label for="size">Size: </label>
                        ${dog.size}
                    </div>
                </div>
            </li>`
            // } else {
            //     ulTag.innerHTML = '<h2>No doggos...</h2>'
            // }
            })
        })
    })
})