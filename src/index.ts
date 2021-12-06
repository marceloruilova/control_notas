import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import routes from "./routes";
import { User } from "./entity/User";

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

    // insert new users for test
    /*await connection.manager.save(
      connection.manager.create(User, {
      })
    );*/

    console.log(
      "Express server has started on port 3000. Open http://localhost:3000/users to see results"
    );
  })
  .catch((error) => console.log(error));
