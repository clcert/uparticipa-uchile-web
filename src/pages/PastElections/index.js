import React from 'react';
import { ElectionEntry } from './ElectionEntry';

import { electionList } from '../../data/pastelections';

const PastElectionsScreen = () => {
	return (
		<div className='body-center container'>
			<div className='box-content'>
				<h1 className='title'>Listado de Votaciones y Consultas</h1>

				{ electionList.map((election) =>
						<ElectionEntry
							date = {election.date}
							institution = {election.institution}
							elections = {election.elections}>
						</ElectionEntry>
					)
				}
			</div>
		</div>
	)
}

export default PastElectionsScreen
