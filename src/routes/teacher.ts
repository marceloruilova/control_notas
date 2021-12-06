import { Router, Request, Response } from "express";
import { TeacherController } from "../controller/TeacherController";
import { checkJwt } from "../middlewares/checkJwt";
import { checkRole } from "../middlewares/checkRole";

const router = Router();

//Get all users
router.get("/", TeacherController.all);

// Get one user
router.get("/:id([0-9]+)", TeacherController.one);

//add new info to the prescription
router.post("/save", TeacherController.save);

//Delete one user
router.delete("/:id([0-9]+)", TeacherController.remove);

export default router;
