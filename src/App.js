import React, { Fragment, useState } from 'react';

/** Components */
import AppointmentForm from './components/AppointmentForm';
import Appointment from './components/Appointment';

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

    /** Elimina citas atendidas por su ID */
    const deleteAppointmentAttended = ( id ) => {
        console .log( 'Atendida cita con ID', id );

        /** Obtiene todas las citas que faltan por atender, excluyendo la cita atendida (eliminada) */
        const pendingAppointments = statusPendingAppointments .filter( appointment => appointment .id !== id );

        /** Establece cambios en el State es decir. Asigna Citas Pendientes */
        setPendingAppointments( pendingAppointments );

    }

    /**  */
    const title = statusPendingAppointments .length === 0 
        ?   'No hay citas pendientes'
        :   'Listado citas';

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
                    <h3>{ title }</h3>
                    {   statusPendingAppointments .map( appointment => (        // Return Implicito usando Parentesis
                        <Appointment 
                            key={ appointment .id }
                            appointment={ appointment }
                            deleteAppointmentAttended={ deleteAppointmentAttended }
                        />
                    ))}
                </div>
            </div>
        </div>
    </Fragment>
  );
}

export default App;
