import joi from "joi";

const tokenSchema = joi.object({
  authorization: joi.string().required(),
});
export default tokenSchema;
