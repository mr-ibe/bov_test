import { GetFarmerPayByMonthDto } from "../../../Dtos/Production";

export interface IGetYearMonthlyProductionByFarmerService {
    execute(farmerId: String, year: number): Promise<GetFarmerPayByMonthDto[]>
}