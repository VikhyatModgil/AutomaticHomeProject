import * as mqtt from "async-mqtt"
import config from "../config"

let mqttServiceWorker;

export const mqttClient = {
    start,
    publish,

}

// Start MQTT watcher service.
async function start(){
    // Connect to default mqtt url.
    mqttServiceWorker = mqtt.connect(config.mqttURL);
    return mqtt;
}

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

