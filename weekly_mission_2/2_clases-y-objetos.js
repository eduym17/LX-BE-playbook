// Example 1. Create an empty class
class Empty {
  constructor()
    {

    }
}
console.log("E1: create an empty class:", Empty);

// Example 2. Create an object using a class
class Object {
}
const objectOne = new Object()
console.log("E2: create an empty object using a class:", objectOne);

//Example 3. Instantiate an object using attributes
class Thing {
  constructor(name, usage, characteristics) {
    this.name = name
    this.usage = usage
    this.characteristics = characteristics
  }
}
console.log("E3: create an object with attributes:", Thing);

// Example 4. Methods in objects
class Repo {
  constructor(name, author, language, stars) {
    this.name = name
    this.author = author
    this.language = language
    this.stars = stars
  }

  printInfo(){
    return `Repo ${this.name} has ${this.stars.toLowerCase()} stars.`
  }
}
const MyRepo = new Repo('LaunchX', 'Eduardo Yañez', 'JS', 'Thousands');
console.log("E4: print method inside the class:" ,MyRepo.printInfo());

// Example 5. Attributes with default values
class DefaultAtts {
  constructor(name) {
    this.name = name
    this.defaultOne = "Default mesg"
    this.defaultTwo = "RickRoll"
  }
  printDefaults() {
    return `This ${this.defaultOne} was set by ${this.name} ${this.defaultTwo}`
  }
}
const nameForDefaults = new DefaultAtts('Eduardo');
console.log("E5: attributes with default values:", nameForDefaults.printDefaults());

// Example 6. Getters to access to object atts
class Getters {
  constructor(name, age, stack){
    this.name = name
    this.age = age
    this.stack = stack
    this.exercisesCompleted = 'works'
    this.exercisesToDo = 'works two'
  }

  get ExamplesCompleted() {
    return this.exercisesCompleted
  }
}
const getting = new Getters("Evey", 4, []);
console.log("E6: getter to get object atts:", getting.ExamplesCompleted);

// Example 7. Modify object atts
class Players {
  constructor(game, fase) {
    this.game = game
    this.fase = fase
    this.players = 0
    this.games = 0
  }

  get getPlayers(){
    return this.players
  }

  set setPlayers(players){
    this.players = players
  }

  get getGames() {
    return this.games
  }

  set setGames(games){
    this.games = games
  }
}
const readyPlayerOne = new Players('footbal', 'worldcup');
console.log("E7: getters and setters:", readyPlayerOne.getPlayers, readyPlayerOne.getGames);
readyPlayerOne.setPlayers = 123123
readyPlayerOne.setGames = 5
console.log("E7: getters and setters:", readyPlayerOne.getPlayers, readyPlayerOne.getGames);

// Example 8. Static method
class ReactJS {
  static getUsefulTools() {
    return ['Hooks', 'Components', 'Router']
  }
}
console.log("E8: static method:", ReactJS.getUsefulTools());

// Example 9. Inheritance
class Dev {
  constructor(name, goal, stack){
    this.name = name
    this.goal = goal
    this.stack = stack
  }
  
  get getName() {
    return this.name
  }
}
const Eduardo = new Dev('Eduardo', 'Develop', 'HTML, CSS, JS, REACTJS');
console.log("E9: Inheritance 1/2:", Eduardo, Eduardo.getName);

class LaunchXStudent extends Dev {
}
const carloLaunchXDev = new LaunchXStudent("Carlo", "js", ["elixir", "groovy", "lisp"])
console.log("E9: Inheritance 2/2:", carloLaunchXDev, carloLaunchXDev.getName)

// Example 10. Overriding methods
class Explorer {
  constructor(name, username, mission) {
    this.name = name
    this.username = username
    this.mission = mission
  }
  
  getNameAndUsername() {
    return `Explorer ${this.name} is ${this.username} on GitHub`
  }
}

class Viajero extends Explorer {
  constructor(name, username, mission, cycle){
    super(name, username, mission)
    this.cycle = cycle
  }

  getGeneralInfo() {
    let nameAndUsername = this.getNameAndUsername()
    return `${nameAndUsername}, cycle ${this.cycle}.`
  }
}

const viajeroOne = new Viajero ('Eduardo', 'eduym17', 'Node JS', 'April 2022');
console.log("E10: overriding inheritance, prints explorer data:", viajeroOne, viajeroOne.getNameAndUsername(), viajeroOne.getGeneralInfo());