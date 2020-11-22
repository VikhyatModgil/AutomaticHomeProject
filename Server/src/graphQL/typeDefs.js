"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.typeDefs = void 0;
var apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Query {\n    hello: String!\n  }\n  type Mutation {\n    sendMqttMessage(topic: String!, message:String!): String!\n  }\n  type Light{\n    id: ID!,\n    name: String!,\n    status: Boolean!\n  }\n\n\n"], ["\n  type Query {\n    hello: String!\n  }\n  type Mutation {\n    sendMqttMessage(topic: String!, message:String!): String!\n  }\n  type Light{\n    id: ID!,\n    name: String!,\n    status: Boolean!\n  }\n\n\n"])));
var templateObject_1;
