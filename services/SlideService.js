import { SlideRepository } from '../repositories/SlideRepository.js'

export class SlideService {
    constructor() {
    }

    static async getSlides() {
        return SlideRepository.getSlides();
    }

    static getSlideIndexFromUrl () {
        const hash = parseInt(window.location.hash.slice(1));
        if (!isNaN(hash)) {
            return hash;
        }

        return 0;
    }
}
