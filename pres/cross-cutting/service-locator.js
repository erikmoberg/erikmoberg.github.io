import { SlideService } from '../services/slide-service.js';
import { SlideRepository } from '../repositories/slide-repository.js';
import { NullishGuard } from '../utils/nullish-guard.js';

export class ServiceLocator {
    registrations = {};
    
    register(type, key) {
        this.registrations[key] = type;
    }
    
    resolve(key) {
        const type = this.registrations[key];
        NullishGuard.guard(type, key);
        return new type(this);
    }

    constructor(initDefaults) {
        if (initDefaults) {
            this.register(SlideService, SlideService.name);
            this.register(SlideRepository, SlideRepository.name);
        }
    }
}