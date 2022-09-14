import { CreateFarmDto, FarmDto } from "../../../Dtos/Farm";

export interface ICreateFarmService {
    execute(data: CreateFarmDto): Promise<FarmDto>
}