import { SlideModel } from "./slide-model.js";

export class PresentationModel {
    /**
     * 
     * @param {string} title
     * @param {SlideModel[]} slides
     */
    constructor (title, slides) {
        this.title = title;
        this.slides = slides;
    }
}
