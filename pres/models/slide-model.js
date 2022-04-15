export class SlideModel {
    /**
     * 
     * @param {string} header 
     * @param {string} body 
     * @param {string} label 
     * @param {*} options 
     */
    constructor (header, body, label, options) {
        this.header = header;
        this.body = body;
        this.label = label;
        this.options = options;
    }
}
