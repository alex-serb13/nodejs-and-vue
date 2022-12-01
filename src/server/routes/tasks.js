import { Router } from "express";
import {
  getTask,
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/task";

const router = Router();

router.get("/", getTasks);
router.post("/", createTask);
router.get("/:id", getTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;
