import connection from "./DB/connection.js";
import { globalErrorHandling } from "./utils/asyncHandler.js";
import userRouter from "./modules/user/user.router.js";
import blogRouter from "./modules/blog/blog.router.js";
import clientRequestRouter from "./modules/clientRequest/clientRequest.router.js";
function Bootstrap(app, express) {
  connection();
  app.use(express.json());
  app.use("/user", userRouter);
  app.use("/blog", blogRouter);
  app.use("/clientRequest", clientRequestRouter);
  app.use(globalErrorHandling);
}
export default Bootstrap;
