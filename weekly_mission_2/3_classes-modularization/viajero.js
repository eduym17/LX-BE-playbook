import Explorer from './explorer.js'

class Viajero extends Explorer {
  constructor(name, username, mission, cycle) {
    super(name, username, mission)
    this.cycle = cycle
  }

  getGeneralInfo() {
    let nameAndUsername = this.getNameAndUserName()
    return `${nameAndUsername}, cycle ${this.cycle}`
  }
}

export default Viajero;
