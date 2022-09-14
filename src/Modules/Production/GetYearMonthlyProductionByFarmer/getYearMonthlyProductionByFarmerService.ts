import { FarmerDto } from "../../../Dtos/Farmer";
import { GetFarmerPayByMonthDto } from "../../../Dtos/Production"
import { calculatePrice } from "../../../Helpers/CalculatePrice";
import { IFarmerRepository } from "../../../Repsitories/Interface/IFarmerRepsoitory";
import { IProductionRepository } from "../../../Repsitories/Interface/IProductionRepsoitory"
import { IGetYearMonthlyProductionByFarmerService } from "./IGetYearMonthlyProductionByFarmerService";

class GetYearMonthlyProductionByFarmerService implements IGetYearMonthlyProductionByFarmerService {
    constructor(private readonly ProductionRepository: IProductionRepository, private readonly FarmerRepository: IFarmerRepository) {
    }

    async execute(farmerId: string, year: number): Promise<GetFarmerPayByMonthDto[]> {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        const farmer: FarmerDto = await this.FarmerRepository.getById(farmerId);
        const prod = await this.ProductionRepository.getProductionByFarmerAndYear(farmerId, year);
        const factoryDistance = farmer?.farmId?.factoryDistance;

        const data = prod.map((x: any) => {
            return {
                month: months[x._id.month - 1],
                amount: calculatePrice(x.total, Number(factoryDistance), x._id.month),
            }
        })

        return data
    }
}

export { GetYearMonthlyProductionByFarmerService }