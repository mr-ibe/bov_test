import { Router } from 'express';
import { FarmRouter } from './farm.routes';
import { FarmerRouter } from './farmer.routes';
import { ProductionRouter } from './production.routes';

const router = Router();
router.use("/farm", FarmRouter);
router.use("/farmer", FarmerRouter);
router.use("/production", ProductionRouter);

export { router }
