import { SlideRepository } from '../repositories/SlideRepository.js'

export class SlideService {
    static async getSlides() {
        return SlideRepository.getSlides();
    }
}
