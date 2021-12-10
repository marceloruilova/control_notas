import { getRepository, LessThan, RepositoryNotTreeError } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Teacher } from "../entity/Teacher";
import { validate } from "class-validator";

export class TeacherController {
  static async all(request: Request, response: Response, next: NextFunction) {
    let Repository = getRepository(Teacher);
    const aux = await Repository.find();
    return response.send(aux);
  }

  static async one(request: Request, response: Response, next: NextFunction) {
    let Repository = getRepository(Teacher);
    return response.send(Repository.findOne(request.params.id));
  }

  static async save(request: Request, response: Response, next: NextFunction) {
    let Repository = getRepository(Teacher);
    await Repository.save(request.body)
      .then((result) => {
        return response.send(result);
      })
      .catch((error) => {
        return response.send(error);
      });
  }

  static async remove(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    let Repository = getRepository(Teacher);
    let hceToRemove = await Repository.findOne(request.params.id);
    await Repository.remove(hceToRemove);
  }
}
