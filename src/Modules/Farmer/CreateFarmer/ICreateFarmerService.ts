import { CreateFarmerDto, FarmerCreatedDto } from "../../../Dtos/Farmer";

export interface ICreateFarmerService {
    execute(data: CreateFarmerDto): Promise<FarmerCreatedDto>
}