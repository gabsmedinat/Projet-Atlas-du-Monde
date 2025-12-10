// Auteur: Gabriel Medina

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3005;

const lstPays = require('./_donnees_pays/pays.json');                // typeOf(lstPays)  =   Object

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
    console.log(`Veuillez trouver la racine sur http://localhost:${PORT} `);
});


app.get('/', (req, res) => {
    res.send("Vous êtes sur la racine !");
});

app.get('/pays', (req, res) => {
    res.send(lstPays);
});

/* À savoir: req.query retourne un query en format objet */
app.get('/langues', (req, res) => {
    const query = req.query;             // Type Object     (typeOf(query))
    const arrPays = lstPays.pays;
    const objPays_parContinent = arrPays.filter(pays => pays.continent.toLowerCase() == query.continent.toLowerCase());
    const arrLanguesDuContinent = [];
    for (const pays of objPays_parContinent) {
        for (const langue of pays.langues_officielles) {
            if (!arrLanguesDuContinent.includes(langue)) {
                arrLanguesDuContinent.push(langue);
            }
        }
    }
    const objLangues = { langues: arrLanguesDuContinent.sort() }             // Type: Object
    res.json(objLangues);                          // Envoie sous forme de JSON
});