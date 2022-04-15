import { SlideModel } from '../models/slide-model.js';
import { SlideRepository } from '../repositories/slide-repository.js';

export class SlideService {
    /**
     * 
     * @param {SlideRepository} slideRepository 
     */
    constructor(slideRepository) {
        this.slideRepository = slideRepository;
    }

    /**
     * 
     * @returns {SlideModel[]}
     */
    async getSlides() {
        const slides = await this.slideRepository.getSlides();
        return slides.map(s => new SlideModel(s.header, s.content, this.buildLabel(s.header), s.options));
    }

    /**
     * 
     * @param {string} header The text to build a label from.  
     * @returns {string}
     */
    buildLabel (header) {
        return header.toLowerCase()
            .replace(/ /g, '-')
            .replace(/[^A-Za-z0-9\-]/g, '')
    }
}
