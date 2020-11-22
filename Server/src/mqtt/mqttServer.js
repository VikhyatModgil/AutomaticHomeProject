"use strict";
exports.__esModule = true;
exports.mqttServer = void 0;
var mongoPersistence = require('aedes-persistence-mongodb');
var mongoose_1 = require("mongoose");
var config_1 = require("../config");
var port = config_1["default"].mqttPort;
mongoPersistence({
    db: mongoose_1["default"].connection.useDb(config_1["default"].mongoDbName).db
});
var aedes = require('aedes')({
    persistence: mongoPersistence({
        url: 'mongodb://127.0.0.1/byemo',
        // Optional ttl settings
        ttl: {
            packets: 300,
            subscriptions: 300
        }
    }),
    authenticate: function (client, username, password, callback) {
    },
    authorizePublish: function (client, packet, callback) {
    },
    authorizeSubscribe: function (client, packet, callback) {
    }
});
var server = require('net').createServer(aedes.handle);
var httpServer = require('http').createServer();
var ws = require('websocket-stream');
ws.createServer({ server: httpServer }, aedes.handle);
// Start MQTT Broker for devices using aedes
var mqttServer = function () {
    return new Promise(function (res, rej) {
        server.listen(port, function (res) {
            console.log('Ades MQTT listening on port: ' + port);
            aedes.publish({ topic: 'aedes/hello', payload: "I'm broker " + aedes.id });
            return res;
        });
    });
};
exports.mqttServer = mqttServer;
