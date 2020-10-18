import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';       //  Para dar soporte a toBeInTheDocument()

/** Componente a Testear */
import AppointmentForm from '../components/AppointmentForm';

test('<AppointmentForm /> ', () => {
    // const wrapper = render( <AppointmentForm /> );
    // wrapper .debug();

    const { getByText } = render( <AppointmentForm /> );    //  Monta Componente

    /** Assert */
    expect( 
        getByText( 'Solicitud de cita' )    //  Obtiene el elemento con el texto indicado
    ) .toBeInTheDocument();                 //  Verifica si el elemento esta en el DOM
});
