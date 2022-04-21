import { Config } from "../../core/cross-cutting/config.js";
import { PresentationEntity } from "../entities/presentation-entity.js";
import { HttpAdapter } from "./http-adapter.js";

export class SlideRepository {
    /**
     * 
     * @param {HttpAdapter} httpAdapter
     * @param {Config} config 
     */
    constructor(httpAdapter, config) {
        this.httpAdapter = httpAdapter;
        this.config = config;
    }

    /**
     * @param {string} presentation
     * @returns {PresentationEntity} A presentation with a list of slides.
     */
    async getSlides(presentation) {
        return this.httpAdapter.getJson(`${this.config.apiBaseUrl}/${presentation}.json`);
    }
}
