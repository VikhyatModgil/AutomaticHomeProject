import { mqttClient, temp } from "../mqtt/mqttClient";


export const resolvers = {
  Query: {
    hello: () => "hi",
  },
  Mutation: {
    sendMqttMessage: async( _id, data) => {
      return mqttClient.publish(_id, data)
    }
  }
};
