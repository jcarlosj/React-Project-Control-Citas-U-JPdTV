import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';       //  Para dar soporte a toBeInTheDocument()
import userEvent from '@testing-library/user-event';

/** Componente a Testear */
import AppointmentForm from '../components/AppointmentForm';

/** Jest Spy Function */
const addAppointment = jest .fn();

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

    const btnSubmit = screen .getByTestId( 'btn-submit' );
    userEvent .click( btnSubmit );      //  Envia un evento al elemento (Hacemos clic - Forma Anterior)

    /** Assert */
    const alertError = screen .getByTestId( 'alert-error' );
    expect( alertError ).toBeInTheDocument();                   //  Verifica si el elemento esta en el DOM
    expect( alertError .textContent ) .toBe( 'Todos los campos son obligatorios.' );
    expect( alertError .tagName ) .toBe( 'P' );

});


test( '<AppointmentForm /> Valida llenan datos del formulario', () => {
    /** Monta el Componente con su funcionalidad asociada */
    render( 
        <AppointmentForm 
            addAppointment={ addAppointment }       // Usamos Props para pasar la funcion al componente y establecer una comunicación con el padre 'App'
        />
    ); 


    /** Llena el formulario */
    userEvent .type( screen .getByTestId( 'pet-name' ), 'Rex' );
    userEvent .type( screen .getByTestId( 'owner-name' ), 'Juan Carlos' );
    userEvent .type( screen .getByTestId( 'date' ), '2021-09-10' );
    userEvent .type( screen .getByTestId( 'hour' ), '09:10' );
    userEvent .type( screen .getByTestId( 'symptoms' ), 'Duerme como un angelito' );


    const btnSubmit = screen .getByTestId( 'btn-submit' );
    userEvent .click( btnSubmit );      //  Envia un evento al elemento (Hacemos clic - Forma Anterior)

    /** Alert-Error */
    expect(
        screen .queryByTestId( 'alert-error' )        //  No encuentre el elemento. Se usa queryByTestId cuando no hay certeza de encontrar el elemento y evitar el error con getByTestId
    ) .not.toBeInTheDocument();                                             //  En este caso no se debe negar usando not, si no agregando 'does-not-exist' a queryByTestId

    /** Function execute */
    expect( addAppointment ) .toHaveBeenCalled();           //  Verificar que la funcion 'addAppointment' fue llamada
    expect( addAppointment ) .toHaveBeenCalledTimes( 1 );   //  Verificar que la funcion 'addAppointment' fue llamada una sola vez

});