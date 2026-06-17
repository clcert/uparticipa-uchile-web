import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import loadingGif from '../../assets/images/loading.svg';

function ElectionCardHeader({
    picture,
    unit,
    dateLabel,
    loading,
    hasElections,
    expanded,
    onToggle,
    listId,
    isStarted,
    isFinished,
    isPaused
}) {
    return (
        <div className="election-card-header" onClick={onToggle}>
                <div className="election-card-logo">
                    <img src={process.env.PUBLIC_URL + "/" + picture}
                        alt={"Logo " + unit} />
                </div>
                <div className="is-flex-grow-1 is-flex-shrink-1">
                    <div className="election-card-meta">
                        <p className="election-card-date-label">Fecha</p>
                        <p className="election-card-date">{dateLabel}</p>
                    </div>
                    <div className="election-card-meta mt-2">
                        <p className="election-card-date-label">Estado</p>
                        <p className="election-card-date">
                            {isStarted && !isFinished ? "En curso" : isFinished ? "Finalizada" : isPaused ? "En pausa" : "Por comenzar"}
                        </p>
                    </div>
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
                        aria-controls={listId}
                        aria-label={expanded ? "Ocultar votaciones" : "Desplegar lista de votaciones"}>
                        <FontAwesomeIcon
                            icon={faAngleDown}
                            className={"election-card-toggle-chevron" + (expanded ? " is-open" : "")} />
                    </button>
                )}
            </div>
        </div>
    );
}

export default ElectionCardHeader;
