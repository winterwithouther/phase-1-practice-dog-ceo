console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const imgDiv = document.querySelector("#dog-image-container");
const breedUrl = "https://dog.ceo/api/breeds/list/all";
const dogBreedList = document.querySelector("#dog-breeds");
const dropDown = document.querySelector("#breed-dropdown");
const breedArray = [];
const otherBreedNames = [];

// fetch to imgUlr
fetch(imgUrl)
// process the information (with .then)
.then(res => res.json())
// create an element with said information
.then(data => {
    data.message.forEach(img => {
        let el = document.createElement("img");
        el.src = img;
        imgDiv.append(el);
    })
})
// append said element onto the page

fetch(breedUrl)
.then (res => res.json())
.then(data => {
    for (const breed in data.message) {
        let li = document.createElement("li");
        li.textContent = breed;
        dogBreedList.append(li);
        
        breedArray.push(breed);

        li.addEventListener("click", (e) => {
            li.style.color = "#0000FF";    
        })
    }
})

// function filter() {
//     const item = document.getElementById(li)
// }

const val = dropDown.value;
console.log(val.options[val.selectedIndex].text);

// add event listener to <select>
dropDown.addEventListener("change", (e) => {
    let value = e.target.value;

    let filterBreeds = breedArray.filter(breed => {
        return breed[0] === value;
    })
    dogBreedList.innerHTML = "";
    
    filterBreeds.forEach(breed => {
        let li = document.createElement("li");
        li.textContent = breed;
        dogBreedList.append(li);

        li.addEventListener("click", (e) => {
            li.style.color = "#0000FF";    
        })
    })
})
// filter out dogs based on select value
// add those dogs to page