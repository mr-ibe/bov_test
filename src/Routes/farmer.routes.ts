import { Router } from 'express'
import { createFarmerController } from '../Modules/Farmer/CreateFarmer';

const FarmerRouter = Router();

FarmerRouter.post('/', (req, res) => createFarmerController.createFarmer(req, res))


export { FarmerRouter }
