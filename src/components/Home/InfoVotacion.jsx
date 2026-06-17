import React, { useId, useState } from 'react';
import { formatDateRange } from '../../utils/electionDate';
import { isStarted as checkStarted, isPending as checkPending, isFinished as checkFinished, isPaused as checkPaused } from '../../utils/electionStatus';
import useElectionStatus from '../../hooks/useElectionStatus';
import ElectionCardHeader from './ElectionCardHeader';
import ElectionGroup from './ElectionGroup';

function InfoVotacion({ electionData }) {
    const { status, loading, error } = useElectionStatus(electionData);
    const [expanded, setExpanded] = useState(false);
    const listId = useId();

    const dateLabel = formatDateRange(electionData.startTime, electionData.endTime);
    const isStarted = checkStarted(status);
    const isPending = checkPending(status);
    const isPaused = checkPaused(status);
    const isFinished = checkFinished(status, { loading, error });
    const isDisabled = !loading && !error && (isFinished || isPending);

    const totalElections = electionData.elections.reduce(
        (acc, g) => acc + g.electionsData.length, 0
    );
    const hasElections = totalElections > 0;

    return (
        <div className={"election-card" + (isDisabled ? " is-card-finished" : "")}>
            <ElectionCardHeader
                picture={electionData.picture}
                unit={electionData.unit}
                dateLabel={dateLabel}
                loading={loading}
                hasElections={hasElections}
                expanded={expanded}
                onToggle={() => setExpanded((v) => !v)}
                listId={listId}
                isStarted={isStarted}
                isFinished={isFinished}
                isPaused={isPaused} />

            {expanded && (
                <div
                    id={listId}
                    role="region"
                    aria-label={"Votaciones de " + electionData.unit}
                    className="election-card-list">
                    {electionData.elections.map((group, gi) => (
                        <ElectionGroup
                            key={gi}
                            group={group}
                            isStarted={isStarted}
                            isFinished={isFinished} />
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
