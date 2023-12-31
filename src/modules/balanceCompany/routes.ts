import { Router } from "express";
import { validateJwtHeader } from "../../helpers/jwtHelper";
import { getAllController, getAllRechargsController } from "./controler";

const balanceCompanyRoutes = Router();

balanceCompanyRoutes.get("/", [validateJwtHeader], getAllController);
balanceCompanyRoutes.get("/rechargs", [], getAllRechargsController);

// validateJwtHeader
export default balanceCompanyRoutes;
