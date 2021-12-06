import { Router, Request, Response } from "express";
import auth from "./auth";
import user from "./user";
import student from "./student";
import teacher from "./teacher";
import course from "./course";
import calification from "./calification";

const routes = Router();

routes.use("/auth", auth);
routes.use("/user", user);
routes.use("/student", student);
routes.use("/teacher", teacher);
routes.use("/course", course);
routes.use("/calification", calification);

export default routes;
