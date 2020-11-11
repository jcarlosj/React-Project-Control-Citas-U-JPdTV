import React from 'react';

/** Testing Library Dependencies */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';       //  Para dar soporte a toBeInTheDocument()

/** Components */
import App from '../App';

describe( '<App />', () => {

    test( 'Títulos coincidentes, Dinamico \'No hay citas pendientes\' ', () => {
        render( <App /> );      //  Monta Componente

        /** Verificar que los titulos existan en en DOM */
        const titles = [ 'Administrar citas', 'Solicitud de cita', 'No hay citas pendientes' ];
        
        for ( const title of titles ) {
            expect( screen .getByText( title ) ) .toBeInTheDocument();
        }

        /** Verificar etiqueta y contenido del titulo principal de la aplicacion */
        const elTitle = screen .getByTestId( 'app-title' );

        expect( elTitle .tagName ) .toBe( 'H1' );               //  Verifica que la etiqueta sea H1
        expect( elTitle .textContent ) .toBe( titles[ 0 ] );    //  Verifica que el texto de en la etiqueta sea 'Administrar citas'

        /** Verifica Titulo Dinámico cuando no hay citas */
        expect( screen .getByTestId( 'app-dynamic-title' )  .textContent ) .not .toBe( 'Listado citas' );
        expect( screen .getByTestId( 'app-dynamic-title' )  .textContent ) .toBe( 'No hay citas pendientes' );

    });

    test( 'Cambio del título dinámico \'No hay citas pendientes\'', () => {
        render( <App /> );      //  Monta Componente

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

        /** Verificamos el titulo dinamico */
        expect( screen .getByTestId( 'app-dynamic-title' ) .textContent ) .toBe( 'Listado citas' );
        expect( screen .getByTestId( 'app-dynamic-title' ) .textContent ) .not .toBe( 'No hay citas pendientes' );
    });

});