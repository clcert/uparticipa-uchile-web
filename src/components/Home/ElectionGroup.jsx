import React from 'react';
import ElectionRow from './ElectionRow';

function ElectionGroup({ group, isStarted, isFinished, isPaused, isReleased }) {
    return (
        <div className="election-group">
            {group.groupName && (
                <p className="election-group-name">{group.groupName}</p>
            )}
            {group.electionsData.map((election, ei) => (
                <ElectionRow
                    key={ei}
                    election={election}
                    isStarted={isStarted}
                    isFinished={isFinished}
                    isPaused={isPaused}
                    isReleased={isReleased}
                     />
            ))}
        </div>
    );
}

export default ElectionGroup;
