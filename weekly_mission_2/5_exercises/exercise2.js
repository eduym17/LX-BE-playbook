const explorers = [
  {
    name: "Explorer 1",
    exercises_completed: 10,
    rate: 99,
    city: "CDMX",
    stack: [
      "js",
      "c#"
    ],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true
      },
      frontend: {
        isFinished: true,
        exercisesFinished: true
      }
    }
  },
  {
    name: "Explorer 2",
    exercises_completed: 9,
    city: "Veracruz",
    rate: 50,
    stack: [
      "js"
    ],
    missions: {
      onboarding: {
        isFinished: false,
        exercisesFinished: false
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false
      }
    }
  },
  {
    name: "Explorer 3",
    exercises_completed: 3,
    city: "Sonora",
    rate: 100,
    stack: [
      "elixir"
    ],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false
      }
    }
  }
 ]

 explorers.forEach(element => console.log("E1: explorer name: " + element.name));
 explorers.forEach(element => console.log("E2: explorer stack: " + element.stack));

 const newExplorersArray = explorers.map(function(explorer){
   return {
     explorer: explorer.name,
     stack: explorer.stack}
 })
 console.log("E3: explorers stacks:", newExplorersArray)

 const filterJS = newExplorersArray.filter((string) => string.stack.includes('js'));
 console.log("E4: explorers with JS in their stacks:", filterJS)

 const findCDMXExplorer = explorers.find((string) => string.city === 'CDMX')
 console.log("E5: first explorer from CDMX:", findCDMXExplorer.name)

 const exercisesCompleted = explorers.reduce((accumulator, item) => accumulator + item.exercises_completed, 0)
 console.log("E6: total of exercises completed:", exercisesCompleted)

 const exercisesFinishedValidation = explorers.some((el) => el.missions.frontend.exercisesFinished === true && el.missions.onboarding.exercisesFinished === true)
 console.log("E7: does at least one explorer finished the onboarding and frontend exercises?", exercisesFinishedValidation)

 const isOnboardingFinished = explorers.every((item) => item.missions.onboarding.isFinished === true)
 console.log("E8: is onboarding finished by all explorers?", isOnboardingFinished)