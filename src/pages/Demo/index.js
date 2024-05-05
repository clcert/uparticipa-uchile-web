import React from 'react';

const DemoScreen = () => {
    return (

        <div className='pt-4'>
            <h1 className='title has-text-centered has-text-white'>Elección de Prueba</h1>

            <p className='has-text-white has-text-centered is-size-5 has-text-weight-bold'>
                COMUNIDAD UNIVERSIDAD DE CHILE
            </p>

            <div className='has-text-centered mt-3'>
                <a href="https://psifos-participa.uchile.cl/psifos/api/app/eleccion-prueba/vote" target='_blank' rel="noreferrer">
                    <button className='button is-primary is-medium'
                        style={
                            { backgroundColor: "#d44000" }
                        }>
                        ACCEDER AQUÍ
                    </button>
                </a>
            </div>

            <p className='has-text-white has-text-centered is-size-6 mt-4'>
                Si tienes problemas con tu cuenta, puedes ingresar a:
                <a className='has-text-white has-text-weight-bold' href='http://pasaporte.uchile.cl/' target='_blank' rel="noreferrer"> Mi Cuenta UChile</a>
            </p>

            <p className='has-text-white has-text-centered is-size-5 mt-6 has-text-weight-bold'>
                PÚBLICO GENERAL
            </p>

            <div className='has-text-centered mt-3'>
                <a href="https://psifos-participa.uchile.cl/psifos/api/app/eleccion-prueba-general/vote" target='_blank' rel="noreferrer">
                    <button className='button is-primary is-medium'
                        style={
                            { backgroundColor: "#d44000" }
                        }>
                        ACCEDER AQUÍ
                    </button>
                </a>
            </div>

        </div>
    )
}

export default DemoScreen
