import React, { Fragment } from 'react';

const AppointmentForm = () => {
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
                />
                <label>Nombre Propietario</label>
                <input 
                    name="ownerName"
                    type="text"
                    placeholder="Ej: Juan Carlos Jiménez Gutiérrez"
                    className="u-full-width"
                />
                <label>Fecha de Alta</label>
                <input 
                    name="medicalDepartureDate"
                    type="date"
                    className="u-full-width"
                />
                <label>Hora de Alta</label>
                <input 
                    name="medicalDepartureTime"
                    type="time"
                    className="u-full-width"
                />
                <label>Síntomas</label>
                <textarea
                    name="symptoms"
                    className="u-full-width"
                    placeholder="Haga una descripción detallada de toda la sintomatología de su mascota"
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