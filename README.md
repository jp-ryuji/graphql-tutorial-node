- The repository is based on the course: [The basics of GraphQL and Apollo](https://www.udemy.com/introduction-to-graphql-and-apollo-building-modern-apis)
- Despite the name, The basics of GraphQL and Apollo, there's no material on Apollo. Just accessing APIs via graphiql.

### Getting Started

1. Install the packages
  ```
  $ yarn install
  ```

2. Run the server
  ```
  $ yarn start
  ```

### How to access APIs via graphiql

1. Access: http://localhost:4000/graphiql

2. Input the followings for Query.
```
{
  authors {
    id
    name
    age
    books
  }
}
```
```
{
  author(id: 21) {
    id
    name
    age
    books
  }
}
```

3. Input the followings for Mutation.
```
mutation {
  addAuthor(name: "AuthorFoo", age: 20, books: ["BookBar", "BookBuzz"]) {
    name
    age
    books
  }
}
```
```
mutation {
  updateAuthor(id: "0b9e5720-76d8-11e8-a8c0-c34d42b486d2", name: "AuthorFooV2") {
    name
  }
}
```
```
mutation {
  deleteAuthor(id: "458170f0-76d6-11e8-8381-97e708131df3") {
    name
  }
}
```

### How to check the data in mongodb
```
$ mongo

> show dbs

> use graphqlTutorial
switched to db graphqlTutorial

> db.authors.find().pretty()
{
        "_id" : ObjectId("5b2e2b091e8506c808d4fc6b"),
        "books" : [
                "BookBar",
                "BookBuzz"
        ],
        "age" : 20,
        "name" : "AuthorFoo",
        "id" : "458170f0-76d6-11e8-8381-97e708131df3",
        "__v" : 0
}
```
