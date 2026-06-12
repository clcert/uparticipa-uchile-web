const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

export const parseElectionDate = (dateStr) => {
    const [datePart, timePart] = dateStr.split(' ');
    const [year, month, day] = datePart.split('/').map(Number);
    const [hour, minute] = timePart.split(':').map(Number);
    return new Date(year, month - 1, day, hour, minute);
};

export const formatDateRange = (startTime, endTime) => {
    const dateOptions = { weekday: 'long', month: 'long', day: 'numeric' };
    const fmt = (d) => capitalize(new Intl.DateTimeFormat('es-CL', dateOptions).format(d));
    const [dateInit, timeInit] = startTime.split(' ');
    const [dateEnd, timeEnd] = endTime.split(' ');
    if (dateInit === dateEnd) {
        return fmt(new Date(dateInit + " 00:00")) + ' · ' + timeInit + ' h – ' + timeEnd + ' h';
    }
    const ld1 = fmt(new Date(dateInit + " 00:00"));
    const ld2 = fmt(new Date(dateEnd + " 00:00"));
    return ld1 + ', ' + timeInit + ' h → ' + ld2 + ', ' + timeEnd + ' h';
};
