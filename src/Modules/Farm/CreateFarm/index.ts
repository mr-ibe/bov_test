import { FarmRepository } from "../../../Repsitories/farm.repsoitory";
import { CreateFarmController } from "./createFarmController";
import { CreateFarmService } from "./createFarmService";

const farmRepository = new FarmRepository();
const createFarmService = new CreateFarmService(farmRepository)
const createFarmController = new CreateFarmController(createFarmService);

export { createFarmController }