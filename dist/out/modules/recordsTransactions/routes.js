"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var jwtHelper_1 = require("../../helpers/jwtHelper");
var controler_1 = require("./controler");
var express_validation_1 = require("express-validation");
var validation_1 = require("./validation");
var recordsTransactionsRoutes = (0, express_1.Router)();
recordsTransactionsRoutes.get("/", [jwtHelper_1.validateJwtHeader], controler_1.getAllController);
recordsTransactionsRoutes.get("/detail", [jwtHelper_1.validateJwtHeader, (0, express_validation_1.validate)(validation_1.getRecordsTransactionsValidation)], controler_1.getAllByUserController);
exports.default = recordsTransactionsRoutes;
