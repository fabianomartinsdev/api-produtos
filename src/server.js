require("dotenv").config();

const express = require("express");
const connectDatabase = require("./config/database");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const studentRoutes = require("./routes/studentRoutes");
const userRoutes = require("./routes/userRoutes");

const logger = require("./middleware/loggerMiddleware");
const errorHandler = require("./middleware/errorMiddleware");
const timeMiddleware = require("./middleware/timeMiddleware");
const rotaInexistente = require("./middleware/rotaInexistente");

const app = express();

connectDatabase();

app.use(express.json());

app.use(logger);
app.use(timeMiddleware);

app.use(productRoutes);
app.use(orderRoutes);
app.use(studentRoutes);
app.use(userRoutes);

app.use(errorHandler);
app.use(rotaInexistente);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
