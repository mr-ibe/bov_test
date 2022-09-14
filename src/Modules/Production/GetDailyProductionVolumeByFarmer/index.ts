import { FarmerRepository } from "../../../Repsitories/farmer.repsoitory";
import { ProductionRepository } from "../../../Repsitories/production.repository";
import { GetDailyProductionVolumeByFarmerController } from "./getDailyProductionVolumeByFarmerController";
import { GetDailyProductionVolumeService } from "./GetDailyProductionVolumeByFarmerService";

const productionRepository = new ProductionRepository();
const getDailyProductionVolumeByFarmerService = new GetDailyProductionVolumeService(productionRepository);
const getDailyProductionVolumeByFarmerController = new GetDailyProductionVolumeByFarmerController(getDailyProductionVolumeByFarmerService);

export default getDailyProductionVolumeByFarmerController