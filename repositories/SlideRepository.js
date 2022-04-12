import { SlideModel } from '../domain/SlideModel.js'

export class SlideRepository {
    constructor() {
    }

    static async getSlides() {
        return [
            new SlideModel(`You may not need NPM`, 
                `<p>And other lies I keep telling myself</p>`),
            
            new SlideModel(`Well-factored code without build tools`, `
                <p>With modules, we can factor code as we see fit</p>
                <p>The browser is our build tool</p>`),

            new SlideModel(`Web components`, `
                <p>Components the standards way</p>`),

            new SlideModel(``, `
                <img src="images/image.png" />`),

            new SlideModel(`The end`, `
                <p>End</p>`),
        ];
    }
}
