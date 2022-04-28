const Reader = require("./lib/utils/Reader");
const ExplorerService = require("./lib/services/ExplorerService");
const FizzbuzzService = require("./lib/services/FizzbuzzService");
const ExplorerController = require("./lib/controllers/ExplorerController");

const explorers = Reader.readJsonFile("explorers.json");

console.log(ExplorerService.filterByMission(explorers, "node"));
console.log(ExplorerService.getAmountOfExplorersByMission(explorers, "node"));
console.log(ExplorerService.getExplorersUsernamesByMission(explorers, "node"));

const explorer1 = {name: "Explorer1", score: 1};
const explorer3 = {name: "Explorer3", score: 3};
const explorer5 = {name: "Explorer5", score: 5};
const explorer15 = {name: "Explorer15", score: 15};

console.log(FizzbuzzService.applyValidationInExplorer(explorer1));
console.log(FizzbuzzService.applyValidationInExplorer(explorer3));
console.log(FizzbuzzService.applyValidationInExplorer(explorer5));
console.log(FizzbuzzService.applyValidationInExplorer(explorer15));

console.log(ExplorerController.getExplorersByMission("node"));
console.log(ExplorerController.getExplorersUsernamesByMission("node"));
console.log(ExplorerController.getExplorersAmountByMission("node"));

console.log(explorers.filter(explorer => explorer.stacks.includes('javascript')));