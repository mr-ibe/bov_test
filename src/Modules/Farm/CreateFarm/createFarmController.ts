import { Request, Response } from 'express'
import { ICreateFarmService } from './ICreateFarmService'

class CreateFarmController {

    constructor(private readonly createFarmService: ICreateFarmService) {
    }

    async createFarm(req: Request, res: Response) {
        const data = await this.createFarmService.execute(req.body)
        return res.status(200).json(data)
    }
}

export { CreateFarmController }