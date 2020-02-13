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

    /** State: Error */
    const [ stateError, setError ] = useState( false );

    /** Manejador de Cambios el State: Cita (Cuando el usuario escribe en un campo del formulario) */
    const handleChange = ( event ) => {
        console.log( 'Escribiendo en', event .target .name );

        /** Actualiza State: Cita */
        setAppointment({
            ...stateAppointment,    // Debemos agregar el estado actual 
            [ event .target .name ]: event .target .value
        });
    }

    /** Extraer los datos */
    const { petName, ownerName, medicalDepartureDate, medicalDepartureTime, symptoms } = stateAppointment;

    /** Evento que solicita la cita al hacer click en el formulario */
    const submitAppointment = ( event ) => {
        event .preventDefault();        // Evita el envio por el QueryString por el metodo GET

        /** Valida campos del formulario*/
        if( 
            petName .trim() === '' || 
            ownerName .trim() === '' ||
            medicalDepartureDate .trim() === '' ||
            medicalDepartureTime .trim() === '' ||
            symptoms .trim() === ''
        ) {
            console .error( 'Todos los campos son obligatorios.' );
            setError( true );       // Actualiza el State: Error
            return;
        }
        
        console.log( 'Cita', stateAppointment );
        setError( false );       // Actualiza el State: Error

        /** Asigna un ID */

        /** Crea la cita */

        /** Resetea campos del formulario */
    }

    return (
        <Fragment>
            <h3>Solicitud de cita</h3>
            { stateError 
                ?   <p className="alert-error">Todos los campos son obligatorios.</p>
                :   null            }
            <form 
                id="appointment-form"
                onSubmit={ submitAppointment }
            >
                <label>Nombre Mascota</label>
                <input 
                    name="petName"
                    type="text"
                    placeholder="Ej: Rex"
                    className="u-full-width"
                    onChange={ handleChange }
                    value={ petName }
                />
                <label>Nombre Propietario</label>
                <input 
                    name="ownerName"
                    type="text"
                    placeholder="Ej: Juan Carlos Jiménez Gutiérrez"
                    className="u-full-width"
                    onChange={ handleChange }
                    value={ ownerName }
                />
                <label>Fecha de Alta</label>
                <input 
                    name="medicalDepartureDate"
                    type="date"
                    className="u-full-width"
                    onChange={ handleChange }
                    value={ medicalDepartureDate }
                />
                <label>Hora de Alta</label>
                <input 
                    name="medicalDepartureTime"
                    type="time"
                    className="u-full-width"
                    onChange={ handleChange }
                    value={ medicalDepartureTime }
                />
                <label>Síntomas</label>
                <textarea
                    name="symptoms"
                    className="u-full-width"
                    placeholder="Haga una descripción detallada de toda la sintomatología de su mascota"
                    onChange={ handleChange }
                    value={ symptoms }
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Solicitar</button>
            </form>
        </Fragment>
    );
}

export default AppointmentForm;