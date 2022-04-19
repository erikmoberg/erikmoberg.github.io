import { Config } from "../cross-cutting/config.js";
import { SlideEntity } from "../models/slide-entity.js";
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
     * @returns {SlideEntity[]} A list of slides.
     */
    async getSlides(presentation) {
        return this.httpAdapter.getJson(`${this.config.apiBaseUrl}/${presentation}.json`);
    }
}
