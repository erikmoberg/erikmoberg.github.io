import { SlideView } from './SlideView.js';
import { SlideService } from '../services/SlideService.js';
import { NumberHelper } from '../utils/NumberHelper.js';

class SlidePresentation extends HTMLElement {

    currentSlideIndex = 0;

    styles = `
<style>
  :host {
    display: flex;
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
        this.slides = await SlideService.getSlides();
        this.currentSlideIndex = Math.max(0, Math.min(this.slides.length - 1, SlideService.getSlideIndexFromUrl()));
        this.render();
        this.addEventListeners();
    }

    render() {
        this.shadowRoot.innerHTML = this.styles;
        this.slideViews = this.slides.map(s => {
            const view = document.createElement('slide-view');
            view.slide = s;
            this.shadowRoot.appendChild(view);
            return view;
        });

        this.skipSlide(0);
    }

    skipSlide(steps) {
        this.slideViews[this.currentSlideIndex].classList.remove('visible');
        this.currentSlideIndex = NumberHelper.getWithWrap(this.currentSlideIndex, steps, this.slides.length - 1);
        const view = this.slideViews[this.currentSlideIndex];
        view.classList.add('visible');
        view.scrollIntoView({behavior: 'smooth'});
        window.history.pushState(null, view.slide.header, '/#' + this.currentSlideIndex);
    }

    addEventListeners() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.skipSlide(-1);
            }
            else if (e.key === 'ArrowRight') {
                this.skipSlide(1);
            }
        });

        window.addEventListener('resize', () => {
            this.skipSlide(0);
        });
    }
}

customElements.define('slide-presentation', SlidePresentation);
