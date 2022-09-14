import { ObjectId } from "mongoose";

export interface FarmDto {
    id?: string;
    farmName?: string;
    factoryDistance?: number;
    createdAt?: Date | string;
}

export interface CreateFarmDto {
    farmName: string;
    factoryDistance: number;
}