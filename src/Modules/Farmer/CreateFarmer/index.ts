import { FarmerRepository } from "../../../Repsitories/farmer.repsoitory";
import { CreateFarmerController } from "./createFarmerController";
import { CreateFarmerService } from "./createFarmerService";

const farmerRepository = new FarmerRepository();
const createFarmerService = new CreateFarmerService(farmerRepository)
const createFarmerController = new CreateFarmerController(createFarmerService);

export { createFarmerController }