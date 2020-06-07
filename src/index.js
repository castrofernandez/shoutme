import shoutme from './logger/logger';

export default shoutme;

if (typeof window !== 'undefined' && typeof window === 'object') {
    window['shoutme'] = logger;
}
