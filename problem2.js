function animalSortFunction(animals) {
    let names = [];
    for (let animal of animals){
            names.push(animal.name);
    }
    return names;
}
console.log(animalSortFunction(Animals));