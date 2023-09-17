export class PageCounter extends HTMLElement {
    /**
     * @type {Number} pageNumber
     */
    #pageNumber = null;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    /**
     * 
     * @param {Number} val
     */
    set pageNumber(val) {
        this.#pageNumber = val;
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
<style>
  #page-number::before {
    content: "";
    width: 4vw;
    aspect-ratio: 1 / 1;
    background: var(--light-secondary);
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
  #page-number {
    font-size: 2vw;
    position: fixed;
    bottom: 0.6vw;
    right: 0.7vw;
    width: 2.5vw;
    text-align: center;
    color: var(--dark-secondary);
  }
</style>
<div id="page-number">${this.#pageNumber}</div>`;
    }
}

