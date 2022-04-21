const UserView = require('./../../app/views/UserView')

describe("Test for UserView", () => {
  test('1) Return an error if payload is null', () => {
    const payload = null
    const result = UserView.createUser(payload)
    expect(result.error).toMatch(/payload no existe/)
  })

  test('2) Return an error if new user payload has ivalid properties', () => {
    const payload = {username: null, name: 12, id: "id"}
    const result = UserView.createUser(payload)
    expect(result.error).toMatch(/necesitan tener un valor válido/)
  })

  test('3) Return an error if new user payload is missing properties', () => {
    const payload = {username: "Username"}
    const result = UserView.createUser(payload)
    expect(result.error).toMatch(/necesitan tener un valor válido/)
  })

  test('4) Create a user by a given valid payload', () => {
    const payload = {username: "username", id: 1, name: "name"}
    const result = UserView.createUser(payload)
    expect(result.username).toBe("username")
    expect(result.id).toBe(1)
    expect(result.name).toBe("name")
  })
})
