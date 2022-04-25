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
    width: 2.5vw;
    aspect-ratio: 1 / 1.8;
    background: #05e273;
    transform: skewY(-10deg);
    position: fixed;
    bottom: -1vw;
    right: 4vw;
    z-index: -1;
  }
  #page-number {
    font-size: 2vw;
    position: fixed;
    bottom: 0.5vw;
    right: 4vw;
    width: 2.5vw;
    text-align: center;
    color: var(--dark);
  }
</style>
<div id="page-number">${this.#pageNumber}</div>`;
    }
}

