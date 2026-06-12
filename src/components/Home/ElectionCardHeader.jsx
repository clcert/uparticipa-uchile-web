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
}) {
    return (
        <div className="election-card-header">
            <div className="election-card-logo">
                <img src={process.env.PUBLIC_URL + "/" + picture}
                     alt={"Logo " + unit} />
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
                        aria-controls={listId}
                        aria-label={expanded ? "Ocultar votaciones" : "Desplegar lista de votaciones"}
                        onClick={onToggle}>
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
