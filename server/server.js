const app = require("./app");
require("dotenv").config();
const connectDatabase = require("./db/database");

connectDatabase();

// process.on("uncaughtException", (err) => {
//   console.log(`Error: ${err.message}`);
//   console.log(`shutting down the server for handling uncaught exception`);
// });

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});

// process.on("unhandledRejection", (err) => {
//   console.log(`Shutting down the server for ${err.message}`);
//   console.log(`shutting down the server for unhandle promise rejection`);

//   server.close(() => {
//     process.exit(1);
//   });
// });
