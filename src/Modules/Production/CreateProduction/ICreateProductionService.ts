import { CreateProductionDto, ProductionDto } from "../../../Dtos/Production";

export interface ICreateProductionService {
    execute(data: CreateProductionDto): Promise<ProductionDto>
}