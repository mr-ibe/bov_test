import { describe, expect } from '@jest/globals';
import { FarmerCreatedDto, FarmerDto } from "../../../Dtos/Farmer";
import { FarmerRepository } from "../../../Repsitories/farmer.repsoitory"
import { CreateFarmerService } from "./createFarmerService"

describe('Create Farmer', () => {

    const farmerRepository = new FarmerRepository()
    const data: FarmerCreatedDto = {
        id: '22222',
        farmerName: 'Farmer Test',
        farmId: '111111111111111111',
        createdAt: new Date('2022-09-13T23:48:15.390Z'),
    }
    jest.spyOn(farmerRepository, 'create').mockImplementation(() => Promise.resolve(data))

    it('Should be able to create a farmer', async () => {
        const createFarmService = new CreateFarmerService(farmerRepository)

        const farmer = await createFarmService.execute({
            farmerName: 'Test',
            farmId: '111111111111111111',
        })
        expect(farmer).toHaveProperty('farmerName')
        expect(farmer).toHaveProperty('farmId')
        expect(farmer).toHaveProperty('id')
    })
})