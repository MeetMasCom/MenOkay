"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controler_1 = require("./controler");
var billeteraRoutes = (0, express_1.Router)();
billeteraRoutes.get("/", controler_1.getAllBilleteraController);
billeteraRoutes.get("/getByIdBilletera/:id", controler_1.getByIdBilleteraController);
billeteraRoutes.get("/getByIdUserBilletera/:id", controler_1.getByIdUserBilleteraController);
billeteraRoutes.post("/createBilleteraE", controler_1.createBilleteraController);
billeteraRoutes.post("/updateBilleteraE/:id", controler_1.updateBilleteraEmpresaEstado);
exports.default = billeteraRoutes;
