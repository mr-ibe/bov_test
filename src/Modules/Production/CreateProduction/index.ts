import { ProductionRepository } from "../../../Repsitories/production.repository";
import { CreateProductionController } from "./createProductionController";
import { CreateProductionService } from "./createProductionService";

const productionRepository = new ProductionRepository();
const createProductionService = new CreateProductionService(productionRepository)
const createProductionController = new CreateProductionController(createProductionService);

export { createProductionController }