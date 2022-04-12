import { SlideModel } from '../models/SlideModel.js';
import { SlideRepository } from '../repositories/SlideRepository.js';
import { ServiceLocator } from '../crossCutting/ServiceLocator.js';
import { SlideService } from '../services/SlideService.js'
import { Fixture } from './Fixture.js'

export class SlideServiceTests extends Fixture {

    constructor() {
        super();

        this.test(async () => {
            const serviceLocator = new ServiceLocator();
            serviceLocator.register(function(){ this.getSlides = () => [ new SlideModel('header', 'body') ] }, SlideRepository.name)
            const slideService = new SlideService(serviceLocator);
            
            const result = await slideService.getSlides();
            
            this.equal(1, result.length, 'getSlides should return a collection');
            this.equal('header', result[0].header, 'getSlides should fill header');
            this.equal('body', result[0].body, 'getSlides should fill body');
        });
    }
}