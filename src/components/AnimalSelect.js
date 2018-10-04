import React, { Component } from 'react';

// exportando la función constructora (componente tonto)
// cual es el parametro entrando aca?
export default function AnimalSelect ({animals, submitAnimal}) {

    return(
        <form>
            <label>Select an Animal: </label>
            <select onChange={(event) => submitAnimal(event.target.value)} >
                {
                    animals.map(animal =>
                        <option key={animal} value={animal}>{animal}</option>
                    )
                }
            </select>
        </form>
    );
};

