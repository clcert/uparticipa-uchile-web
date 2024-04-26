import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

export const Person = ({ member }) => {
    return (
        <div className='card is-equal-height'>
            <div className='card-image'>
                <figure className='image is-square'>
                    <img alt={
                        member.name
                    }
                        src={
                            member.picture
                        }
                        width={256} />
                </figure>
            </div>
            <div className='card-content'>
                <p className='title is-4'>
                    {
                        member.name
                    }</p>
                <p className='subtitle is-6'>
                    {
                        member.role
                    }</p>
            </div>
            <div className='card-footer'>
                {
                    member.contact.mail && <a className='card-footer-item' target='__blank'
                        href={
                            `mailto:${member.contact.mail
                            }`
                        }><FontAwesomeIcon icon={faEnvelope} /></a>
                }
                {
                    member.contact.twitter && <a className='card-footer-item' target='__blank'
                        href={
                            `https://twitter.com/${member.contact.twitter
                            }`
                        }><FontAwesomeIcon icon={faTwitter} /></a>
                } </div>
        </div>
    )
}
