const UserService = require('./../services/UserService')

class UserView {
  static createUser(payload){
    if (payload === null){
      return {error: "payload no existe."}
    } else if(typeof payload.id === 'number' && typeof payload.username === 'string' && typeof payload.name === 'string'){
      return UserService.create(payload.id, payload.username, payload.name)
    } else {
      return {error: "Error, las propiedades del payload necesitan tener un valor válido"}
    }
  }
}

module.exports = UserView
