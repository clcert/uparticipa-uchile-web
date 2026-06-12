// Development-only mock fixtures for the Home view.
//
// Wrapped in a NODE_ENV gate so webpack's DefinePlugin + minifier
// dead-code-eliminates the entire require() block in production builds —
// no mock JSON ships to end users.

let MOCKS = {};

if (process.env.NODE_ENV === 'development') {
    MOCKS = {
        'empty': require('./empty.json'),
        'single-active': require('./single-active.json'),
        'multi-units': require('./multi-units.json'),
        'multi-elections': require('./multi-elections.json'),
        'closed-recent': require('./closed-recent.json'),
        'setting-up': require('./setting-up.json'),
        'mixed': require('./mixed.json'),
        'general-elections': require('./general-elections.json'),
    };
}

export default MOCKS;
