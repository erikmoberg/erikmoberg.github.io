export class SlideUrlHelper {
    static getSlideIndex(slides) {
        const hash = window.location.hash.slice(1);
        if (hash) {
            const index = slides.findIndex(s => s.label === hash);
            return Math.max(index, 0);
        }

        return 0;
    }

    static setSlideIndex(index, label) {
        window.history.pushState(null, '', '#' + label);
    }
}