import React from 'react';

function ElectionRow({ election, isStarted, isFinished }) {
    const showActions = isStarted || isFinished;
    return (
        <div className="election-row">
            <span className="election-row-name">{election.name}</span>
            {showActions && (
                <div className="election-row-actions">
                    <a href={election.info_link}
                       target="_blank"
                       rel="noreferrer"
                       className="election-btn election-btn-info">
                        Información
                    </a>
                    {isStarted && (
                        <a href={election.vote_link}
                           target="_blank"
                           rel="noreferrer"
                           className="election-btn election-btn-vote">
                            Ir a votar
                        </a>
                    )}
                </div>
            )}
        </div>
    );
}

export default ElectionRow;
