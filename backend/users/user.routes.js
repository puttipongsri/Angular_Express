import { Router } from "express";
import * as userController from "./user.controller.js";

const router = Router();

router.get("/", userController.getUsers);
router.post("/post", userController.insertUser);

export default router;