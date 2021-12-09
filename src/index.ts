import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import routes from "./routes";
import { Student } from "./entity/Student";
import { Teacher } from "./entity/Teacher";
import { Course } from "./entity/Course";
import { Calification } from "./entity/Calification";

createConnection()
  .then(async (connection) => {
    // create express app
    const app = express();
    var cors = require("cors");
    app.use(bodyParser.json());
    app.use(cors());

    // register express routes from defined application routes
    app.use("/", routes);
    // setup express app here
    // ...

    // setup express app here
    // ...

    // start express server
    app.listen(3000);

    // insert new data for test
    const course1 = await connection.manager.save(
      connection.manager.create(Course, {
        name: "History",
        level: "3",
        percentage: 50,
      })
    );
    const course2 = await connection.manager.save(
      connection.manager.create(Course, {
        name: "Phisics",
        level: "1",
        percentage: 50,
      })
    );
    const calification1 = await connection.manager.save(
      connection.manager.create(Calification, {
        note: 20,
      })
    );
    const calification2 = await connection.manager.save(
      connection.manager.create(Calification, {
        note: 20,
      })
    );
    const student = await connection.manager.save(
      connection.manager.create(Student, {
        ci: "148171817",
        first_name: "Juan",
        last_name: "Aleluya",
        discipline: "A",
        califications: [calification1, calification2],
        courses: [course1, course2],
      })
    );
    const student2 = await connection.manager.save(
      connection.manager.create(Student, {
        ci: "148171047",
        first_name: "Juan",
        last_name: "Aleluya",
        discipline: "A",
        califications: [calification2],
        courses: [course2],
      })
    );
    await connection.manager.save(
      connection.manager.create(Teacher, {
        ci: "141181815",
        first_name: "Juan",
        last_name: "Aleluya",
        degree: "A",
      })
    );
    await connection.manager.save(
      connection.manager.create(Course, {
        name: "History",
        level: "3",
        percentage: 50,
        students: [student, student2],
      })
    );
    await connection.manager.save(
      connection.manager.create(Course, {
        name: "Social Science",
        level: "2",
        percentage: 50,
      })
    );
    await connection.manager.save(
      connection.manager.create(Course, {
        name: "Phisics",
        level: "1",
        percentage: 50,
      })
    );
    await connection.manager.save(
      connection.manager.create(Calification, {
        note: 20,
      })
    );
    console.log(
      "Express server has started on port 3000. Open http://localhost:3000/ to see results"
    );
  })
  .catch((error) => console.log(error));
