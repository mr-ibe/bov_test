import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan'
import { AppError } from '../ErrorHandler/AppError';
import { router } from '../Routes';
import cors from 'cors'
import Database from './database'

class AppServer {
    public server;

    constructor() {
        Database();
        this.server = express()
        this.middlewares();
        this.routes();
        this.errorHandler();
        this.defaultHeaders();
    }

    middlewares() {
        this.server.use(express.json())
        this.server.use(cors())
        this.server.use(morgan(`Method: :method :url :status :res[content-length] - :response-time ms`))
    }
    routes() {
        this.server.use('/api', router)
    }

    errorHandler() {
        this.server.use((err: Error, req: Request, res: Response, next: NextFunction) => {
            if (err instanceof AppError) {
                return res.status(err.statusCode).json({ message: err.message })
            }
            return res.status(500).json({ message: `Internal Server Error ${err.message}` })
        })
    }

    defaultHeaders() {
        this.server.use((req, res, next) => {
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader(
                "Access-Control-Allow-Headers",
                "Origin, X-Requested-With, Content-Type, Accept"
            );
            res.setHeader(
                "Access-Control-Allow-Methods",
                "GET, POST, PATCH, DELETE, OPTIONS"
            );
            next();
        });
    }
}

export default new AppServer().server