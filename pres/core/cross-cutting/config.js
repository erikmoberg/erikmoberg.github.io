export class Config {
    
    #apiBaseUrl = "api";
    #defaultPresentationName = "waterfall";

    get apiBaseUrl() {
        return this.#apiBaseUrl;
    }
    get defaultPresentationName() {
        return this.#defaultPresentationName;
    }
}
