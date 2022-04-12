import { NumberHelperTests } from './NumberHelperTests.js'
import { SlideServiceTests } from './SlideServiceTests.js';

export class TestRunner extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    async connectedCallback() {
        (new NumberHelperTests()).run();
        (new SlideServiceTests()).run();
    }
}

customElements.define('test-runner', TestRunner);
