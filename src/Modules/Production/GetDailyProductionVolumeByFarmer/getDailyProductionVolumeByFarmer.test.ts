import { describe, expect } from '@jest/globals';
import { GetByMonthAndFarmerDto } from '../../../Dtos/Production';
import { ProductionRepository } from "../../../Repsitories/production.repository"
import { GetDailyProductionVolumeService } from "./GetDailyProductionVolumeByFarmerService"

describe('Get Daily Production Volume Service', () => {

    const productionRepository = new ProductionRepository()
    const data: GetByMonthAndFarmerDto[] = [
        { _id: { month: 7, year: 2022 }, total: 93 },
        { _id: { month: 1, year: 2022 }, total: 60 }
    ];

    jest.spyOn(productionRepository, 'getByMonthAndFarmer').mockImplementation(() => Promise.resolve(data));

    it('Should be able to get production volume', async () => {
        const getDailyProductionVolumeService = new GetDailyProductionVolumeService(productionRepository);

        const production = await getDailyProductionVolumeService.execute('631f9ab864880d78578a459f', 1, 2021);
        expect(production).toHaveProperty('monthlyAverage');
        expect(production).toHaveProperty('production');
    })
})