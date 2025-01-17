const Reader = require('../utils/Reader');
const ExplorerService = require('../services/ExplorerService');
const FizzbuzzService = require('../services/FizzbuzzService');

class ExplorerController {
  static getExplorersByMission(mission) {
    const explorers = Reader.readJsonFile("explorers.json");
    return ExplorerService.filterByMission(explorers, mission);
  }

  static getExplorersUsernamesByMission(mission) {
    const explorers = Reader.readJsonFile("explorers.json");
    return ExplorerService.getExplorersUsernamesByMission(explorers, mission);
  }

  static getExplorersAmountByMission(mission) {
    const explorers = Reader.readJsonFile("explorers.json");
    return ExplorerService.getAmountOfExplorersByMission(explorers, mission);
  }

  static fizzbuzzScore(score) {
    return FizzbuzzService.applyValidationInScore(score);
  }

  static getExplorersByLanguage(lang) {
    const explorers = Reader.readJsonFile("explorers.json");
    return ExplorerService.getExplorerByLanguage(explorers, lang);
  }
}

module.exports = ExplorerController;
