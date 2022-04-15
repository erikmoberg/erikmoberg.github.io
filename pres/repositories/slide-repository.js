import { Config } from "../cross-cutting/config.js";
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
     * 
     * @returns {SlideEntity[]} A list of slides.
     */
    async getSlides() {
        return this.httpAdapter.getJson(`${this.config.apiBaseUrl}/slides.json`);
    }
}
