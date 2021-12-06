import { getRepository, LessThan } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { User } from "../entity/User";
import { validate } from "class-validator";

export class UserController {
  static async all(request: Request, response: Response, next: NextFunction) {
    const userRepository = getRepository(User);
    const aux = await userRepository.find({
      select: ["id", "username", "role"],
    });
    return response.send(aux);
  }

  static async one(request: Request, response: Response, next: NextFunction) {
    const userRepository = getRepository(User);
    return await userRepository.findOne(request.params.id, {
      select: ["id", "username", "role"],
    });
  }
  //Add edit
  static async save(request: Request, response: Response, next: NextFunction) {
    let { username, password, role } = request.body;
    let user = new User();
    user.username = username;
    user.password = password;
    user.role = role;

    const errors = await validate(user);
    if (errors.length > 0) {
      response.status(400).send(errors);
      return;
    }
    //Hash the password, to securely store on DB
    user.hashPassword();
    const userRepository = getRepository(User);
    //Try to save. If fails, the username is already in use
    try {
      await userRepository.save(user);
    } catch (e) {
      response.status(409).send("username already in use");
      return;
    }
    //If all ok, send 201 response
    response.status(201).send("User created");
  }
  static editUser = async (req: Request, res: Response) => {
    //Get the ID from the url
    const id = req.params.id;

    //Get values from the body
    const { username, role } = req.body;

    //Try to find user on database
    const userRepository = getRepository(User);
    let user;
    try {
      user = await userRepository.findOneOrFail(id);
    } catch (error) {
      //If not found, send a 404 response
      res.status(404).send("User not found");
      return;
    }

    //Validate the new values on model
    user.username = username;
    user.role = role;
    const errors = await validate(user);
    if (errors.length > 0) {
      res.status(400).send(errors);
      return;
    }

    //Try to safe, if fails, that means username already in use
    try {
      await userRepository.save(user);
    } catch (e) {
      res.status(409).send("username already in use");
      return;
    }
    //After all send a 204 (no content, but accepted) response
    res.status(204).send();
  };

  static async remove(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    const userRepository = getRepository(User);
    let userToRemove: User;
    try {
      userToRemove = await userRepository.findOneOrFail(request.params.id);
    } catch (error) {
      response.status(404).send("User not found");
      return;
    }
    await userRepository.remove(userToRemove);

    //After all send a 204 (no content, but accepted) response
    response.status(204).send();
  }
}
