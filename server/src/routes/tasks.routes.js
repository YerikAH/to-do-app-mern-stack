import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  createTask,
  deleteTask,
  getTask,
  getTasks,
  updateTask,
} from "../controllers/tasks.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { taskSchema } from "../schemas/tasks.schema.js";
const route = Router();

route.get("/tasks", authRequired, getTasks);
route.get("/tasks/:id", authRequired, getTask);
route.post("/tasks", authRequired, validateSchema(taskSchema), createTask);
route.delete("/tasks/:id", authRequired, deleteTask);
route.put("/tasks/:id", authRequired, updateTask);

export default route;
