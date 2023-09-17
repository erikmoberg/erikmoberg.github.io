export class GimmickThingy extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
      this.shadowRoot.innerHTML = `
      <style>
      :host {
        position: fixed;
        top: 0;
        left: 0;
      }
      img {
        width: 100vw;
        height: 100vh;
        object-fit: cover;
        display: none;
      }

      img.visible {
        display: block;
      }
      </style>
      <img src="web/images/surprise.jpg" />`;
      this.addEventListeners();
  }

  addEventListeners() {
    document.addEventListener('keydown', (e) => {
        if (e.key === ' ') {
          this.shadowRoot.querySelector('img').classList.toggle('visible');
        }
    });
  }
}
