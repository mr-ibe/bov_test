import { FarmDto } from "../../Dtos/Farm";
import { GetByMonthAndFarmerDto, ProductionDto } from "../../Dtos/Production";

export interface IProductionRepository {
    create(data: ProductionDto): Promise<ProductionDto>;
    getByMonthAndFarmer(farmerId: string, month: number, year: number): Promise<GetByMonthAndFarmerDto[]>
    getProductionByFarmerAndYear(farmerId: string, year: number): Promise<ProductionDto[]>
}
