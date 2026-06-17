import React from 'react';

import { peopleList } from '../../data/people';
import { Person } from './People';

const PeopleScreen = () => {

    return (
        <div className='pt-5'>
            <h1 className='title has-text-centered has-text-white'>Equipo de Trabajo</h1>
            
            <div className='columns is-centered'>
                {
                    peopleList.map((p) => <>
                        <div className='column is-one-fifth'>
                            <Person key={
                                p.name
                            }
                                member={p} />
                        </div>
                    </>)
                }
            </div>
            
        </div>
    )
}

export default PeopleScreen
