import dotenv from 'dotenv';
dotenv.config();

import express, { Application } from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';

class Server {
  public app: Application;
  private port: String | Number;

  constructor() {
    this.port = process.env.PORT!;
    this.app = express();
    this.config();
    this.routes();
  }

  config() {
    this.app.use(bodyParser.urlencoded({ extended: true }))
      .use(bodyParser.json())
      .use(morgan('dev'))
      .use(cors());
  }

  routes() {
    this.app.get('/', (req, res) => res.send(true));
  }
  
  start() {
    this.app.listen(this.port, () => {
      console.log(`Server running on ${this.port}`);
    });
  }
}

const server = new Server();
server.start();
