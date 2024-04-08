import React from 'react';
import { ElectionEntry } from './ElectionEntry';

import { electionList } from '../../data/pastelections';

const PastElectionsScreen = () => {
	return (
		<div className='pt-5'>
			<h1 className='title has-text-centered has-text-white'>
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
