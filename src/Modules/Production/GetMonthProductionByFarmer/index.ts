import { FarmerRepository } from "../../../Repsitories/farmer.repsoitory";
import { ProductionRepository } from "../../../Repsitories/production.repository";
import { GetMonthProductionByFarmerService } from './getMonthProductionByFarmerService'
import { GetMonthlyProductionByFarmerController } from './getMonthProductionByFarmerController';

const productionRepository = new ProductionRepository();
const farmerRepository = new FarmerRepository();
const getMonthlyProductionByFarmerService = new GetMonthProductionByFarmerService(productionRepository, farmerRepository)

const getMonthProductionByFarmerController = new GetMonthlyProductionByFarmerController(getMonthlyProductionByFarmerService)

export { getMonthProductionByFarmerController }