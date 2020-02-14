import React, { Fragment } from 'react';

const Appointment = ({ appointment }) => (     // Return Implicito & Destructuración del Props pasado como argumento. Equivale a props .apointment
    <Fragment>
        <table class="u-full-width">
            <tr>
                <th>Mascota</th>
                <th>Propietario</th>
                <th>Fecha - Hora</th>
            </tr>
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
        </table>
    </Fragment>    
);

export default Appointment;