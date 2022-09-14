import { FarmerCreatedDto, FarmerDto } from "../../Dtos/Farmer";

export interface IFarmerRepository {
    create(data: FarmerCreatedDto): Promise<FarmerCreatedDto>;
    getById(id: string): Promise<FarmerDto>;
}
