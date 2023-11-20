import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

export const CurrentTeamMember = ({member, t}) => {
	return (
    <>
			<div className='desktop-member'>
				<div className='member-item'>
					<img alt={member.name} src={member.picture} />
				</div>
				<div className='member-info'>
					<h2>{member.name}</h2>
					<p>{ t(`roles.${member.role}`) }</p>
					<div>
						{ member.contact.mail && <a href={`mailto:${member.contact.mail}`}><FontAwesomeIcon icon={faEnvelope} /></a> }
						{ member.contact.twitter && <a href={`https://twitter.com/${member.contact.twitter}`}><FontAwesomeIcon icon={faTwitter} /></a> }
					</div>
				</div>
			</div>
			<div className='mobile-member'>
				<div>
					<img alt={member.name} src={member.picture} />
				</div>
				<div className='mobile-member-data'>
					<h2>{ member.name }</h2>
					<p>{ t(`roles.${member.role}`) }</p>
					<div>
						{ member.contact.mail && <a href={`mailto:${member.contact.mail}`}><FontAwesomeIcon icon={faEnvelope} /></a> }
						{ member.contact.twitter && <a href={`https://twitter.com/${member.contact.twitter}`}><FontAwesomeIcon icon={faTwitter} /></a> }
					</div>
				</div>
			</div>
		</>
  )
}

export const OldTeamMember = ({member, t}) => {
	return (
    <>
			<div className='old-member'>
				<div>
					<img alt={member.name} src={member.picture} />
				</div>
				<div className='old-member-data'>
					<h2>{ member.name }</h2>
					<p>{ t(`roles.${member.role}`) }</p>
				</div>
			</div>
		</>
  )
}