The repository is based on the course: [The basics of GraphQL and Apollo](https://www.udemy.com/introduction-to-graphql-and-apollo-building-modern-apis)

#### How to use

1. Run the server
  ```
  $ yarn start
  ```

2. Access: http://localhost:4000/graphiql

3. Input the followings.
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
