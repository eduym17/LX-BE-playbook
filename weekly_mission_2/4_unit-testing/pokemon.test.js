import Pokemon from './pokemon.js';

test('1. Create a new object for a Pokemon', () => {
  const myPokefriend = new Pokemon('Raichu')
  expect(myPokefriend.name).toBe('Raichu');
})
