const path = require("path");

module.exports = {
  entry: "./src/index.js", // O ponto de entrada do seu aplicativo
  output: {
    path: path.resolve(__dirname, "dist"), // Diretório de saída para os arquivos gerados
    filename: "bundle.js", // Nome do arquivo de saída
  },
  // Outras configurações do Webpack, como loaders e plugins
  // ...
};
