import React, { Fragment, useState } from 'react';

const AppointmentForm = () => {

    /** State: Cita */
    const [ stateAppointment, setAppointment ] = useState({
        petName: '',
        ownerName: '',
        medicalDepartureDate: '',
        medicalDepartureTime: '',
        symptoms: ''
    });

    /** Manejador de Cambios el State: Cita (Cuando el usuario escribe en un campo del formulario) */
    const handleChange = ( event ) => {
        console.log( 'Escribiendo en', event .target .name );
    }

    return (
        <Fragment>
            <h3>Solicitud de cita</h3>
            <form id="appointment-form">
                <label>Nombre Mascota</label>
                <input 
                    name="petName"
                    type="text"
                    placeholder="Ej: Rex"
                    className="u-full-width"
                    onChange={ handleChange }
                />
                <label>Nombre Propietario</label>
                <input 
                    name="ownerName"
                    type="text"
                    placeholder="Ej: Juan Carlos Jiménez Gutiérrez"
                    className="u-full-width"
                    onChange={ handleChange }
                />
                <label>Fecha de Alta</label>
                <input 
                    name="medicalDepartureDate"
                    type="date"
                    className="u-full-width"
                    onChange={ handleChange }
                />
                <label>Hora de Alta</label>
                <input 
                    name="medicalDepartureTime"
                    type="time"
                    className="u-full-width"
                    onChange={ handleChange }
                />
                <label>Síntomas</label>
                <textarea
                    name="symptoms"
                    className="u-full-width"
                    placeholder="Haga una descripción detallada de toda la sintomatología de su mascota"
                    onChange={ handleChange }
                ></textarea>
                <button
                    type="button"
                    className="u-full-width button-primary"
                >Solicitar</button>
            </form>
        </Fragment>
    );
}

export default AppointmentForm;