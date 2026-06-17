export const STATUS_STARTED = 'Started';
export const STATUS_SETTING_UP = 'Setting up';
export const STATUS_READY_FOR_OPENING = 'Ready for opening';
export const STATUS_PAUSED = 'Paused';
export const STATUS_READY_FOR_KEY_GENERATION = 'Ready for key generation';
export const STATUS_ENDED = 'Ended';
export const STATUS_COMPUTING_TALLY = 'Computing tally';
export const STATUS_TALLY_COMPUTED = 'Tally computed';
export const STATUS_DECRYPTIONS_UPLOADED = 'Decryptions uploaded';
export const STATUS_DECRYPTIONS_COMBINED = 'Decryptions combined';
export const STATUS_RESULTS_RELEASED = 'Results released';

export const PENDING_STATUSES = new Set([
    STATUS_SETTING_UP,
    STATUS_READY_FOR_OPENING,
    STATUS_READY_FOR_KEY_GENERATION,
    null
]);

export const FINISHED_STATUSES = new Set([
    STATUS_ENDED,
    STATUS_COMPUTING_TALLY,
    STATUS_TALLY_COMPUTED,
    STATUS_DECRYPTIONS_UPLOADED,
    STATUS_DECRYPTIONS_COMBINED,
    STATUS_RESULTS_RELEASED
]);

export const ACTIVE_STATUSES = new Set([
    STATUS_STARTED,
    STATUS_PAUSED
]);

export const isStarted = (status) => status === STATUS_STARTED;

export const isPending = (status) => PENDING_STATUSES.has(status);

export const isFinished = (status) => FINISHED_STATUSES.has(status);

export const isPaused = (status) => status === STATUS_PAUSED;
