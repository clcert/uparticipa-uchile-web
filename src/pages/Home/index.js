import React from 'react';
import InfoVotacion from "../../components/Home/InfoVotacion";
import logoParticipaUchile from '../../assets/images/logolight.svg'

const Home = () => {
	const elections = require("../../data/currentElections.json");

	return (
		<div className='columns is-vcentered'>
			<div className='column has-text-centered is-one-third'>
				<div className='block is-hidden-touch'>
					<p className='has-text-white is-size-3 has-text-weight-medium'>
						"SEGURIDAD, TRANSPARENCIA Y VERIFICACIÓN"
					</p>
				</div>
				<div className='block is-hidden-touch'>
					<img src={ logoParticipaUchile } width='300' alt='Participa UChile Logo' />
				</div>
			</div>
			<div className='column'>
				<div className='box mx-2'>
					<div className='block mb-3'>
						<h1 className='is-size-4 title has-text-centered has-text-primary'>ELECCIÓN EN CURSO</h1>
					</div>
					<div className='block'>
					{elections.data.map((election, index) => (
              			<InfoVotacion electionData={election} key={index} />
            		))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home;
