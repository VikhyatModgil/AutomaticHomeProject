import mongoose, { Schema } from "mongoose";
var name = new Schema({
name: String
});
export const Cat = mongoose.model("Cats", name);