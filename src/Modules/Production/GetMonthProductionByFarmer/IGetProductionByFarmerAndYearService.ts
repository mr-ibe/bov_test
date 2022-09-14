import { GetFarmerPayDto } from "../../../Dtos/Production";

export interface IGetMonthlyProductionByFarmerService {
    execute(farmerId: String, month: number, year: number): Promise<GetFarmerPayDto>
}