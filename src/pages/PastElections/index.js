import React from 'react';
import { ElectionEntry } from './ElectionEntry';

import { electionList } from '../../data/pastelections';

const PastElectionsScreen = () => {
	return (
		<div className='box'>
			<h1 className='title has-text-centered has-text-primary'>
				Listado de Votaciones y Consultas
			</h1>

			{ electionList.map((election) =>
					<ElectionEntry
						date = {election.date}
						institution = {election.institution}
						elections = {election.elections}>
					</ElectionEntry>
				)
			}
		</div>
	)
}

export default PastElectionsScreen
