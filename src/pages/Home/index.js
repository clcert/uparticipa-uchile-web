import React from 'react';
import InfoVotacion from "../../components/Home/InfoVotacion";
import { parseElectionDate } from "../../utils/electionDate";
import { ACTIVE_STATUSES } from "../../utils/electionStatus";
import realElections from "../../data/currentElections.json";
import MOCKS from "../../data/mocks";

const TWO_DAY_MS = 48 * 60 * 60 * 1000;

const getMockKey = () => {
    if (process.env.NODE_ENV !== 'development') return null;
    const search = window.location.search ||
        (window.location.hash.includes('?') ? '?' + window.location.hash.split('?')[1] : '');
    const params = new URLSearchParams(search);
    const mock = params.get('mock');
    return mock && MOCKS[mock] ? mock : null;
};

const isFinished = (election, now) => {
    if (election.mockStatus !== undefined) return !ACTIVE_STATUSES.has(election.mockStatus);
    return parseElectionDate(election.endTime).getTime() < now;
};

const Home = () => {
    const mockKey = getMockKey();
    const elections = mockKey ? MOCKS[mockKey] : realElections;
    const now = Date.now();
    const filtered = mockKey
        ? elections.data
        : elections.data.filter(
              (election) => parseElectionDate(election.endTime).getTime() + TWO_DAY_MS >= now
          );
    const visibleElections = [...filtered].sort(
        (a, b) => Number(isFinished(a, now)) - Number(isFinished(b, now))
    );

    return (
        <div className='pt-5 election-list'>
            <h1 className='title has-text-centered has-text-white'>Elecciones</h1>
            {visibleElections.length === 0 ? (
                <div className='column'>
                    <div className='empty-state'>
                        <p>No hay elecciones en curso en este momento.</p>
                    </div>
                </div>
            ) : (
                visibleElections.map((election, index) => (
                    <div className='column' key={index}>
                        <InfoVotacion electionData={election} singleProcess={visibleElections.length === 1} />
                    </div>
                ))
            )}
        </div>
    );
};

export default Home;
