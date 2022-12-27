import { Schema, model } from "mongoose";

const RoomSchema = new Schema({
    name: {
        type: String,
        required: [true, "Room name is required"],
        maxLength: [26, "Room name is too long"]
    },
    createdBy: String
}, { timestamps: true })

export default model("room", RoomSchema)