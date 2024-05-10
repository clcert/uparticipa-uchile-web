const getElectionDate = (startTime, endTime) => {
    const dateOptions = {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    }
    const [dateInit, timeInit] = startTime.split(' ');
    const [dateEnd, timeEnd] = endTime.split(' ');
    if (dateInit === dateEnd) {
        // return new Date(dateInit + " 00:00").toLocaleDateString('es-ES', dateOptions) + ', de ' + timeInit + ' h a ' + timeEnd + ' h';
        const date = new Date(dateInit + " 00:00");
        const localeDate = new Intl.DateTimeFormat('es-CL', dateOptions).format(date);
        return localeDate + ', de ' + timeInit + ' h a ' + timeEnd + ' h';
    } else {
        // return ('desde ' + new Date(dateInit + " 00:00").toLocaleDateString('es-ES', dateOptions) + ' ' + timeInit + ' h hasta ' + new Date(dateEnd + " 00:00").toLocaleDateString('es-ES', dateOptions) + ' ' + timeEnd + ' h')
        const date1 = new Date(dateInit + " 00:00");
        const date2 = new Date(dateEnd + " 00:00");
        const localeDate1 = new Intl.DateTimeFormat('es-CL', dateOptions).format(date1);
        const localeDate2 = new Intl.DateTimeFormat('es-CL', dateOptions).format(date2);
        return 'desde ' + localeDate1 + ', ' + timeInit + ' h, hasta ' + localeDate2 + ', ' + timeEnd + ' h'
    }
}

const isOpen = (startTime, endTime) => {
    const startDate = new Date(startTime);
    const endDate = new Date(endTime);
    const now = Date.now();

    if (startDate < now && endDate > now) {
        return true;
    }
    return false;
}

const isOver = (endTime) => {
    const endDate = new Date(endTime);
    const now = Date.now();

    if (endDate < now) {
        return true;
    }
    return false;
}

function InfoVotacion({ electionData }) {

    const electionDate = getElectionDate(electionData.startTime, electionData.endTime);
    const isElectionOpen = isOpen(electionData.startTime, electionData.endTime);
    const isElectionOver = isOver(electionData.endTime)

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
                <p className="has-text-weight-bold is-size-5 mb-0"
                    style={
                        { "font-size": "16px" }
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
                    { "font-size": "18px" }
                }>
                    {electionDate} </p>
            </div>
            <div className="election-detail mt-4">
                <b className="is-size-5"
                    style={
                        { color: "#d44000" }
                    }>ELECCIONES</b>
                {/* <b className="is-size-5" style={{ color: "#d44000" }}>ELECCIONES</b> */}
                {/* <Collapsible trigger={"ELECCIONES ▼"} triggerWhenOpen={"ELECCIONES ▲"} className='is-size-5' triggerOpenedClassName='is-size-5' triggerStyle={{ color: "#d44000", fontWeight: "bold", cursor: "pointer" }}> */}
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
                                                "font-size": "18px",
                                                "color": "#004b93",
                                                "fontWeight": "bold"
                                            }
                                        }>
                                            {
                                                election.name
                                            } </span>
                                    </div>
                                    {
                                        isElectionOpen ? <div className="election-buttons is-flex is-flex-direction-row is-justify-content-space-between">
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
                                        </div> : isElectionOver ? 
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
                            // <li key={index} className="is-size-6 mb-1 is-flex is-justify-content-space-between is-align-items-center">
                            // <span style={{ "font-size": "20px", "textAlign": "center", "color": "#004b93", "fontWeight": "bold"}}>
                            //     { election.name }
                            // </span>
                            // {
                            // isElectionOpen ?
                            // <div className="is-flex is-flex-direction-column is-align-items-center">
                            //     <a href={ election.vote_link } target="_blank" rel="noreferrer" style={{ "textDecoration": "none" }}>
                            //       <button className={"button is-medium election-button-vote mt-2"} >VOTAR</button>
                            //     </a>
                            //     <a href={ election.info_link } target="_blank" rel="noreferrer" style={{ "textDecoration": "none", "margin-top": "0.5em" }}>
                            //       <button className={"button is-small election-button-info mt-2"} >PORTAL DE INFORMACIÓN</button>
                            //     </a>
                            // </div>
                            // :
                            // <div className="is-flex is-flex-direction-column is-align-items-center">
                            //     <button className={"button election-button election-button-vote mt-2"} disabled>VOTAR</button>
                            //     <button className={"button election-button election-button-info mt-2"} disabled>PORTAL DE INFORMACIÓN</button>
                            // </div>
                            // }
                            // </li>
                        ))
                    } </ul>
                {/* </Collapsible> */} </div>
            {
                !isElectionOpen && <div className="election-closed mt-5">
                    <p className="has-text-weight-bold is-size-5 mb-0">ELECCIÓN CERRADA</p>
                </div>
            } </div>
    );
}

export default InfoVotacion;
