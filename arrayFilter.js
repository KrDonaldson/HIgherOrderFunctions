const Animals = [   
    {name: "Fluffykins" , species: "rabbit" },
    {name: "Caro" , species: "dog" },
    {name: "Hamilton" , species: "dog"},
    {name: "Harold", species: "fish"},
    {name: "Ursula" , species: "cat"},
    {name: "Jimmy", species: "fish"}
]
// Array Method Filter: creates a NEW array with all elements that pass the test implemented by the provided function. does not affect the original array //

function getDogs(animals){
    return animals.filter(animal=> animal.species === "dog")
}

console.log (getDogs(Animals))