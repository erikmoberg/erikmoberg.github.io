export class SlideView extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    set slide(val) {
        this._slide = val;
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
  }

  p {
    margin: 0 0 2vh 0;
    text-align: center;
  }

  img {
    max-width: 95vw;
    max-height: 95vh;
    border-radius: 0.5rem;
    box-shadow: 0 0 0.5rem black;
  }
</style>
<section>
${val.header ? `<h1>${val.header}</h1>` : ``}
${val.body}
</section>`;
      }

    get slide() {
        return this._slide;
    }
}

customElements.define('slide-view', SlideView);
