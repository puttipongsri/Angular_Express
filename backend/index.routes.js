import { Router } from "express";
import user from "./users/user.routes.js";


const router = Router();

router.use("/users", user);

export default router;
