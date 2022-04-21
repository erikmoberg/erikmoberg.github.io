export class SlideEntity {
    /**
     * 
     * @param {string} header 
     * @param {string[]} content 
     * @param {boolean} hideHeader 
     * @param {string} style 
     */
    constructor (header, content, hideHeader, style) {
        this.header = header;
        this.content = content;
        this.hideHeader = hideHeader;
        this.style = style;
    }
}
