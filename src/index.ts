import {ApolloServer, gql} from 'apollo-server'

const typeDefs  = gql`
  type Query {
      hello: String
  }`

const resolvers = {
    Query: {
        hello: () => 'This is HBO!'
    }
}

const server = new ApolloServer({
    typeDefs,resolvers
})

server.listen()
  .then(
    ({url}) => console.info(`App on ${url}`)
  )