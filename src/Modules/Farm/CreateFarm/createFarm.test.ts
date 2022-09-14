import { describe, expect, test } from '@jest/globals';
import { FarmDto } from "../../../Dtos/Farm";
import { FarmRepository } from "../../../Repsitories/farm.repsoitory"
import { CreateFarmService } from "./createFarmService"

describe('Create Farm', () => {

    const farmRepository = new FarmRepository()
    const data: FarmDto = {
        id: '8888',
        farmName: 'Test',
        factoryDistance: 11,
        createdAt: new Date('2022-09-13T23:48:15.390Z'),
    }
    jest.spyOn(farmRepository, 'create').mockImplementation(() => Promise.resolve(data))

    it('Should be able to create a farm', async () => {
        const createFarmUseCase = new CreateFarmService(farmRepository)

        const farm = await createFarmUseCase.execute({
            farmName: 'Test',
            factoryDistance: 11
        })

        expect(farm).toHaveProperty('farmName')
        expect(farm).toHaveProperty('factoryDistance')
        expect(farm).toHaveProperty('createdAt')
        expect(farm).toHaveProperty('id')
    })
})