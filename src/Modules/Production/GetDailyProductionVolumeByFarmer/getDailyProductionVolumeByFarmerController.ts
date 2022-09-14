import { Request, Response } from 'express'
import { IGetDailyProductionVolumeService } from './IGetDailyProductionVolumeByFarmerService'

class GetDailyProductionVolumeByFarmerController {

    constructor(private readonly GetDailyProductionVolumeService: IGetDailyProductionVolumeService) {
    }

    async getDailyProductionVolume(req: Request, res: Response) {
        const { farmerId, month, year } = req.params;
        const data = await this.GetDailyProductionVolumeService.execute(String(farmerId), Number(month), Number(year));
        return res.status(200).json(data);
    }
}

export { GetDailyProductionVolumeByFarmerController }