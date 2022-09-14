import { Request, Response } from 'express'
import { IGetYearMonthlyProductionByFarmerService } from './IGetYearMonthlyProductionByFarmerService';

class GetYearMonthlyProductionByFarmerController {

    constructor(private readonly GetMonthlyProductionByFarmerService: IGetYearMonthlyProductionByFarmerService) {
    }


    async GetYearMonthlyProductionByFarmer(req: Request, res: Response) {
        const { farmerId, year } = req.params;
        const data = await this.GetMonthlyProductionByFarmerService.execute(String(farmerId), Number(year))
        return res.status(200).json(data)
    }
}

export { GetYearMonthlyProductionByFarmerController }