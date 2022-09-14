import { GetDailyProductionDto } from "../../../Dtos/Production";

export interface IGetDailyProductionVolumeService {
    execute(farmerId: string, month: number, year: number): Promise<GetDailyProductionDto>
}