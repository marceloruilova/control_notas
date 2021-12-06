import { Router, Request, Response } from "express";
import { CourseController } from "../controller/CourseController";
import { checkJwt } from "../middlewares/checkJwt";
import { checkRole } from "../middlewares/checkRole";

const router = Router();

//Get all users
router.get("/", CourseController.all);

// Get one user
router.get("/:id([0-9]+)", CourseController.one);

router.post("/save", CourseController.save);

//Delete one user
router.delete("/:id([0-9]+)", CourseController.remove);

export default router;
