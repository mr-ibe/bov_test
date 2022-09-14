import { Request, Response } from 'express'
import { ICreateProductionService } from './ICreateProductionService'

class CreateProductionController {

    constructor(private readonly createProductionService: ICreateProductionService) {
    }

    async createProduction(req: Request, res: Response) {
        const data = await this.createProductionService.execute(req.body)
        return res.status(200).json(data)
    }
}

export { CreateProductionController }