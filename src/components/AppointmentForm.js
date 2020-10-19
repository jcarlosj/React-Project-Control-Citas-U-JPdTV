import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import uuid from 'uuid/v4';

const AppointmentForm = ({ addAppointment }) => {   // Destructuración del Props pasado como argumento. Equivale a props .addApointment

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

        console .debug( 'Testing', stateAppointment );

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
        
        setError( false );       // Actualiza el State: Error

        /** Asigna un ID:
         *  Simula la asignación de id que hace una base de datos al guardar un registro usando la libreria 'uuid' o 'shortid'. 
         *  Generalmente es la BD la que hace esto.
         */
        stateAppointment .id = uuid();      // Agrega nueva propiedad 'id' con un valor aleatorio
        console.log( 'AppointmentForm', stateAppointment );

        /** Crea la cita */
        addAppointment( stateAppointment );

        /** Resetea campos del formulario es decir 
         * Actualiza State: Cita 
        */
        setAppointment({
            petName: '',
            ownerName: '',
            medicalDepartureDate: '',
            medicalDepartureTime: '',
            symptoms: ''
        });
        
    }

    return (
        <Fragment>
            <h3 data-testid="title">Solicitud de cita</h3>
            { stateError 
                ?   <p data-testid="alert-error" className="alert-error">Todos los campos son obligatorios.</p>
                :   null            }
            <form 
                id="appointment-form"
                onSubmit={ submitAppointment }
            >
                <label>Nombre Mascota</label>
                <input 
                    data-testid="pet-name"
                    name="petName"
                    type="text"
                    placeholder="Ej: Rex"
                    className="u-full-width"
                    onChange={ handleChange }
                    value={ petName }
                />
                <label>Nombre Propietario</label>
                <input 
                    data-testid="owner-name"
                    name="ownerName"
                    type="text"
                    placeholder="Ej: Juan Carlos Jiménez Gutiérrez"
                    className="u-full-width"
                    onChange={ handleChange }
                    value={ ownerName }
                />
                <div className="row">
                    <div className="six columns">
                        <label>Fecha</label>
                        <input 
                            name="medicalDepartureDate"
                            type="date"
                            className="u-full-width"
                            onChange={ handleChange }
                            value={ medicalDepartureDate }
                        />
                    </div>
                    <div className="six columns">
                        <label>Hora</label>
                        <input 
                            name="medicalDepartureTime"
                            type="time"
                            className="u-full-width"
                            onChange={ handleChange }
                            value={ medicalDepartureTime }
                        />
                    </div>
                </div>
                
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
                    data-testid="btn-submit"
                >Solicitar</button>
            </form>
        </Fragment>
    );
}

/** Verificación de Tipos usando PropTypes */
AppointmentForm .propTypes = {
    addAppointment: PropTypes .func .isRequired    // props pasado al componente AppointmentForm
}

export default AppointmentForm;