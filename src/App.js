import React, { Fragment, useState } from 'react';
import AppointmentForm from './components/AppointmentForm';

function App() {

    /** State: Citas Pendientes */
    const [ statusPendingAppointments, setPendingAppointments ] = useState([]);

    /** Agrega solicitud a citas pendientes */
    const addAppointment = ( appointment ) => {
        console .log( 'App', appointment );

        /** Establece cambios en el State es decir. Asigna Cita solicitada a listado de Citas Pendientes */
        setPendingAppointments([
            ...statusPendingAppointments,   // Spread
            appointment                     // Enviado por el Componente Hijo
        ]);
    }

  return (
    <Fragment>
        <h1>Administrar citas</h1>
        <div className="container">
            <div className="row">
                <div className="one-half column">
                    <AppointmentForm 
                        addAppointment={ addAppointment }       // Usamos Props para pasar la funcion al componente y establecer una comunicación con el padre 'App'
                    />
                </div>
                <div className="one-half column">
                    2
                </div>
            </div>
        </div>
    </Fragment>
  );
}

export default App;
