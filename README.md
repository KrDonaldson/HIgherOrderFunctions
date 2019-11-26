Setup
Step 1 - Create a repo named functional-array on github. 
Create a repo on github - Creating a repo lesson only do till part 6 - Git Clone 
Clone the repo to your local machine.
Make sure when you run git clone you are in the desired directory
Git Cheat Sheet


All the following problems will be based on the below animals array.
const Animals = [   
     {name: "Fluffykins" , species: "rabbit" },
     {name: "Caro" , species: "dog" },
     {name: "Hamilton" , species: "dog"},
     {name: "Harold", species: "fish"},
     {name: "Ursula" , species: "cat"},
     {name: "Jimmy", species: "fish"}
]
Copy this array into a new file called arrayFilter.js in your challenges/week2/functional-array
Note this is your file path: challenges/<current week#>/functional-array

Problem 1 - Array Filtering
Part 1 - For Loop Filter
Create a Function that takes an array for a parameter and returns an array of just the dogs from the animals array.
Constraints
     Must use a for loop
     For loop must be in the function
     Function must return an array.
     Store the output of the function in a variable called dogs
     Console.log the variable dogs

Remember to commit your work with git when you hit a milestone in your work.
git add .                                      Note* -  will add your work to staging
git status                                    Note* - confirm you have the desired files added in green
git commit -m “  message about commit ”

Part 2 - Array Filter Method
In the same file, arrayFilter.js create a new function that uses the array filter method. You should have the same result as in part 1.
 Tips: Google search javascript array filter or see Mozilla Array Filter
 Constraints
Must use filter method inside a new function
Must return an array of dogs
Must console.log the result and have the same output as step 1

Problem 1 - Review
Note * If in class wait. We will review as a group.

 Video Review Functional Programming #1 Filter
 
Problem 2 - Array Map 
     Part 1 - Map with For Loop
     First create a new file arrayMap.js and copy the above animals array into the file.
     Now create a function that takes an array for a parameter and returns an array of strings, the names from the animals array.
     Constraints
     Must use a for loop.
     For loop must be in a function.
     Function must return an array of strings.
     Store the output of the function in a variable called animalNames
     Console.log the variable animalNames

     Part 2 - Array Map Method
     In the same file, arrayMap.js create a new function that takes in array as a parameter and  returns an array of names, however instead of looping you must use array map method.
     Tips: Google search javascript array map or see  Mozilla Array Map
     Constraints
     Must use map method inside function
     Function must return an array of names
     Console.log the result and have the same output as step 1

Problem 2 - Review
 Note * If in class wait. We will review as a group.
 Video:Functional Programming #2 Map


Problem 3 - Array Reduce
 Part 1 - For Loop Reduce 
Create a new file called reduceArray.js in your Challenges/week2/functional-array
Now copy the Orders array below into your reduceArray.js file.
const Orders = [
     {amount: 250},
     {amount: 400},
     {amount: 100},
     {amount: 325}
]
Create a function that takes in an array as a parameter and returns the total amount of all the orders
Constraints
Must have a function with a for loop inside
Must function must return a number that is the total amount
Save the output of the function in a variable called total.

Part 2 - Reduce Method
Inside of reduceArray.js create a new function that takes an array as a parameter and returns the total amount, however this time use the array reduce method instead.
Tips: Mozilla Array Reduce or google javascript array reduce method.
Constraints
Must use reduce method
Function must return number that is the total of order amounts
Must save the result in a variable
The console.log variable must match the step from part 1

Problem 3 - Review
Note * If in class wait. We will review as a group.
Video: Functional Programming #3
Recap
 Push up your code to git hub, this way we have updated work in our online github remote repository. 
In this lesson we introduced you to functional programming. We want to create small reusable code not 50+ long line functions.
Key Points
Pure Functions - we want to write functions that take in a value, do work on it then output ( return ) the value. This way we reduce side-effects
Filter, Map and Reduce are pre-existing array methods that exist on the array prototype. There are many more existing methods for arrays and objects and string. Searching for existing solutions on the prototype can be very valuable and powerful.
Mozilla Javascript Documentation is probably the best resource when looking up existing methods on arrays, objects, strings.