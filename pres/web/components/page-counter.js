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
    width: 3rem;
    height: 6rem;
    background: #05e273;
    transform: skewY(-10deg);
    position: fixed;
    bottom: -1rem;
    right: 4rem;
    z-index: -1;
  }
  #page-number {
    font-size: 2rem;
    position: fixed;
    bottom: 1rem;
    right: 4rem;
    width: 3rem;
    text-align: center;
    color: var(--dark);
  }
</style>
<div id="page-number">${this.#pageNumber}</div>`;
    }
}

