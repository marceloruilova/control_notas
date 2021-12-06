import { getRepository, LessThan } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Student } from "../entity/Student";
import { validate } from "class-validator";

export class StudentController {
  static async all(request: Request, response: Response, next: NextFunction) {
    let Repository = getRepository(Student);
    const aux = await Repository.find({
      relations: ["califications", "courses"],
    });
    return response.send(aux);
  }

  static async one(request: Request, response: Response, next: NextFunction) {
    let Repository = getRepository(Student);
    return response.send(Repository.findOne(request.params.id));
  }

  static async save(request: Request, response: Response, next: NextFunction) {
    let Repository = getRepository(Student);
    return response.send(await Repository.save(request.body));
  }

  //saveTeacher with id
  static async saveteacher(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    let Repository = getRepository(Student);
    let aux = await Repository.findOne(request.body.teacher_id, {
      relations: ["teachers"],
    });
    aux.teachers = [request.body.teachers];
    return response.send(await Repository.save(aux));
  }

  static async remove(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    let Repository = getRepository(Student);
    let hceToRemove = await Repository.findOne(request.params.id);
    await Repository.remove(hceToRemove);
  }
}
