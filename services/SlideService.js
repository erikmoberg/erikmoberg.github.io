import { SlideModel } from '../models/SlideModel.js';
import { SlideRepository } from '../repositories/SlideRepository.js'

export class SlideService {
    constructor(serviceLocator) {
        this.slideRepository = serviceLocator.resolve(SlideRepository.name);
    }

    async getSlides() {
        const slides = await this.slideRepository.getSlides();
        return slides.map(s => new SlideModel(s.header, s.body, this.buildLabel(s.header), s.options));
    }

    buildLabel (header) {
        return header.toLowerCase().replace(/ /g, '-')
    }
}
