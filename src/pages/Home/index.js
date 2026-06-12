import React from 'react';
import InfoVotacion from "../../components/Home/InfoVotacion";
import { parseElectionDate } from "../../utils/electionDate";
import realElections from "../../data/currentElections.json";
import mockEmpty from "../../data/mocks/empty.json";
import mockSingleActive from "../../data/mocks/single-active.json";
import mockMultiUnits from "../../data/mocks/multi-units.json";
import mockMultiElections from "../../data/mocks/multi-elections.json";
import mockClosedRecent from "../../data/mocks/closed-recent.json";
import mockSettingUp from "../../data/mocks/setting-up.json";
import mockMixed from "../../data/mocks/mixed.json";
import mockGeneralElections from "../../data/mocks/general-elections.json";

const MOCKS = {
    "empty": mockEmpty,
    "single-active": mockSingleActive,
    "multi-units": mockMultiUnits,
    "multi-elections": mockMultiElections,
    "closed-recent": mockClosedRecent,
    "setting-up": mockSettingUp,
    "mixed": mockMixed,
    "general-elections": mockGeneralElections,
};

const ONE_DAY_MS = 24 * 60 * 60 * 1000;

const getMockKey = () => {
    if (process.env.NODE_ENV !== 'development') return null;
    const search = window.location.search ||
        (window.location.hash.includes('?') ? '?' + window.location.hash.split('?')[1] : '');
    const params = new URLSearchParams(search);
    const mock = params.get('mock');
    return mock && MOCKS[mock] ? mock : null;
};

const ACTIVE_STATUSES = new Set(["Started", "Setting up", "Ready for opening"]);

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
              (election) => parseElectionDate(election.endTime).getTime() + ONE_DAY_MS >= now
          );
    const visibleElections = [...filtered].sort(
        (a, b) => Number(isFinished(b, now)) - Number(isFinished(a, now))
    );

    return (
        <div className='pt-5 election-list'>
            <h1 className='title has-text-centered has-text-white'>Votaciones</h1>
            {visibleElections.length === 0 ? (
                <div className='column'>
                    <div className='empty-state'>
                        <p>No hay elecciones en curso en este momento.</p>
                    </div>
                </div>
            ) : (
                visibleElections.map((election, index) => (
                    <div className='column' key={index}>
                        <InfoVotacion electionData={election} />
                    </div>
                ))
            )}
        </div>
    );
};

export default Home;
