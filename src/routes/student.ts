import { Router, Request, Response } from "express";
import { StudentController } from "../controller/StudentController";
import { checkJwt } from "../middlewares/checkJwt";
import { checkRole } from "../middlewares/checkRole";

const router = Router();

//Get all users
router.get("/", StudentController.all);

// Get one user
router.get("/:id([0-9]+)", StudentController.one);

//add new info to the prescription
router.post("/save", StudentController.save);

//Delete one user
router.delete("/:id([0-9]+)", StudentController.remove);

export default router;
