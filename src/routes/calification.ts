import { Router, Request, Response } from "express";
import { CalificationController } from "../controller/CalificationController";
import { checkJwt } from "../middlewares/checkJwt";
import { checkRole } from "../middlewares/checkRole";

const router = Router();

//Get all users
router.get("/", CalificationController.all);

// Get one user
router.get("/:id([0-9]+)", CalificationController.one);

//add new info to the prescription
router.post("/save", CalificationController.save);

//Delete one user
router.delete("/:id([0-9]+)", CalificationController.remove);

export default router;
