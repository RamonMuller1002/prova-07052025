const express = require('express');
const fs = require('fs')
const app = express()  // inicializa executando a função express()
const PORT = 8000 // reserva a porta para rodar o servidor

app.use(express.json())



app.listen(PORT, () => { console.log("Servidor online") })