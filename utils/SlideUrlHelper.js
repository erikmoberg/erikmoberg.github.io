export class SlideUrlHelper {
    static getSlideIndex() {
        const hash = parseInt(window.location.hash.slice(1));
        if (!isNaN(hash)) {
            return hash;
        }

        return 0;
    }

    static setSlideIndex(index) {
        window.history.pushState(null, '', '/#' + index);
    }
}