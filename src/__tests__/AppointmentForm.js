import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';       //  Para dar soporte a toBeInTheDocument()

/** Componente a Testear */
import AppointmentForm from '../components/AppointmentForm';

test('<AppointmentForm /> Debe obtener elemento con el texto "Solicitud de cita" ', () => {
    // const wrapper = render( <AppointmentForm /> );
    // wrapper .debug();

    render( <AppointmentForm /> );    //  Monta Componente

    /** Assert */
    expect( 
        screen .getByText( 'Solicitud de cita' )    //  Obtiene el elemento con el texto indicado
    ) .toBeInTheDocument();                         //  Verifica si el elemento esta en el DOM
});
