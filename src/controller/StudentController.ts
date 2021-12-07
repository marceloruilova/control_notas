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

  //save student and info with id
  static async save(request: Request, response: Response, next: NextFunction) {
    let Repository = getRepository(Student);
    let student = request.body;
    return response.send(await Repository.save(student));
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
