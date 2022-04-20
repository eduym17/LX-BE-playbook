class User {
  constructor(id, username, name, bio) {
    this.id = id
    this.username = username
    this.name = name
    this.bio = bio
    this.dateCreated = new Date()
    this.lastUpdated = new Date()
  }

  get getUsername(){
    return this.username
  }
  set setUsername(newUserName){
    this.username = newUserName
  }

  get getBio(){
    return this.bio
  }
  set setBio(newBio){
    this.bio = newBio
  }

  get getDateCreated(){
    return this.dateCreated
  }
  get getLastUpdated(){
    return this.lastUpdated
  }
}

module.exports = User
