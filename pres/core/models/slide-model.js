export class SlideModel {
    /**
     * 
     * @param {string} header 
     * @param {string} body 
     * @param {string} label 
     * @param {boolean} hideHeader 
     */
    constructor (header, body, label, hideHeader) {
        this.header = header;
        this.body = body;
        this.label = label;
        this.hideHeader = hideHeader;
    }
}
