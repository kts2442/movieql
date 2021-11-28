import { people, getByID } from "./db.js";

const resolvers = {
  Query: {
    people: () => people,
    person: (_, { id }) => getByID(id),
  },
};

export default resolvers;
