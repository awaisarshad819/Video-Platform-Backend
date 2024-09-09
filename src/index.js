import connectDB from "./db/index.js";

import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

connectDB();
// app.listen(process.env.PORT, () => {
//   console.log(`App is listening on port: ${process.env.PORT}`);
// });
