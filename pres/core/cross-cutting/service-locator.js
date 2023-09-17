import { NullishGuard } from '../utils/nullish-guard.js';

export class ServiceLocator {
    static registrations = {};
    
    static register(key, factory) {
        this.registrations[key] = factory;
    }
    
    static resolve(key) {
        const factory = this.registrations[key];
        NullishGuard.guard(factory, key);
        return factory();
    }
}