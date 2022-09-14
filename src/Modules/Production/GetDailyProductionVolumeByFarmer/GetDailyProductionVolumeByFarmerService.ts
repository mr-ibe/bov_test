import { GetDailyProductionDto } from "../../../Dtos/Production"
import { IProductionRepository } from "../../../Repsitories/Interface/IProductionRepsoitory"
import { IGetDailyProductionVolumeService } from "./IGetDailyProductionVolumeByFarmerService";

class GetDailyProductionVolumeService implements IGetDailyProductionVolumeService {
    constructor(private readonly ProductionRepository: IProductionRepository) {
    }
    async execute(farmerId: string, month: number, year: number): Promise<GetDailyProductionDto> {
        const production = await this.ProductionRepository.getByMonthAndFarmer(farmerId, month, year);
        let total = 0;
        production.forEach((x: any) => {
            total += x.quantityLiters;
        });
        const monthlyAverage = total / production.length;

        return { production, monthlyAverage } as GetDailyProductionDto;
    }
}

export { GetDailyProductionVolumeService }