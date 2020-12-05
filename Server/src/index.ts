import { mqttServer } from "./mqtt/mqttServer";
import { mqttClient } from "./mqtt/mqttClient";
import { apollo } from "./graphQL/apollo"
import { ip } from "./ip/ip";
import{mongooseServer} from "./mongoose/mongoose"


const startServer = async() => {

  // Start Mongoose server instance connected to MongoDB
  //const mongooseInstance = mongooseServer();

  // Start the mosquito server on localhost:1883 by default.
  const mqtt = mqttServer();

  // Start Mqtt Service to watch for incoming messages
  mqttClient.start();
  
  
  // Start a GraphQL server via Apollo on url localhost:4000 by default.
  const graphQlServer = apollo();

  // log ipv4
  const ipv4 = ip();


}

startServer();