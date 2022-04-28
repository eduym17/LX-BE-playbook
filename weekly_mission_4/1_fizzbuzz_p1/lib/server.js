const ExplorerController = require("./controllers/ExplorerController");
const FizzbuzzScore = require("./services/FizzbuzzScore");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

app.get("/v1/explorers/:mission", (req, res) => {
  const mission = req.params.mission;
  const explorersInMission = ExplorerController.getExplorersByMission(mission);
  res.json(explorersInMission);
})

app.get("/v1/explorers/amount/:mission", (req, res) => {
  const mission = req.params.mission;
  const amountOfExplorersInMission = ExplorerController.getExplorersAmountByMission(mission);
  res.json(amountOfExplorersInMission);
})

app.get("/v1/explorers/usernames/:mission", (req, res) => {
  const mission = req.params.mission;
  const githubUsernamesInMission = ExplorerController.getExplorersUsernamesByMission(mission);
  res.json(githubUsernamesInMission);
})

app.get("/v1/fizzbuzz/:score", (req, res) => {
  const score = req.params.score;
  const fizzBuzzScore = ExplorerController.fizzbuzzScore(score);
  res.json(fizzBuzzScore);
})

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});