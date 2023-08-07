"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var jwtHelper_1 = require("../../helpers/jwtHelper");
var controler_1 = require("./controler");
var express_validation_1 = require("express-validation");
var validation_1 = require("./validation");
var membershipRoutes = (0, express_1.Router)();
membershipRoutes.get("/", controler_1.getMembershipController);
membershipRoutes.post("/", [(0, express_validation_1.validate)(validation_1.createMembershipValidation)], controler_1.createMembershipController);
membershipRoutes.post("/membership-user", [(0, express_validation_1.validate)(validation_1.createMembershipUserValidation)], controler_1.createMembershipUserController);
membershipRoutes.get("/membership-user/:id", [jwtHelper_1.validateJwtHeader, (0, express_validation_1.validate)(validation_1.getMembershipValidation)], controler_1.getMembershipUserController);
membershipRoutes.get("/:id", [jwtHelper_1.validateJwtHeader, (0, express_validation_1.validate)(validation_1.getMembershipValidation)], controler_1.getMembershipController);
membershipRoutes.delete("/membership-user/:id", [jwtHelper_1.validateJwtHeader, (0, express_validation_1.validate)(validation_1.getMembershipValidation)], controler_1.deleteMembershipUserController);
membershipRoutes.put("/:id", [(0, express_validation_1.validate)(validation_1.updateMembershipValidation)], controler_1.updateMembershipController);
exports.default = membershipRoutes;
