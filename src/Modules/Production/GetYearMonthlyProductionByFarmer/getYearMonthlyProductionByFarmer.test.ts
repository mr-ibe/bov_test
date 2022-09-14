import { describe, expect } from '@jest/globals';
import { CreateFarmerDto, FarmerDto } from '../../../Dtos/Farmer';
import { GetByMonthAndFarmerDto, GetFarmerPayByMonthDto } from '../../../Dtos/Production';
import { FarmerRepository } from '../../../Repsitories/farmer.repsoitory';
import { ProductionRepository } from "../../../Repsitories/production.repository"
import { GetYearMonthlyProductionByFarmerService } from "./getYearMonthlyProductionByFarmerService"

describe('Get year monthly production by farmer', () => {
    const farmerRepository = new FarmerRepository();
    const productionRepository = new ProductionRepository()
    const data: any = [
        { _id: { month: 7, year: 2022 }, total: 93 },
        { _id: { month: 1, year: 2022 }, total: 60 }
    ];
    const farmer: FarmerDto = {
        farmerName: 'test',
        id: '3333',
    }

    jest.spyOn(productionRepository, 'getProductionByFarmerAndYear').mockImplementation(() => Promise.resolve(data));
    jest.spyOn(farmerRepository, 'getById').mockImplementation(() => Promise.resolve(farmer));


    it('Should be able to get year monthly production by farmer', async () => {
        const getMonthProductionByFarmerService = new GetYearMonthlyProductionByFarmerService(productionRepository, farmerRepository);

        const production = await getMonthProductionByFarmerService.execute('631f9ab864880d78578a459f', 2021);
        expect(production).toBeDefined()
    })

})