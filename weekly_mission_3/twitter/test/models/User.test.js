const User = require('./../../app/models/User')

describe("Unit Tests for User class", () => {
  test('Create an User Object', () => {
    const user = new User(1, "eduym17", "Eduardo", "Bio")

    expect(user.id).toBe(1)
    expect(user.username).toBe("eduym17")
    expect(user.name).toBe("Eduardo")
    expect(user.bio).toBe("Bio")
    expect(user.dateCreated).not.toBeUndefined()
    expect(user.lastUpdated).not.toBeUndefined()
  })

  test('Add getters', () => {
    const user = new User(1, "eduym17", "Eduardo", "Bio")
    expect(user.getUsername).toBe("eduym17")
    expect(user.getBio).toBe("Bio")
    expect(user.getDateCreated).not.toBeUndefined()
    expect(user.getLastUpdated).not.toBeUndefined()
  })

  test('Add setters', () => {
    const user = new User(1, "eduym17", "Eduardo", "Bio")
    user.setUsername = "Yañez"
    expect(user.username).toBe("Yañez")

    user.setBio = "New bio"
    expect(user.bio).toBe("New bio")
  })
})