import { GetByMonthAndFarmerDto, GetFarmerPayDto, ProductionDto } from "../../../Dtos/Production"
import { calculatePrice } from "../../../Helpers/CalculatePrice";
import { IFarmerRepository } from "../../../Repsitories/Interface/IFarmerRepsoitory";
import { IProductionRepository } from "../../../Repsitories/Interface/IProductionRepsoitory"

class GetMonthProductionByFarmerService {
    constructor(private readonly ProductionRepository: IProductionRepository, private readonly FarmerRepository: IFarmerRepository) {
    }

    async execute(farmerId: string, month: number, year: number): Promise<GetFarmerPayDto> {
        let monthlyVolume = 0;

        const farmer = await this.FarmerRepository.getById(farmerId)
        const factoryDistance = farmer.farmId?.factoryDistance;

        const production: GetByMonthAndFarmerDto[] = await this.ProductionRepository.getByMonthAndFarmer(farmerId, month, year);
        production.forEach((x: any) => monthlyVolume += Number(x.quantityLiters))


        const prices = calculatePrice(Number(monthlyVolume), Number(factoryDistance), month)

        return { ...prices }
    }
}

export { GetMonthProductionByFarmerService }