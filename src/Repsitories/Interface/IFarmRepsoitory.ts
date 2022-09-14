import { FarmDto } from "../../Dtos/Farm";

export interface IFarmRepository {
    create(data: FarmDto): Promise<FarmDto>;
}
