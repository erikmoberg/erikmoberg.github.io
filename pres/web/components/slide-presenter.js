import { SlideService } from '../../core/services/slide-service.js';
import { NumberHelper } from '../../core/utils/number-helper.js';
import { SlideUrlHelper } from '../../core/utils/slide-url-helper.js'
import { ServiceLocator } from '../../core/cross-cutting/service-locator.js'
import { SlideView } from './slide-view.js';
import { PageCounter } from './page-counter.js';

export class SlidePresenter extends HTMLElement {

    /**
     * @type {number}
     */
    #originalFontSize = 2.5;

    /**
     * @type {string}
     */
    #fontUnit = 'vw';

    /**
     * @type {number}
     */
    #fontSize = this.#originalFontSize;

    /**
     * @type {number}
     */
    #currentSlideIndex = 0;

    /**
     * @type {SlideView[]}
     */
    slideViews = [];

    /**
     * @type {PageCounter[]}
     */
    #counter = null;

    styles = `
<style>
  :host {
    display: flex;
    overflow-x: hidden;
  }
  slide-view {
    opacity: 0;
    transition: opacity 0.8s ease-in-out;
  }
  slide-view.visible {
    opacity: 1;
  }
</style>
`;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    async connectedCallback() {
        const slideService = ServiceLocator.resolve(SlideService.name);
        this.updateFontSize();
        const presentation = await slideService.getSlides();
        this.slides = presentation.slides;
        document.title = presentation.title;
        this.#currentSlideIndex = SlideUrlHelper.getSlideIndex(this.slides);
        this.render();
        this.addEventListeners();
    }

    render() {
        this.shadowRoot.innerHTML = this.styles;
        this.slideViews = this.slides.map((s, i) => {
            const view = document.createElement('slide-view');
            view.slide = s;
            this.shadowRoot.appendChild(view);
            return view;
        });

        this.#counter = document.createElement('page-counter');
        this.#counter.pageNumber = 1;
        this.shadowRoot.appendChild(this.#counter);

        this.skipSlide(0);
    }

    skipSlide(steps) {
        this.slideViews[this.#currentSlideIndex].classList.remove('visible');
        this.#currentSlideIndex = NumberHelper.getWithWrap(this.#currentSlideIndex, steps, this.slides.length - 1);
        const view = this.slideViews[this.#currentSlideIndex];
        view.classList.add('visible');
        view.scrollIntoView({behavior: 'smooth'});
        SlideUrlHelper.setUrl(view.slide.label);
        this.#counter.pageNumber = this.#currentSlideIndex + 1;
    }

    updateFontSize() {
        document.body.style.fontSize = this.#fontSize + this.#fontUnit;
    };

    addEventListeners() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.skipSlide(-1);
            } else if (e.key === 'ArrowRight') {
                this.skipSlide(1);
            } else if (e.key === 'ArrowUp') {
                this.#fontSize += 0.1;
                this.updateFontSize();
            } else if (e.key === 'ArrowDown') {
                this.#fontSize -= 0.1;
                this.updateFontSize();
            } else if (e.key === '0') {
                this.#fontSize = this.#originalFontSize;
                this.updateFontSize();
            }
        });

        window.addEventListener('resize', () => {
            this.skipSlide(0);
        });
    }
}
