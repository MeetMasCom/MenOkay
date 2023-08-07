import { Router } from "express";
import { validateJwtHeader } from "../../helpers/jwtHelper";
import {
  createMembershipController,
  createMembershipUserController,
  deleteMembershipUserController,
  getMembershipController,
  getMembershipUserController,
  updateMembershipController,
} from "./controler";
import { validate } from "express-validation";
import {
  createMembershipUserValidation,
  createMembershipValidation,
  getMembershipValidation,
  updateMembershipValidation,
} from "./validation";

const membershipRoutes = Router();

membershipRoutes.get("/", getMembershipController);
membershipRoutes.post(
  "/",
  [validate(createMembershipValidation)],
  createMembershipController
);
membershipRoutes.post(
  "/membership-user",
  [validate(createMembershipUserValidation)],
  createMembershipUserController
);
membershipRoutes.get(
  "/membership-user/:id",
  [validateJwtHeader, validate(getMembershipValidation)],
  getMembershipUserController
);
membershipRoutes.get(
  "/:id",
  [validateJwtHeader, validate(getMembershipValidation)],
  getMembershipController
);
membershipRoutes.delete(
  "/membership-user/:id",
  [validateJwtHeader, validate(getMembershipValidation)],
  deleteMembershipUserController
);
membershipRoutes.put(
  "/:id",
  [validate(updateMembershipValidation)],
  updateMembershipController
);

export default membershipRoutes;
