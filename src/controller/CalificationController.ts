import { getRepository, LessThan } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Calification } from "../entity/Calification";
import { validate } from "class-validator";

export class CalificationController {
  static async all(request: Request, response: Response, next: NextFunction) {
    let Repository = getRepository(Calification);
    const aux = await Repository.find();
    return response.send(aux);
  }

  static async one(request: Request, response: Response, next: NextFunction) {
    let Repository = getRepository(Calification);
    return response.send(Repository.findOne(request.params.id));
  }

  static async save(request: Request, response: Response, next: NextFunction) {
    let Repository = getRepository(Calification);
    return response.send(await Repository.save(request.body));
  }

  static async remove(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    let Repository = getRepository(Calification);
    let hceToRemove = await Repository.findOne(request.params.id);
    await Repository.remove(hceToRemove);
  }
}
