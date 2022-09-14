import { Router } from 'express'
import { createFarmController } from '../Modules/Farm/CreateFarm';

const FarmRouter = Router();

FarmRouter.post('/', (req, res) => createFarmController.createFarm(req, res))


export { FarmRouter }
