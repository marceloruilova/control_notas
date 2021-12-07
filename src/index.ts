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
    await connection.manager.save(
      connection.manager.create(Student, {
        ci: "148171817",
        first_name: "Juan",
        last_name: "Aleluya",
        discipline: "A",
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
        grade: "5",
        level: "A",
        percentage: 50,
      })
    );
    await connection.manager.save(
      connection.manager.create(Course, {
        grade: "7",
        level: "B",
        percentage: 50,
      })
    );
    await connection.manager.save(
      connection.manager.create(Course, {
        grade: "2",
        level: "C",
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
