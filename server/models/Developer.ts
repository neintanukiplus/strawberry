import { model, Schema } from "mongoose";

const DeveloperSchema = new Schema({
    name: String,
    hash: String,
    key: String
})

export default model("developer", DeveloperSchema)