export class SlideEntity {
    /**
     * 
     * @param {string} header 
     * @param {string[]} content 
     * @param {boolean} hideHeader 
     */
    constructor (header, content, hideHeader) {
        this.header = header;
        this.content = content;
        this.hideHeader = hideHeader;
    }
}
