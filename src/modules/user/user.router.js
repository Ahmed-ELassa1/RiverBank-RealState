import { Router } from "express";
import { asyncHandler } from "../../utils/asyncHandler.js";
import * as userValidation from "./user.validation.js";
import * as authController from "./controller/user.controller.js";
import uploadFiles, {
  uploadFilesValidation,
} from "../../utils/cloudinaryMulter.js";
import validation from "../../DB/middlewares/validation.js";
const router = Router();
router
  .post(
    "/signUp",
    uploadFiles(uploadFilesValidation.image).single("image"),
    validation(userValidation.signUpSchema),
    asyncHandler(authController.signUp)
  )
  .post(
    "/login",
    validation(userValidation.loginSchema),
    asyncHandler(authController.login)
  )
  .get(
    "/confirmEmail/:token",
    validation(userValidation.confirmEmailSchema),
    asyncHandler(authController.confirmEmail)
  )
  .get(
    "/refreshToken/:token",
    validation(userValidation.refreshTokenSchema),
    asyncHandler(authController.refreshToken)
  )
  .patch(
    "/sendCode",
    validation(userValidation.sendCodeSchema),
    asyncHandler(authController.sendCode)
  )
  .put(
    "/forgetPassword",
    validation(userValidation.forgetPasswordSchema),
    asyncHandler(authController.forgetPassword)
  );
export default router;
