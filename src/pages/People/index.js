import React, { useContext } from 'react';
import { GlobalTranslationsContext } from '../Contexts';

import { peopleList } from '../../data/people';
import { CurrentTeamMember, OldTeamMember } from './TeamMember';

const PeopleScreen = () => {

  const [ tg ] = useContext(GlobalTranslationsContext);
  const [ t ] = useTranslation('people');

  return (
    <div className='body-center container'>
      <div className='box-content'>
        <h1>{ tg('sites.people') }</h1>
        <hr />
        <div className='is-flex is-justify-content-space-around is-flex-wrap-wrap'>
        {
          peopleList.filter((p) => p.active).map((p) => 
            <CurrentTeamMember key={p.name} member={p} t={t}  />
          )
        }
        </div>
        <div className='old-members-container'>
          <hr />
          <div className='old-members-introduction'>
            <h2>{ t('page.old-members') }</h2>
            <p>{ t('page.old-members-introduction') }</p>
          </div>
          <div className='is-flex is-justify-content-space-around is-flex-wrap-wrap'>
          {
            peopleList.filter((p) => !p.active).map((p) => 
              <OldTeamMember key={p.name} member={p} t={t} />
            )
          }
          </div>
        </div>
      </div>
    </div>
  )
}

export default PeopleScreen