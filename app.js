import { app } from "./server.js";
import { errorHandler } from "./config/error.js";

app.use(errorHandler);

app.listen(3000, () => {
  console.log("server started!!!");
});
