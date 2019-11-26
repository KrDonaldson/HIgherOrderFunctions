const Animals = [   
    {name: "Fluffykins" , species: "rabbit" },
    {name: "Caro" , species: "dog" },
    {name: "Hamilton" , species: "dog"},
    {name: "Harold", species: "fish"},
    {name: "Ursula" , species: "cat"},
    {name: "Jimmy", species: "fish"}
]

function animalSortFunction(animals) {
    let dogs = [];
    for (let animal of animals){
        if (animal.species === "dog"){
            dogs.push(animal);
        }
    }
    return dogs;
}
console.log(animalSortFunction(Animals));