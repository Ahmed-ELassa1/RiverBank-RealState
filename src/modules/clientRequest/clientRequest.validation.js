import joi from "joi";
import generalFields from "../../utils/generalFields.js";

export const addClientRequestSchema = joi
  .object({
    title: joi.string().min(3).max(30).required(),
    description: joi.string().min(3).max(500).required(),
    files: joi.object({
      mainImage: joi.array().items(generalFields.file),
      subImages: joi.array().items(generalFields.file),
    }),
  })
  .required();
