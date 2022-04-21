const UserService = require('./../../app/services/UserService')

describe('Test for UserService', () =>  {
  test('1) Create a new user using the UserService', () => {
    const user = UserService.create(1, "eduym17", "Eduardo")
    expect(user.username).toBe("eduym17") 
    expect(user.name).toBe("Eduardo")
    expect(user.id).toBe(1)
    expect(user.bio).not.toBeUndefined()
  })

  test('2) Get all user data in a list', () => {
    const user = UserService.create(1, "eduym17", "Eduardo")
    const userInfoInList = UserService.getInfo(user)
    expect(userInfoInList[0]).toBe(1)
    expect(userInfoInList[1]).toBe("eduym17")
    expect(userInfoInList[2]).toBe("Eduardo")
    expect(userInfoInList[3]).toBe("No bio")
  })

  test('3) Update username', () => {
    const user = UserService.create(1, "eduym17", "Eduardo")
    UserService.updateUserUsername(user, "edu_ym")
    expect(user.username).toBe("edu_ym")
  })

  test('4) Given a list of users give me the list of usernames', () => {
    const user1 = UserService.create(1, "eduym17", "Eduardo")
    const user2 = UserService.create(2, "eduym18", "Eduardo")
    const user3 = UserService.create(3, "eduym19", "Eduardo")
    const usernames = UserService.getAllUsernames([user1, user2, user3])
    expect(usernames[0]).toBe("eduym17")
    expect(usernames).toContain("eduym18")
    expect(usernames).toContain("eduym19")
  })
})