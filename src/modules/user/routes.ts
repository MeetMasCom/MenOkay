import { Router } from "express";
import { validate } from "express-validation";
import { validateJwtHeader } from "../../helpers/jwtHelper";
import upload from "../../libs/multer";
import {
  createUserController,
  getCountUserController,
  getUserController,
  getUserValidateController,
  loginController,
  logoutController,
  otpController,
  recoverPasswordController,
  recoverUsernameController,
  resetPasswordController,
  updateUserAddressController,
  updateUserBasicController,
  updateUserMatchController,
  getByIdUserController,
  getAllUserGenderController,
  searchUsersController,

  getUserOnlineController,
  getUserActiveController
} from "./controler";
import {
  createUserValidation,
  getUserValidateValidation,
  getUserValidation,
  loginUserValidation,
  otpUserValidation,
  recoverPassword,
  recoverUsername,
  resetPassword,
  updateUserAddressValidation,
  updateUserBasicValidation,
  updateUserMatchValidation,
} from "./validation";
import { get } from "http";

const userRoutes = Router();

userRoutes.post("/", [validate(createUserValidation)], createUserController);
userRoutes.post("/login", [validate(loginUserValidation)], loginController);
userRoutes.post("/valid-login", [validate(otpUserValidation)], otpController);
userRoutes.post(
  "/logout/:id",
  [validateJwtHeader, validate(getUserValidation)],
  logoutController
);
userRoutes.put(
  "/basic/:id",
  [validateJwtHeader, validate(updateUserBasicValidation)],
  updateUserBasicController
);

userRoutes.put(
  "/address/:id",
  [validateJwtHeader, validate(updateUserAddressValidation)],
  updateUserAddressController
);

userRoutes.put(
  "/match/:id",
  [validateJwtHeader, validate(updateUserMatchValidation)],
  updateUserMatchController
);

userRoutes.get("/count", getCountUserController);
userRoutes.get(
  "/validate/:search",
  [validate(getUserValidateValidation)],
  getUserValidateController
);
userRoutes.get(
  "/:id",
  [validateJwtHeader, validate(getUserValidation)],
  getUserController
);

userRoutes.post(
  "/recover-username",
  [validate(recoverUsername)],
  recoverUsernameController
);

userRoutes.post(
  "/recover-password",
  [validate(recoverPassword)],
  recoverPasswordController
);

userRoutes.post(
  "/reset-password",
  [validate(resetPassword)],
  resetPasswordController
);

userRoutes.get("/userById/:id", getByIdUserController);
userRoutes.get("/userByGender/:id", getAllUserGenderController);
userRoutes.get("/userOnline/:id", getUserOnlineController);
userRoutes.get("/userActive/:id", getUserActiveController);


//userRoutes.get("/getAllUser", getAllUserController);

export default userRoutes;
