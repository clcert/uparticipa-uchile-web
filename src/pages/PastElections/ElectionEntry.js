import React from 'react';

export const ElectionEntry = ({date, institution, elections}) => {
    return (
        <div className='box has-background-white'>
					<article className='media'>
						<div className='media-content'>
							<div className='content'>
								<p>
									FECHA: {date} <br/>
									{institution}
									<hr/>
									ELECCIONES:
									<ul>
                                        { elections.map((e) =>
                                        <li>
                                            {e}
                                        </li>) }
									</ul>
								</p>
							</div>
						</div>
					</article>
				</div>
    )
}