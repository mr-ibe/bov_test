import { Request, Response } from 'express'
import { ICreateFarmerService } from './ICreateFarmerService'

class CreateFarmerController {

    constructor(private readonly createFarmerService: ICreateFarmerService) {
    }

    async createFarmer(req: Request, res: Response) {
        const data = await this.createFarmerService.execute(req.body)
        return res.status(200).json(data)
    }
}

export { CreateFarmerController }