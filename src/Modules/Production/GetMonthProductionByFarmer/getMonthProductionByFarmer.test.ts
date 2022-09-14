import { describe, expect } from '@jest/globals';
import { CreateFarmerDto, FarmerDto } from '../../../Dtos/Farmer';
import { FarmerRepository } from '../../../Repsitories/farmer.repsoitory';
import { ProductionRepository } from "../../../Repsitories/production.repository"
import { GetMonthProductionByFarmerService } from "./getMonthProductionByFarmerService"

describe('Get Month production By Farmer', () => {
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

    jest.spyOn(productionRepository, 'getByMonthAndFarmer').mockImplementation(() => Promise.resolve(data));
    jest.spyOn(farmerRepository, 'getById').mockImplementation(() => Promise.resolve(farmer));


    it('Should be able to get farmer pay in a month', async () => {
        const getMonthProductionByFarmerService = new GetMonthProductionByFarmerService(productionRepository, farmerRepository);

        const production = await getMonthProductionByFarmerService.execute('631f9ab864880d78578a459f', 1, 2021);
        console.log(production)
        expect(production).toHaveProperty('priceBr');
        expect(production).toHaveProperty('priceUS');
    })

})