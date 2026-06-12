export const STATUS_STARTED = 'Started';
export const STATUS_SETTING_UP = 'Setting up';
export const STATUS_READY = 'Ready for opening';

export const ACTIVE_STATUSES = new Set([
    STATUS_STARTED,
    STATUS_SETTING_UP,
    STATUS_READY,
]);

export const isStarted = (status) => status === STATUS_STARTED;

export const isPending = (status) =>
    status === STATUS_SETTING_UP || status === STATUS_READY;

export const isFinished = (status, { loading, error } = {}) =>
    !loading && !error && !ACTIVE_STATUSES.has(status);
