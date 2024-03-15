import { Router } from "express";
import { asyncHandler } from "../../utils/asyncHandler.js";
import * as clientRequestValidation from "./clientRequest.validation.js";
import * as clientRequestController from "./controller/clientRequest.controller.js";
import uploadFiles, {
  uploadFilesValidation,
} from "../../utils/cloudinaryMulter.js";
import validation from "../../DB/middlewares/validation.js";
import tokenSchema from "../../utils/tokenSchema.js";
import auth from "../../DB/middlewares/auth.js";
import clientRequestEndPointsRoles from "./clientRequest.rolesEndPoints.js";
const router = Router();
router.post(
  "/",
  validation(clientRequestValidation.addClientRequestSchema),
  asyncHandler(clientRequestController.addClientRequest)
);
//   .get("/", asyncHandler(clientRequestController.getClientRequests))
//   .get(
//     "/:id",
//     validation(clientRequestValidation.getClientRequestByIdSchema),
//     asyncHandler(clientRequestController.getClientRequestById)
//   )
//   .delete(
//     "/:id",
//     auth(clientRequestEndPointsRoles.deleteClientRequest),
//     validation(clientRequestValidation.deleteClientRequestSchema),
//     asyncHandler(clientRequestController.deleteClientRequest)
//   );

export default router;
