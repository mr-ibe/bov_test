import { Request, Response } from 'express'
import { IGetMonthlyProductionByFarmerService } from './IGetProductionByFarmerAndYearService'

class GetMonthlyProductionByFarmerController {

    constructor(private readonly GetMonthlyProductionByFarmerService: IGetMonthlyProductionByFarmerService) {
    }

    async GetMonthProduction(req: Request, res: Response) {
        const { farmerId, month, year } = req.params;
        const data = await this.GetMonthlyProductionByFarmerService.execute(String(farmerId), Number(month), Number(year))
        return res.status(200).json(data)
    }
}

export { GetMonthlyProductionByFarmerController }