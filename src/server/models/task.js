import mongoose from "mongoose";

const TaskSchema = mongoose.Schema({
  title: String,
  description: String,
  progress: String,
  creator: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export default mongoose.model("Task", TaskSchema);
