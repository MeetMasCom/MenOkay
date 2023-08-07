import { Router } from "express";
import { validateJwtHeader } from "../../helpers/jwtHelper";
import { getAllController, getAllRetreatController, getAllRetreatUserController, getBalanceUserController, rechargeController, retreatController, reviewRechargeController, reviewRetreatController } from "./controler";
import { validate } from "express-validation";
import { getBalanceUserValidation, rechargeValidation, reviewRechargeValidation } from "./validation";

const balanceUserRoutes = Router();

balanceUserRoutes.get("/user/:id", [validateJwtHeader, validate(getBalanceUserValidation)], getBalanceUserController);
balanceUserRoutes.post("/recharge", [validateJwtHeader, validate(rechargeValidation)], rechargeController);
balanceUserRoutes.post("/review-recharge", [validateJwtHeader, validate(reviewRechargeValidation)], reviewRechargeController);


balanceUserRoutes.get("/retreatAll", [validateJwtHeader], getAllRetreatController);
balanceUserRoutes.post("/retreat", [validateJwtHeader], retreatController);
balanceUserRoutes.get("/retreat/:id", [validateJwtHeader], getAllRetreatUserController);
balanceUserRoutes.post("/review-retreat", [validateJwtHeader], reviewRetreatController);

balanceUserRoutes.get("/:id", [validateJwtHeader, validate(getBalanceUserValidation)], getAllController);

export default balanceUserRoutes;
