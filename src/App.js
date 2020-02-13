import React, { Fragment } from 'react';
import AppointmentForm from './components/AppointmentForm';

function App() {
  return (
    <Fragment>
        <h1>Administrar citas</h1>
        <div className="container">
            <div className="row">
                <div className="one-half column">
                    <AppointmentForm />
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
