import { SlideEntity } from "./slide-entity.js";

export class PresentationEntity {
    /**
     * 
     * @param {string} title
     * @param {SlideEntity[]} slides
     */
    constructor (title, slides) {
        this.title = title;
        this.slides = slides;
    }
}
