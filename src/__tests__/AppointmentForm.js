import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';       //  Para dar soporte a toBeInTheDocument()

/** Componente a Testear */
import AppointmentForm from '../components/AppointmentForm';

/** Jest Spy Function */
const addAppointment = jest .fn();

/** Funciones Jest  */
afterEach( cleanup );       //   Desmonta árboles de React que se montaron con render despues de la finalización de cada test      

test('<AppointmentForm /> Verifica etiqueta y contenido de encabezado y boton enviar', () => {
    // const wrapper = render( <AppointmentForm /> );
    // wrapper .debug();

    /** Monta el Componente con su funcionalidad asociada */
    render( 
        <AppointmentForm 
            addAppointment={ addAppointment }       // Usamos Props para pasar la funcion al componente y establecer una comunicación con el padre 'App'
        />
    );    

    const
        textTitle = screen .getByText( 'Solicitud de cita' ),
        title = screen .getByTestId( 'title' ),
        btnSubmit = screen .getByTestId( 'btn-submit' );

    /** Heading */
    expect( textTitle ) .toBeInTheDocument();                   //  Verifica si el elemento esta en el DOM
    expect( title .tagName ) .toBe( 'H3' );                     //  Verifica la etiqueta del elemento sea un H3 
    expect( title .tagName ) .not .toBe( 'H1' );                //  Verifica la etiqueta del elemento NO sea un H1
    expect( title .textContent ) .toBe( 'Solicitud de cita' );  //  Verifica la etiqueta posea el texto esperado

    /** Submit Button */
    expect( btnSubmit .tagName ) .toBe( 'BUTTON' );             //  Verifica la etiqueta del elemento sea un BUTTON
    expect( btnSubmit .textContent ). toBe( 'Solicitar' );      //  Verifica la etiqueta posea el texto esperado

});

test( '<AppointmentForm /> Valida el formulario', () => {
    /** Monta el Componente con su funcionalidad asociada */
    render( 
        <AppointmentForm 
            addAppointment={ addAppointment }       // Usamos Props para pasar la funcion al componente y establecer una comunicación con el padre 'App'
        />
    ); 


});
