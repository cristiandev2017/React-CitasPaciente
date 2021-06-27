import React, {Fragment, useState} from 'react';

const Formulario = () => {

    //Crearemos el State de Citas
    const [citas,actualizarCita] = useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
    });

    //Funcion que se ejecuta cada que el usuario escribe en un input
    const actualizarState = () =>{
        console.log('escribiendo...');
    } 


    return ( <Fragment>
        <h2>Crear Cita</h2>
        <form>
            <label>Nombre Mascota</label>
            <input
                type="text"
                name="mascota"
                className="u-full-width"
                placeholder="Nombre mascota"
                onChange={actualizarState}
            />
            <label>Nombre Dueño</label>
            <input
                type="text"
                name="propietario"
                className="u-full-width"
                placeholder="Nombre propietario"
                onChange={actualizarState}
            />
            <label>Fecha</label>
            <input
                type="date"
                name="fecha"
                className="u-full-width"
                onChange={actualizarState}
            />
            <label>Hora</label>
            <input
                type="time"
                name="hota"
                className="u-full-width"
                onChange={actualizarState}
            />
            <label>Sintomas</label>
            <textarea
                className="u-full-width"
                name="sintomas"
                onChange={actualizarState}
            ></textarea>
            <button 
                type="submit"
                className="u-full-width button-primary"
            >Agregar Cita</button>
        </form>
    </Fragment>);
}
 
export default Formulario;