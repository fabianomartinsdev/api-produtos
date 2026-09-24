const mongoose = require("mongoose");

async function connectDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB conectado com sucesso");
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB", error.message);
    process.exit(1); // saida com erro, se da certo exit 0
  }
}

module.exports = connectDatabase;
