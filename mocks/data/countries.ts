import * as faker from 'faker'

// Let this object's type be inferred because ProfileFragment has some nullish stuff
export const getCountries = Array.from({ length: 3 }, () => ({
  name: faker.address.country(),
  emoji: '',
}))
