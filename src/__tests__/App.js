import React from 'react';

/** Testing Library Dependencies */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';       //  Para dar soporte a toBeInTheDocument()

/** Components */
import App from '../App';

describe( '<App />', () => {

    test( 'Títulos coincidentes', () => {
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

    });

});