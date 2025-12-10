import { useState, useEffect } from 'react'
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';


const Langues = () => {
    const [continent, setContinent] = useState("Choisissez un Continent");
    const [languesParlees, setLanguesParlees] = useState([]);

    const handleContinent = async (evenement) => {
        try {
            const continentChoisi = evenement.target.value;
            setContinent(evenement.target.value)         /*Je setContinent pour que le formulaire de sélection affiche la valeur choisie */
            const continentFormat = continentChoisi.replaceAll(" ", "+").toLowerCase();   /* Pour requête à Express */
            const objLangues = await fetchLangues(continentFormat);
            setLanguesParlees(objLangues.langues);
        } catch (erreur) {
            console.log(erreur)
        }
    }

    const fetchLangues = async (params) => {
        try {
            const requete = await fetch(`http://localhost:3005/langues?continent=${params}`);
            const reponse = await requete.json();
            return reponse;
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='m-5 d-flex flex-column  ' >
            <Form >
                <InputGroup>
                    <Form.Select onChange={handleContinent} value={continent}>
                        <option >Choisissez un Continent</option>
                        <option value="Afrique">Afrique</option>
                        <option value="Amérique du Nord">Amérique du Nord</option>
                        <option value="Amérique du Sud">Amérique du Sud</option>
                        <option value="Asie">Asie</option>
                        <option value="Europe">Europe</option>
                        <option value="Océanie">Océanie</option>
                    </Form.Select>
                </InputGroup>
            </Form>
            <p className='mt-3 align-self-start' >
                {(continent === "Choisissez un Continent") ? "" : `Les langues parlées en ${continent} sont: `} {
                    languesParlees.map((langue, index) => (<span style={{ fontWeight: 'bold' }} key={index}>{langue} </span>)
                    )}
            </p>
        </div>
    );
}
export default Langues;