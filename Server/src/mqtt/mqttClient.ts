import * as mqtt from "async-mqtt"
import config from "../config";

export var temp = "70";
export var motion = "No motion Detected."


let mqttServiceWorker = mqtt.connect(config.mqttURL);;

export const mqttClient = {
    start,
    publish,

}

// Start MQTT watcher service.
async function start(){
    // Connect to default mqtt url.
    console.log('starting mqtt client')
    return mqttServiceWorker;
    
}

mqttServiceWorker.on('connect', function () {
    mqttServiceWorker.subscribe('/esp/temp');
  })

mqttServiceWorker.on('message', (topic, message) => {
    console.log(message.toString());
    temp = message.toString();
    motion = message.toString();
  });
   
async function publish(_ , {topic, message}){
    console.log(`sending message to ${topic} saying ${JSON.stringify(message)}`)
    try {
        await mqttServiceWorker.publish( topic, message);
        return message;
    } catch (e){
        console.log(e.stack);
        process.exit();
    }
}

