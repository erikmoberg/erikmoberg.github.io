import { SlideModel } from '../models/slide-model.js';
import { SlideRepository } from '../repositories/slide-repository.js';
import { SlideUrlHelper } from '../utils/slide-url-helper.js';

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
        const presentation = SlideUrlHelper.getPresentation() ?? 'stackless';
        const slides = await this.slideRepository.getSlides(presentation);
        return slides.map(s => new SlideModel(s.header, s.content.join(''), this.buildLabel(s.header), s.hideHeader));
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
