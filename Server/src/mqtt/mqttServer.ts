const mongoPersistence = require('aedes-persistence-mongodb')
import mongoose from "mongoose";
import config from "../config"
const port = config.mqttPort;


mongoPersistence({
    db: mongoose.connection.useDb(config.mongoDbName).db
})

const aedes = require('aedes')({
    persistence: mongoPersistence({
        url: 'mongodb://127.0.0.1/byemo',
        // Optional ttl settings
        ttl: {
            packets: 300, // Number of seconds
            subscriptions: 300
        }
    }),
    authenticate: (client, username, password, callback) => {



    },
    authorizePublish: (client, packet, callback) => {

    },

    authorizeSubscribe: (client, packet, callback) => {

    }
});
const server = require('net').createServer(aedes.handle);
const httpServer = require('http').createServer()
const ws = require('websocket-stream')
ws.createServer({ server: httpServer }, aedes.handle)

// Start MQTT Broker for devices using aedes
export const mqttServer = () => {
    return new Promise((res, rej) => {
        server.listen(port, function(res) {
            console.log('Ades MQTT listening on port: ' + port)
            aedes.publish({ topic: 'aedes/hello', payload: "I'm broker " + aedes.id })
            return res;
        })
    })
}


