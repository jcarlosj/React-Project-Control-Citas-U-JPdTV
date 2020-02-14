import React, { Fragment, useState, useEffect } from 'react';

/** Components */
import AppointmentForm from './components/AppointmentForm';
import Appointment from './components/Appointment';

function App() {

    let appointmentsLocalStorage = JSON .parse( localStorage .getItem( 'appoinments' ) );   // Retorna null si no hay una cadena registrada
    /** Valida si NO hay citas en el LocalStorage */
    if( ! appointmentsLocalStorage ) {
        appointmentsLocalStorage = [];      // Inicializa Array Vacio
    }

    /** State: Citas Pendientes */
    const [ statusPendingAppointments, setPendingAppointments ] = useState( appointmentsLocalStorage );

    /** useEffect() se ejecuta y realiza algunas operaciones
     *   - Cuando el Componente a Cargado completamente (como el window.onload de JavaScript o el document.ready de jQuery).
     *   - Cuando algo cambia en el componente.
     *   - Si deseamos que se ejecute una sola vez debemos pasar como segundo parámetro un Array vacío, de lo contrario se ejecutará ciclicamente.
     *   - En dicho Array se van a colocar las dependencias que le hará seguimiento y que cambiarán para que el useEffect se ejecute.
     * 
     * NOTA:* Si estás familiarizado con el ciclo de vida de las clases de React y sus métodos, el Hook useEffect equivale a componentDidMount, componentDidUpdate y componentWillUnmount combinados.
    */
    useEffect( () => {                      // Siempre se define con un CallBack de Arrow Function
        console .log( 'Listo' );     

        /** Valida SI hay citas en el LocalStorage */
        if( appointmentsLocalStorage ) {
            localStorage .setItem( 'appointments', JSON .stringify( statusPendingAppointments ) );
        }
        else {
            localStorage .setItem( 'appointments', JSON .stringify( [] ) );
        }
        
    }, [ statusPendingAppointments ] );     // Array de dependencias que cambian

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
