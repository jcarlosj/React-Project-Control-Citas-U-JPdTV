import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Appointment = ({ appointment, deleteAppointmentAttended }) => (     // Return Implicito & Destructuración del Props pasado como argumento. Equivale a props .apointment
    <Fragment>
        <table data-testid="app-apointment" className="u-full-width">
            <thead>
                <tr>
                    <th>Mascota</th>
                    <th>Propietario</th>
                    <th>Fecha - Hora</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{ appointment .petName }</td>
                    <td>{ appointment .ownerName }</td>
                    <td>{ appointment .medicalDepartureDate } - { appointment .medicalDepartureTime } </td>
                </tr>
                <tr>
                    <th colSpan="3">Sintomatología</th>
                </tr>
                <tr>
                    <td colSpan="3">{ appointment .symptoms }</td>
                </tr>
                <tr>
                    <td colSpan="3">
                        <button 
                            className="u-full-width button"
                            onClick={ () => deleteAppointmentAttended( appointment .id ) }
                            data-testid="btn-atender"
                        >atender &times;</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </Fragment>    
);

/** Verificación de Tipos usando PropTypes */
Appointment .propTypes = {
    appointment: PropTypes .object .isRequired,
    deleteAppointmentAttended: PropTypes .func .isRequired
}

export default Appointment;