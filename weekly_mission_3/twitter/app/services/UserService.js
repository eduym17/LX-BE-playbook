const User = require('./../models/User')

class UserService {
  static create(id, username, name){
    return new User(id, username, name, "No bio")
  }

  static getInfo(user){
    return Object.values(user)
  }

  static updateUserUsername(user, username){
    user.username = username
  }

  static getAllUsernames(user){
    const allUsernames = user.map(el => el.username)
    return allUsernames
  }
}

module.exports = UserService