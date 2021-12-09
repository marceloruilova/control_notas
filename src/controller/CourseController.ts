import { getRepository, LessThan } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Course } from "../entity/Course";
import { validate } from "class-validator";

export class CourseController {
  static async all(request: Request, response: Response, next: NextFunction) {
    let Repository = getRepository(Course);
    const aux = await Repository.find();
    return response.send(aux);
  }

  static async one(request: Request, response: Response, next: NextFunction) {
    let Repository = getRepository(Course);
    return response.send(Repository.findOne(request.params.id));
  }

  static async save(request: Request, response: Response, next: NextFunction) {
    let Repository = getRepository(Course);
    return response.send(await Repository.save(request.body));
  }
  //get course by name and level
  static async bynameandlevel(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    const Repository = getRepository(Course);
    const aux = await Repository.find({
      where: { name: request.query.name, level: request.query.level },
      relations: ["students"],
    });
    return response.send(aux);
  }
  static async remove(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    let Repository = getRepository(Course);
    let hceToRemove = await Repository.findOne(request.params.id);
    await Repository.remove(hceToRemove);
  }
}
