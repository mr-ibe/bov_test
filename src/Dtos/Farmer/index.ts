import { FarmDto } from "../Farm";

export interface FarmerDto {
    id?: string;
    farmerName?: string;
    farmId?: FarmDto;
    createdAt?: Date;
}

export interface FarmerCreatedDto {
    id?: string;
    farmerName?: string;
    farmId?: string;
    createdAt?: Date;
}

export interface CreateFarmerDto {
    farmerName: string;
    farmId: string;
}