import AuthorModel from './models/author';

const resolvers = {
  Query: {
    authors: (root, { age }) => AuthorModel.find({ age }),
    author: (root, { id }) => AuthorModel.findOne({ id })
  },
  Mutation: {
    addAuthor: (root, { name, age, books }) => {
      const author = new AuthorModel({ age, name, books });
      return author.save();
    },
    deleteAuthor: (root, { id }) => AuthorModel.findOneAndRemove({ id }),
    updateAuthor: (root, { id, name }) => AuthorModel.findOneAndUpdate({ id }, { name })
  }
};

export default resolvers;
