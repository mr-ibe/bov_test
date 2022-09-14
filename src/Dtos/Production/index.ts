import { FarmerDto } from "../Farmer";

export interface ProductionDto {
    id?: string;
    quantityLiters?: number;
    dateRegistered?: Date;
    farmer?: FarmerDto;
    farmerId?: string;
}

export interface GetDailyProductionDto {
    production: ProductionDto[],
    monthlyAverage: number;
}

export interface GetFarmerPayDto {
    priceUS: string;
    priceBr: string;
}

export interface GetFarmerPayByMonthDto {
    month: String;
    amount?: GetFarmerPayDto
}

export interface CreateProductionDto {
    quantityLiters: number;
    dateRegistered: Date;
    farmerId: string;
}

export interface GetByMonthAndFarmerDto {
    _id: { month: number; year: number; }, total: number,
}
