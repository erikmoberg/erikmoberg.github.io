import { SlideModel } from "../../core/models/slide-model.js";

export class SlideView extends HTMLElement {

  /**
   * @type {SlideModel}
   */
    #slide = null;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    /**
     * 
     * @param {SlideModel} val
     */
    set slide(val) {
        this.#slide = val;
        if (val.style) {
            this.shadowRoot.host.classList.add(val.style);
        }

        /* CSS */
        this.shadowRoot.innerHTML = `
<style>
  :host {
    background-color: var(--dark);
    color: var(--light);
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  :host(.light) {
    background-color: var(--light);
    color: var(--dark);
  }

  a {
    color: var(--light);
  }

  :host(.light) a {
    color: var(--dark);
  }

  section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 80vw;
  }

  h1 {
    color: var(--accent);
    margin: 0 0 5vh 0;
    padding: 0;
    text-align: center;
    transform: translateY(-10vh);
    transition: transform 1.5s ease-in-out;
  }

  :host(.light) h1 {
    color: var(--dark-secondary);
  }

  :host(.visible) h1 {
    transform: translateY(0);
    transition: transform 0.8s ease-in-out;
    -moz-transition: -moz-transform 0.5s ease-in-out; /* Firefox animates faster than Chrome so we need to speed up the animation */
  }

  p {
    margin: 0 0 2vh 0;
    text-align: center;
  }

  p.small {
    font-size: 75%;
  }

  img {
    border-radius: var(--border-radius);
    box-shadow: 0 0 0.5rem black;
    max-height: 70vh;
    max-width: 95vw;
  }

  img.noborder {
    box-shadow: none;
  }

  img.logo {
    position: absolute;
    left: 1vw;
    bottom: 1vw;
    width: 7vw;
    box-shadow: none;
    border-radius: 0;
  }

  section.hidden-header img {
    max-height: 95vh;
  }

  code {
    background-color: #1e1e1e;
    color: var(--neutral);
    padding: 1rem;
    font-size: 75%;
    border-radius: var(--border-radius);
  }
</style>
<section class="${val.hideHeader ? `hidden-header` : ``}">
  ${val.hideHeader ? `` : `<h1>${val.header}</h1>`}
  ${val.body}
</section>`;
      }

    /**
     * @returns {SlideModel}
     */
    get slide() {
        return this.#slide;
    }
}

