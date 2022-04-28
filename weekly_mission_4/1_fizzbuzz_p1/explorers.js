const Reader = require("./lib/utils/Reader");

const explorers = Reader.readJsonFile("explorers.json");

array = explorers.filter(explorer => explorer.stacks == "javascript")

console.log(explorers.filter(explorer => explorer.stacks.includes('javascript')));