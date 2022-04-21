export class SlideModel {
    /**
     * 
     * @param {string} header 
     * @param {string} body 
     * @param {string} label 
     * @param {boolean} hideHeader 
     * @param {string} style 
     */
    constructor (header, body, label, hideHeader, style) {
        this.header = header;
        this.body = body;
        this.label = label;
        this.hideHeader = hideHeader;
        this.style = style;
    }
}
