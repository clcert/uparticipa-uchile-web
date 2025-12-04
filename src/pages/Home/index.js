import React from 'react';
import InfoVotacion from "../../components/Home/InfoVotacion";
import logoParticipaUchile from '../../assets/images/logolight.svg'

const Home = () => {
    const elections = require("../../data/currentElections.json");

    return (
        <div className=''>
            {/* <div className='column has-text-centered is-one-third is-hidden-touch'>
                <div className='block'>
                    <p className='has-text-white is-size-3 has-text-weight-bold'>
                        "SEGURIDAD, TRANSPARENCIA Y VERIFICACIÓN"
                    </p>
                </div>
                <div className='block'>
                    <img src={logoParticipaUchile}
                        width='300'
                        alt='Participa UChile Logo' />
                </div>
            </div> */}
            {/* <div className='column'>
                <div className='box mx-5'
                    style={
                        { boxShadow: "none" }
                    }>
                    <div className='block'>
                        {
                            elections.data.map((election, index) => (
                                <InfoVotacion electionData={election}
                                    key={index} />
                            ))
                        } </div>
                </div>
            </div> */}
            {elections.data.map((election, index) => (
                <div className='column'>
                    <div className='box'
                        style={
                            { boxShadow: "none" }
                        }>
                        <div className='block'>
                            <InfoVotacion electionData={election}
                                          key={index} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Home;
