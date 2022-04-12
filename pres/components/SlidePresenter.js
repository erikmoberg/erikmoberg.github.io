import { SlideView } from './SlideView.js';
import { SlideService } from '../services/SlideService.js';
import { NumberHelper } from '../utils/NumberHelper.js';
import { SlideUrlHelper } from '../utils/SlideUrlHelper.js'
import { ServiceLocator } from '../crossCutting/ServiceLocator.js'

class SlidePresenter extends HTMLElement {

    originalFontSize = 2.5;
    fontUnit = 'vw';
    fontSize = this.originalFontSize;

    currentSlideIndex = 0;
    slideViews = [];
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
        const serviceLocator = new ServiceLocator(true);
        const slideService = serviceLocator.resolve(SlideService.name)
        this.updateFontSize();
        this.slides = await slideService.getSlides();
        this.currentSlideIndex = SlideUrlHelper.getSlideIndex(this.slides);
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
        SlideUrlHelper.setSlideIndex(this.currentSlideIndex, view.slide.label);
    }

    updateFontSize() {
        document.body.style.fontSize = this.fontSize + this.fontUnit;
    };

    addEventListeners() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.skipSlide(-1);
            } else if (e.key === 'ArrowRight') {
                this.skipSlide(1);
            } else if (e.key === 'ArrowUp') {
                this.fontSize += 0.1;
                this.updateFontSize();
            } else if (e.key === 'ArrowDown') {
                this.fontSize -= 0.1;
                this.updateFontSize();
            } else if (e.key === '0') {
                this.fontSize = this.originalFontSize;
                this.updateFontSize();
            }
        });

        window.addEventListener('resize', () => {
            this.skipSlide(0);
        });
    }
}

customElements.define('slide-presenter', SlidePresenter);
