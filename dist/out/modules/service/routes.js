"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controler_1 = require("./controler");
var serviceRoutes = (0, express_1.Router)();
serviceRoutes.get("/", controler_1.getAllServiceController);
serviceRoutes.get("/getByIdHotelService/:id", controler_1.getByIdHotelController);
serviceRoutes.get("/getByIdService/:id", controler_1.getByIdServiceController);
serviceRoutes.post("/serviceRegister", controler_1.createServiceController);
exports.default = serviceRoutes;
