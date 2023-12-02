import React from 'react';
import { useTranslation } from 'react-i18next';

import { peopleList } from '../../data/people';
import { CurrentTeamMember } from './TeamMember';

const PeopleScreen = () => {

  const [ t ] = useTranslation('people');

  return (
    <div className='body-center container'>
      <div className='box-content'>
        <h1>Equipo de Trabajo</h1>
        <hr />
        <div className='is-flex is-justify-content-space-around is-flex-wrap-wrap'>
        {
          peopleList.filter((p) => p.active).map((p) => 
            <CurrentTeamMember key={p.name} member={p} t={t}  />
          )
        }
        </div>
      </div>
    </div>
  )
}

export default PeopleScreen