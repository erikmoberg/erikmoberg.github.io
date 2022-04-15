import { SlideModel } from '../models/slide-model.js';
import { SlideRepository } from '../repositories/slide-repository.js';
import { ServiceLocator } from '../cross-cutting/service-locator.js';
import { SlideService } from '../services/slide-service.js'
import { Fixture } from './Fixture.js'
import { SlideEntity } from '../models/slide-entity.js';

export class SlideServiceTests extends Fixture {

    constructor() {
        super();

        this.test(async () => {
            const fakeSlideRepository = { getSlides: () => [ new SlideEntity('header', 'body') ] };
            const slideService = new SlideService(fakeSlideRepository);
            
            const result = await slideService.getSlides();
            
            this.equal(1, result.length, 'getSlides should return a collection');
            this.equal('header', result[0].header, 'getSlides should fill header');
            this.equal('body', result[0].body, 'getSlides should fill body');
        });
    }
}