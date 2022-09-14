import { CreateProductionDto, ProductionDto } from "../../../Dtos/Production"
import { IProductionRepository } from "../../../Repsitories/Interface/IProductionRepsoitory"
import { ICreateProductionService } from "./ICreateProductionService"

class CreateProductionService implements ICreateProductionService {
    constructor(private readonly ProductionRepository: IProductionRepository) {
    }

    async execute(data: CreateProductionDto): Promise<ProductionDto> {
        const production = await this.ProductionRepository.create(data)
        return production
    }
}

export { CreateProductionService }