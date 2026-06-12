import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import loadingGif from '../../assets/images/loading.svg';
import { formatDateRange } from '../../utils/electionDate';

function InfoVotacion({ electionData }) {
    const hasMockStatus = electionData.mockStatus !== undefined;
    const [electionStatus, setElectionStatus] = useState(hasMockStatus ? electionData.mockStatus : null);
    const [loading, setLoading] = useState(!hasMockStatus);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (hasMockStatus) return;
        let cancelled = false;
        const fetchStatus = async () => {
            try {
                const res = await fetch(electionData.status_link, { cache: 'no-store' });
                if (!res.ok) throw new Error('Network error');
                const data = await res.json();
                if (!cancelled) setElectionStatus(data.status);
            } catch (e) {
                if (!cancelled) setError(e.message);
            } finally {
                if (!cancelled) setLoading(false);
            }
        };
        fetchStatus();
        return () => { cancelled = true; };
    }, [electionData.status_link, hasMockStatus]);

    const dateLabel = formatDateRange(electionData.startTime, electionData.endTime);
    const isStarted = electionStatus === "Started";
    const isPending = electionStatus === "Setting up" || electionStatus === "Ready for opening";
    const isFinished = !loading && !error && !isStarted && !isPending;

    const isDisabled = !loading && !error && (isFinished || isPending);

    const totalElections = electionData.elections.reduce(
        (acc, g) => acc + g.electionsData.length, 0
    );
    const hasElections = totalElections > 0;
    const [expanded, setExpanded] = useState(false);

    return (
        <div className={"election-card" + (isDisabled ? " is-card-finished" : "")}>
            <div className="election-card-header">
                <div className="election-card-logo">
                    <img src={process.env.PUBLIC_URL + "/" + electionData.picture}
                         alt={"Logo " + electionData.unit} />
                </div>
                <div className="election-card-meta">
                    <p className="election-card-date-label">Fecha</p>
                    <p className="election-card-date">{dateLabel}</p>
                </div>
                <div className="election-card-status">
                    {loading && (
                        <img src={loadingGif} alt="Cargando" style={{ height: '22px' }} />
                    )}
                    {!loading && hasElections && (
                        <button
                            type="button"
                            className="election-card-toggle-icon"
                            aria-expanded={expanded}
                            aria-label={expanded ? "Ocultar votaciones" : "Desplegar lista de votaciones"}
                            onClick={() => setExpanded((v) => !v)}>
                            <FontAwesomeIcon
                                icon={faAngleDown}
                                className={"election-card-toggle-chevron" + (expanded ? " is-open" : "")} />
                        </button>
                    )}
                </div>
            </div>

            {expanded && (
                <div className="election-card-list">
                    {electionData.elections.map((group, gi) => (
                        <div key={gi} className="election-group">
                            {group.groupName && (
                                <p className="election-group-name">{group.groupName}</p>
                            )}
                            {group.electionsData.map((election, ei) => (
                                <div className="election-row" key={ei}>
                                    <span className="election-row-name">{election.name}</span>
                                    {(isStarted || isFinished) && (
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
                            ))}
                        </div>
                    ))}
                </div>
            )}

            {electionData.message && (
                <div className="election-message-slim">{electionData.message}</div>
            )}
        </div>
    );
}

export default InfoVotacion;
