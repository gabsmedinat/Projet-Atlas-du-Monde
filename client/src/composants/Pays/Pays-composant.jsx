import { useState, useEffect } from 'react'
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { getContenuElement } from '../../libUtilitaires'

import ListePays from '../ListePays/ListePays-composant'

const Pays = () => {
    const [pays, setPays] = useState([]);                                            // Liste de pays obtenus par le serveur

    const [searchInput, setSearchInput] = useState('');                              // Contient seulement la valeur du input
    const [continentSelect, setContinentSelect] = useState('Tous les continents');   // Contient seulement le continent choisi

    /*Fetch initial */
    useEffect(() => {
        const fetchListePays = async () => {
            try {
                const responseServeur = await fetch('http://localhost:3005/pays');
                const lstPays = await responseServeur.json();
                setPays(lstPays.pays);
            } catch (error) {
                console.log("Erreur: " + error);
            }
        }
        fetchListePays();
    }, []);

    /*Fonction qui sert à filtrer en premièr lieu par continent. Il contient un filtre de la liste de pays par continent avec la 
    particularité de retourner TRUE si le choix est "Tous les continents". Cela est fait afin de retourner tous les pays dans ce cas.
    Si la valeur est différente, alors il effectuera le filtrage et retournera la liste de pays conformes au critère de Continent.*/
    const filteredByContinent = pays.filter((item) => {
        if (continentSelect.toLowerCase() === 'tous les continents') {
            return true;
        } else {
            return item.continent.toLowerCase().includes(continentSelect.toLowerCase());
        }
    });

    /* Deuxième étape de filtrage: Filtrer par pays la liste restante qui a déjà été filtrée par Continent. Cette fonction est 
    d'ailleurs la fonction de retour pour former */
    const paysFiltre = filteredByContinent.filter((item) => {
        return item.nom.toLowerCase().includes(searchInput);
    });

    const handlePaysChange = (evenement) => setSearchInput(evenement.target.value.toLowerCase());
    const handleContinentChange = (evenement) => setContinentSelect(evenement.target.value);

    return (
        <div>
            <div className="mx-5 my-3 justify-content-center">
                <Form>
                    <InputGroup>
                        <Form.Control onChange={handlePaysChange} placeholder="Filtrer par nom de pays" />
                        <Form.Select onChange={handleContinentChange} value={continentSelect}>
                            <option >Tous les continents</option>
                            <option value="Afrique">Afrique</option>
                            <option value="Amérique du Nord">Amérique du Nord</option>
                            <option value="Amérique du Sud">Amérique du Sud</option>
                            <option value="Asie">Asie</option>
                            <option value="Europe">Europe</option>
                            <option value="Océanie">Océanie</option>
                        </Form.Select>
                        <Form.Select >
                            <option value="1">Trier par ordre alphabètique</option>
                            <option value="2">Trier par population</option>
                        </Form.Select>
                    </InputGroup>
                </Form>
            </div>
            <ListePays pays={paysFiltre} />
        </div>
    );
}

export default Pays;