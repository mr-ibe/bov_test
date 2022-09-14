import Production from '../Entities/Production'
import { GetByMonthAndFarmerDto, ProductionDto } from '../Dtos/Production';
import { IProductionRepository } from './Interface/IProductionRepsoitory';
import { AppError } from '../ErrorHandler/AppError';

class ProductionRepository implements IProductionRepository {
    async getProductionByFarmerAndYear(farmerId: string, year: number): Promise<ProductionDto[]> {
        try {
            const data = await Production.aggregate(
                [
                    { $match: { farmerId, "$expr": { "$eq": [{ "$year": "$dateRegistered" }, year] } } },
                    {
                        $group: {
                            _id: {
                                month: { $month: "$dateRegistered" },
                                year: { $year: "$dateRegistered" }
                            },
                            total: { $sum: "$quantityLiters" }
                        },
                    },
                ],
            )
            return data;
        } catch (error) {
            console.log(error);
            throw new AppError('Internal Error', 500);
        }
    }

    async getByMonthAndFarmer(farmerId: string, month: number, year: number): Promise<GetByMonthAndFarmerDto[]> {
        try {
            const data: GetByMonthAndFarmerDto[] = await Production.find({
                farmerId,
                "$expr": {
                    "$and": [
                        { "$eq": [{ "$year": "$dateRegistered" }, year] },
                        { "$eq": [{ "$month": "$dateRegistered" }, month] }
                    ]
                }
            })
            return data;
        } catch (error) {
            console.log(error);
            throw new AppError('Internal Error', 500);
        }
    }
    async create(data: ProductionDto): Promise<ProductionDto> {
        try {
            const prod = await Production.create(data)
            return prod as ProductionDto;
        } catch (error) {
            console.log(error);
            throw new AppError('Internal Error', 500);
        }
    }
}

export { ProductionRepository }