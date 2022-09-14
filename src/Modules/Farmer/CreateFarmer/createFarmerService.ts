import { CreateFarmerDto, FarmerCreatedDto } from "../../../Dtos/Farmer"
import { IFarmerRepository } from "../../../Repsitories/Interface/IFarmerRepsoitory"
import { ICreateFarmerService } from "./ICreateFarmerService"

class CreateFarmerService implements ICreateFarmerService {
    constructor(private readonly FarmerRepository: IFarmerRepository) {
    }

    async execute(data: CreateFarmerDto): Promise<FarmerCreatedDto> {
        const farmer = await this.FarmerRepository.create(data)
        return farmer
    }
}

export { CreateFarmerService }