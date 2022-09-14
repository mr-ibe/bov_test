import Farm from '../Entities/Farm'
import { FarmDto } from '../Dtos/Farm';
import { IFarmRepository } from './Interface/IFarmRepsoitory';
import { AppError } from '../ErrorHandler/AppError';

class FarmRepository implements IFarmRepository {
    async create(data: FarmDto): Promise<FarmDto> {
        try {
            const farm: any = await Farm.create(data)

            const createdFarm = {
                id: farm._id,
                farmName: farm.farmName,
                factoryDistance: farm.factoryDistance,
                createdAt: farm.createdAt
            }
            return createdFarm as FarmDto;
        } catch (error) {
            console.log(error);
            throw new AppError('Internal Error', 500);
        }

    }
}

export { FarmRepository }