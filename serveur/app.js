// Auteur: Gabriel Medina

const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', (req,res) =>{
    res.send("Vous êtes sur la racine !");
});

app.listen(PORT,() =>{
    console.log("Veuillez trouver la racine sur http://localhost:3001 ");
});
