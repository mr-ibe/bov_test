import { FarmerRepository } from "../../../Repsitories/farmer.repsoitory";
import { ProductionRepository } from "../../../Repsitories/production.repository";
import { GetYearMonthlyProductionByFarmerController } from "./getYearMonthlyProductionByFarmerController";
import { GetYearMonthlyProductionByFarmerService } from './getYearMonthlyProductionByFarmerService'

const productionRepository = new ProductionRepository();
const farmerRepository = new FarmerRepository();
const getYearMonthlyProductionByFarmerService = new GetYearMonthlyProductionByFarmerService(productionRepository, farmerRepository)

const getYearMonthlyController = new GetYearMonthlyProductionByFarmerController(getYearMonthlyProductionByFarmerService)

export { getYearMonthlyController }