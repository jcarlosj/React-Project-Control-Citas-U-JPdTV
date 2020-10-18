import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';       //  Para dar soporte a toBeInTheDocument()

/** Componente a Testear */
import AppointmentForm from '../components/AppointmentForm';

test('<AppointmentForm /> Debe contener en el encabezado', () => {
    // const wrapper = render( <AppointmentForm /> );
    // wrapper .debug();

    render( <AppointmentForm /> );    //  Monta Componente

    /** Heading */
    expect( 
        screen .getByText( 'Solicitud de cita' )    //  Obtiene el elemento con el texto indicado
    ) .toBeInTheDocument();                         //  Verifica si el elemento esta en el DOM
    expect(
        screen .getByTestId( 'title' ) .tagName     //  Obtiene tipo de elemento de acuerdo con un atributo personalizado
    ) .toBe( 'H3' );                                //  Verifica la etiqueta del elemento sea un H3 
    expect(
        screen .getByTestId( 'title' ) .tagName     //  Obtiene tipo de elemento de acuerdo con un atributo personalizado
    ) .not .toBe( 'H1' );                           //  Verifica la etiqueta del elemento NO sea un H1
    expect(
        screen .getByTestId( 'title' ) .textContent //  Obtiene el contenido del elemento de acuerdo con un atributo personalizado
    ) .toBe( 'Solicitud de cita' );                 //  Verifica la etiqueta posea el texto esperado

    /** Submit Button */
    const buttonEl = screen .getByTestId( 'btn-submit' );
    expect( buttonEl .tagName ) .toBe( 'BUTTON' );
    expect( buttonEl .textContent ). toBe( 'Solicitar' );

});
