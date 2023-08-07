import { Router } from "express";

import {
  createBilleteraUserController,
  createOtpController,
  getAllBilleterasUserController,
  getByIdBilleteraUserController,
  getByIdUserBilleteraUserController,
  updateBilleteraUserController,
  validateOtpController,
} from "./controler";
import { validateJwtHeader } from "../../helpers/jwtHelper";

const billeteraURoutes = Router();

billeteraURoutes.get("/", validateJwtHeader, getAllBilleterasUserController);
billeteraURoutes.get("/getByIdBilleteraU/:id", validateJwtHeader, getByIdBilleteraUserController);
billeteraURoutes.get("/getByIdUserBilleteraU/:id", validateJwtHeader, getByIdUserBilleteraUserController);
billeteraURoutes.put("/updateBilleteraU/:id", validateJwtHeader, updateBilleteraUserController);
billeteraURoutes.post("/createBilleteraU", validateJwtHeader, createBilleteraUserController);
billeteraURoutes.post("/validOtp", validateJwtHeader, validateOtpController);
billeteraURoutes.get("/validOtp/:id", validateJwtHeader, createOtpController);

export default billeteraURoutes;
