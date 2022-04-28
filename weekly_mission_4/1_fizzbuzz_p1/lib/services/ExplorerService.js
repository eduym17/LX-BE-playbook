class ExplorerService {
  static filterByMission(explorers, mission) {
    const explorersByMission = explorers.filter((explorer) => explorer.mission == mission);
    return explorersByMission;
  }

  static getAmountOfExplorersByMission(explorers, mission) {
    const explorersByMission = explorers.filter((explorer) => explorer.mission == mission);
    return explorersByMission.length;
  }

  static getExplorersUsernamesByMission(explorers, mission) {
    const explorersByMissionToGetUsernames = explorers.filter((explorer) => explorer.mission == mission);
    const usernamesInMission = explorersByMissionToGetUsernames.map((explorer) => explorer.githubUsername);
    return usernamesInMission;
  }

  static getExplorerByLanguage(explorers, lang) {
    const explorersByLanguage = explorers.filter(explorer => explorer.stacks.includes(lang));
    return explorersByLanguage;
  }
}

module.exports = ExplorerService;
