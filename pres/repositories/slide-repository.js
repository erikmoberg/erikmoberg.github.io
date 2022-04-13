import { SlideEntity } from '../models/slide-entity.js'

export class SlideRepository {
    constructor() {
    }

    async getSlides() {
        return [
            new SlideEntity(`You may not need NPM`, 
                `<p>And other lies I keep telling myself</p>`),
            
            new SlideEntity(`Well-factored code without build tools`, `
                <p>With modules, we can factor code as we see fit</p>
                <p>The browser is our build tool</p>`),

            new SlideEntity(`Web components`, `
                <p>Components the standards way</p>`),

            new SlideEntity(`My image`, `
                <img src="images/image.png" />`,
                { hideHeader: true }),

            new SlideEntity(`The end`, `
                <p>End</p>`),
        ];
    }
}
