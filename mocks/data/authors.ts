import * as faker from 'faker'

export const getAuthors = Array.from({ length: 3 }, () => ({
  id: faker.datatype.uuid(),
  name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  title: faker.name.title(),
}))
