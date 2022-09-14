import { CreateFarmDto, FarmDto } from "../../../Dtos/Farm"
import { IFarmRepository } from "../../../Repsitories/Interface/IFarmRepsoitory"

class CreateFarmService {
    constructor(private readonly FarmRepository: IFarmRepository) {
    }

    async execute(data: CreateFarmDto): Promise<FarmDto> {
        const farm = await this.FarmRepository.create(data)
        return farm
    }
}

export { CreateFarmService }