import Farmer from '../Entities/Farmer'
import { FarmerCreatedDto, FarmerDto } from '../Dtos/Farmer';
import { IFarmerRepository } from './Interface/IFarmerRepsoitory';
import { AppError } from '../ErrorHandler/AppError';

class FarmerRepository implements IFarmerRepository {
    async create(data: FarmerCreatedDto): Promise<FarmerCreatedDto> {
        try {
            const farmer: any = await Farmer.create(data);
            const farmerData = {
                id: farmer._id,
                farmerName: farmer.farmerName,
                farmId: farmer.farmId,
                createdAt: farmer.createdAt
            };
            return farmerData as FarmerCreatedDto
        } catch (error) {
            console.log(error);
            throw new AppError('Internal Error', 500);
        }
    }

    async getById(id: string): Promise<FarmerDto> {
        try {
            const farmer: any = await Farmer.findById(id).populate('farmId');

            return farmer as FarmerDto;
        } catch (error) {
            console.log(error);
            throw new AppError('Internal Error', 500);
        }

    }
}

export { FarmerRepository }