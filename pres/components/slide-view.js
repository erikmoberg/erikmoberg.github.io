import { SlideModel } from "../models/slide-model.js";

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
        this.shadowRoot.innerHTML = `
<style>
  :host {
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
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
    max-width: 95vw;
    max-height: 95vh;
    border-radius: var(--border-radius);
    box-shadow: 0 0 0.5rem black;
  }

  code {
    background-color: #1e1e1e;
    color: var(--neutral);
    padding: 1rem;
    font-size: 75%;
    border-radius: var(--border-radius);
  }
</style>
<section>
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

