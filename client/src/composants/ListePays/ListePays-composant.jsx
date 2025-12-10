import Accordion from 'react-bootstrap/Accordion'

const lstePays = (props) => {
    return (
        <Accordion className='mx-5 '>
            {
                props.pays.map((pays, index) => (
                    <Accordion.Item eventKey={index} >
                        <Accordion.Header>{pays.nom}</Accordion.Header>
                        <Accordion.Body className='d-flex flex-column '>
                            <p className='align-self-start' ><strong>Continent</strong> : {pays.continent}</p>
                            <p className='align-self-start'><strong>Capitale</strong> : {pays.capitale}</p>
                            <p className='align-self-start'><strong>Population</strong> : {pays.population.toLocaleString("fr-CA")}</p>
                            <p className='align-self-start'><strong>Langues officielles</strong> : {
                                pays.langues_officielles.map((langue) => { return langue + ", " })
                            }</p>
                            <p className='align-self-start'><strong>Date de création</strong> : {pays.date_creation}</p>
                            <p className='align-self-start'><strong>Drapeau</strong> : <a href={pays.drapeau} target="_blank" >{pays.drapeau}</a></p>
                        </Accordion.Body>
                    </Accordion.Item>
                ))
            }
        </Accordion >
    );
};

export default lstePays;