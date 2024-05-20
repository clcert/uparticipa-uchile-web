import React, { useEffect, useState } from 'react';
import loadingGif from '../../assets/images/loading.svg';

const getElectionDate = (startTime, endTime) => {
    const dateOptions = {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    }
    const [dateInit, timeInit] = startTime.split(' ');
    const [dateEnd, timeEnd] = endTime.split(' ');
    if (dateInit === dateEnd) {
        const date = new Date(dateInit + " 00:00");
        const localeDate = new Intl.DateTimeFormat('es-CL', dateOptions).format(date);
        return localeDate + ', de ' + timeInit + ' h a ' + timeEnd + ' h';
    } else {
        const date1 = new Date(dateInit + " 00:00");
        const date2 = new Date(dateEnd + " 00:00");
        const localeDate1 = new Intl.DateTimeFormat('es-CL', dateOptions).format(date1);
        const localeDate2 = new Intl.DateTimeFormat('es-CL', dateOptions).format(date2);
        return 'desde ' + localeDate1 + ', ' + timeInit + ' h, hasta ' + localeDate2 + ', ' + timeEnd + ' h'
    }
}

function InfoVotacion({ electionData }) {

    const [electionStatus, setElectionStatus] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchElectionStatus();
    }, []);

    const fetchElectionStatus = async () => {
        try {
            const response = await fetch(electionData.status_link);
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            const electionResponse = await response.json();
            const electionStatus = electionResponse["status"];
            setElectionStatus(electionStatus)
            setLoading(false);
          } catch (error) {
            setError(error.message);
            setLoading(false);
          }
    };

    const electionDate = getElectionDate(electionData.startTime, electionData.endTime);

    return (
        <div className="election-box mt-0">
            <div className="unit-logo">
                <img src={
                    process.env.PUBLIC_URL + "/" + electionData.picture
                }
                    alt="Logo de Unidad Académica"
                    style={
                        { maxHeight: "250px" }
                    } />
            </div>
            <div className="election-title">
                <p className="has-text-weight-bold is-size-6 mb-0 has-text-centered"
                    style={
                        { "fontSize": "16px" }
                    }>
                    {
                        electionData.title
                    }</p>
            </div>
            <div className="mt-3">
                <b className="is-size-5"
                    style={
                        { color: "#d44000" }
                    }>FECHA</b>
                <p style={
                    { "fontSize": "18px" }
                }>
                    {electionDate} </p>
            </div>
            <div className="election-detail mt-4">
                <b className="is-size-5"
                    style={
                        { color: "#d44000" }
                    }>ELECCIONES</b>
                <ul className="elections-list pl-0">
                    {
                        electionData.elections.map((election, index) => (
                            <li key={index}
                                className="is-size-6 is-background-white mb-1"
                                style={
                                    {
                                        borderTop: index > 0 ? "1px solid #004b93" : "none"
                                    }
                                }>
                                <div className="election-elements is-flex is-justify-content-space-between is-align-items-center">
                                    <div className='election-title'>
                                        <span style={
                                            {
                                                "fontSize": "18px",
                                                "color": "#004b93",
                                                "fontWeight": "bold"
                                            }
                                        }>
                                            {
                                                election.name
                                            } </span>
                                    </div>
                                    {
                                        loading ? (
                                        <div className='container has-text-centered'>
                                            <img src={loadingGif} alt='Cargando...' />
                                        </div>
                                        ) : error ? (
                                            <></>
                                        ) : electionStatus === "Started" ?
                                        <div className="election-buttons is-flex is-flex-direction-row is-justify-content-space-between">
                                            <a href={
                                                election.vote_link
                                            }
                                                target="_blank"
                                                rel="noreferrer"
                                                style={
                                                    { "textDecoration": "none" }
                                                }>
                                                <button className={"button election-button election-button-vote mr-2 pr-6 pl-6"}>VOTAR</button>
                                            </a>
                                            <a href={
                                                election.info_link
                                            }
                                                target="_blank"
                                                rel="noreferrer"
                                                style={
                                                    { "textDecoration": "none" }
                                                }>
                                                <button className={"button election-button election-button-info"}
                                                    style={
                                                        {
                                                            fontSize: "0.7em",
                                                            height: "3.5em"
                                                        }
                                                    }>
                                                    PORTAL DE<br />INFORMACIÓN
                                                </button>
                                            </a>
                                        </div> : electionStatus !== "Setting up" ? 
                                        <div className="election-buttons is-flex is-flex-direction-row is-justify-content-space-between">
                                            <button className={"button election-button election-button-vote mr-2 pr-6 pl-6"}
                                                disabled>VOTAR</button>
                                            <a href={
                                                election.info_link
                                            }
                                                target="_blank"
                                                rel="noreferrer"
                                                style={
                                                    { "textDecoration": "none" }
                                                }>
                                                <button className={"button election-button election-button-info"}
                                                    style={
                                                        {
                                                            fontSize: "0.7em",
                                                            height: "3.5em"
                                                        }
                                                    }>
                                                    PORTAL DE<br />INFORMACIÓN
                                                </button>
                                            </a>
                                        </div>
                                        :
                                        <div className="election-buttons is-flex is-flex-direction-row is-justify-content-space-between">
                                            <button className={"button election-button election-button-vote mr-2 pr-6 pl-6"}
                                                disabled>VOTAR</button>
                                            <button className={"button election-button election-button-info"}
                                                style={
                                                    {
                                                        fontSize: "0.7em",
                                                        height: "3.5em"
                                                    }
                                                }
                                                disabled>
                                                PORTAL DE<br />INFORMACIÓN
                                            </button>
                                        </div>
                                    } </div>
                            </li>
                        ))
                    } </ul>
                </div>
            {
                electionStatus !== "Started" && !error && <div className="election-closed mt-5">
                    <p className="has-text-weight-bold is-size-5 mb-0">ELECCIÓN CERRADA</p>
                </div>
            } </div>
    );
}

export default InfoVotacion;
