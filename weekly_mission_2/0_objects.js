console.log("Objects");

// Example 1. Create object
const emptyObject = {}
console.log('Creates empty object:')
console.log(emptyObject);

// Example 2. Object including props
const nonEmptyObject = {
  name: "Name here",
  age: "Age here",
  ocupation: "Ocupation here",
}
console.log("Creates non empty object:");
console.log(nonEmptyObject);

// Example 3. Object with different props
const specialObject = {
  name: "Name here",
  age: "Age here",
  hobbies: [
    "Developing",
    "Apex Legends",
    "Anime",
  ],
  education: [
    "Engineering",
    "Developing",
    "Graphic Design",
    "Business",
  ]
}
console.log("Creates a special object:");
console.log(specialObject);
console.log("Prints only education items:");
console.log(specialObject.education);

// Example 4. Object with methods
const methodsObject = {
  name: "Evey",
  SayHello(){
    console.log(`${this.name} is my pet's name.`);
  }
}
console.log("Prints pet's name:");
methodsObject.SayHello();

// Example 5. Object with methods that receives props
const propsObject = {
  name: "Evey",
  SayOwner(owner){
    console.log(`${this.name}'s owner is ${owner}.`);
  }
}
console.log("Prints owner name:");
propsObject.SayOwner('Eduardo');