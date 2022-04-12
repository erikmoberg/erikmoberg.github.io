import { SlideService } from "../services/SlideService.js";
import { SlideRepository } from "../repositories/SlideRepository.js";

export class ServiceLocator {
    registrations = {};
    register(type, key) {
        this.registrations[key] = type;
    }
    resolve(key) {
        return new this.registrations[key](this);
    }
    constructor(initDefaults) {
        if (initDefaults) {
            this.register(SlideService, SlideService.name);
            this.register(SlideRepository, SlideRepository.name);
        }
    }
}