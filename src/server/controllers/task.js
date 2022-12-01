import Task from "../models/task";

const TaskProgress = {
  Pending: "Pending",
  InProgress: "InProgress",
  Done: "Done",
};

export const getTask = async (req, res) => {
  const { id } = req.params;
  const { email } = req.user;

  try {
    const task = await Task.findOne({ creator: email, _id: id });

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ ...task._doc });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getTasks = async (req, res) => {
  const { email } = req.user;

  try {
    const tasks = await Task.find({ creator: email });
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const createTask = async (req, res) => {
  const { email } = req.user;
  const { title, description } = req.body;

  try {
    const result = await Task.create({
      title,
      description,
      creator: email,
      progress: TaskProgress.Pending,
    });

    res.status(201).json({ ...result._doc });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  const { email } = req.user;
  const { title, description, progress } = req.body;

  try {
    await Task.updateOne(
      { creator: email, _id: id },
      {
        title,
        description,
        progress: TaskProgress[progress],
      }
    );

    res.status(201).json({ ...req.body });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  const { email } = req.user;

  try {
    await Task.deleteOne({ creator: email, _id: id });

    res.status(202).json({ message: "Task was deleted" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
