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
  }

  :host(.light) {
    background-color: var(--light);
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
    transition: transform 0.4s ease-in-out;
    transform: translateY(-10vh);
    
  }

  :host(.visible) h1 {
    transform: translateY(0);
  }

  p {
    margin: 0 0 2vh 0;
    text-align: center;
  }

  img {
    border-radius: var(--border-radius);
    box-shadow: 0 0 0.5rem black;
    height: 75vh;
  }

  section.hidden-header img {
    height: 95vh;
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

