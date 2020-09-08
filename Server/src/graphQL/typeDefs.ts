import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    hello: String!
  }
  type Mutation {
    sendMqttMessage(topic: String!, message:String!): String!
  }
  type Light{
    id: ID!,
    name: String!,
    status: Boolean!
  }


`;