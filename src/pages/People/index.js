import React from 'react';

import { peopleList } from '../../data/people';
import { Person } from './People';

const PeopleScreen = () => {

  return (
	<div className='pt-5'>
		<h1 className='title has-text-centered has-text-white'>Equipo de Trabajo</h1>
		<div className='tile is-ancestor is-vertical'>
			<div className='tile'>
				{
				peopleList.slice(0, 4).map((p) =>
				<>
					<div className='tile is-parent'>
					<div className='tile is-child'>
						<Person key={p.name} member={p} />
					</div>
					</div>
				</>
				)
				}
			</div>
			<div className='tile is-9'>
				{
				peopleList.slice(4).map((p) =>
				<>
					<div className='tile is-parent'>
					<div className='tile is-child'>
						<Person key={p.name} member={p} />
					</div>
					</div>
				</>
				)
				}
			</div>
		</div>
		</div>
  )
}

export default PeopleScreen