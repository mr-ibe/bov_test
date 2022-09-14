import { describe, expect } from '@jest/globals';
import { ProductionDto } from "../../../Dtos/Production";
import { ProductionRepository } from "../../../Repsitories/production.repository"
import { CreateProductionService } from "./createProductionService"

describe('Create Production', () => {

    const productionRepository = new ProductionRepository()
    const data: ProductionDto = {
        id: '22222',
        quantityLiters: 100,
        dateRegistered: new Date('2022-09-13T23:48:15.390Z'),
    }
    jest.spyOn(productionRepository, 'create').mockImplementation(() => Promise.resolve(data))

    it('Should be able to create a production', async () => {
        const createFarmService = new CreateProductionService(productionRepository)

        const production = await createFarmService.execute({
            id: '22222',
            quantityLiters: 100,
            dateRegistered: new Date('2022-09-13T23:48:15.390Z'),
        })
        expect(production).toHaveProperty('quantityLiters')
        expect(production).toHaveProperty('dateRegistered')
        expect(production).toHaveProperty('id')
    })
})