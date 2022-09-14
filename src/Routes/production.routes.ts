import { Router } from 'express'
import { createProductionController } from '../Modules/Production/CreateProduction';
import getDailyProductionVolumeByFarmerController from '../Modules/Production/GetDailyProductionVolumeByFarmer';
import { getYearMonthlyController } from '../Modules/Production/GetYearMonthlyProductionByFarmer';
import { getMonthProductionByFarmerController } from '../Modules/Production/GetMonthProductionByFarmer'
const ProductionRouter = Router();

ProductionRouter.get('/get-daily-production-volume/:farmerId/:month/:year', (req, res) => getDailyProductionVolumeByFarmerController.getDailyProductionVolume(req, res))

ProductionRouter.get('/get-farmer-pay-by-month/:farmerId/:month/:year', (req, res) => getMonthProductionByFarmerController.GetMonthProduction(req, res))

ProductionRouter.post('/', (req, res) => createProductionController.createProduction(req, res))

ProductionRouter.get('/get-year-monthly-production-by-farmer/:farmerId/:year', (req, res) => getYearMonthlyController.GetYearMonthlyProductionByFarmer(req, res))


export { ProductionRouter }
