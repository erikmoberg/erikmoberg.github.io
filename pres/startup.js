import { SlidePresenter } from './web/components/slide-presenter.js'
import { GimmickThingy } from './web/components/gimmick-thingy.js'
import { SlideView } from './web/components/slide-view.js';
import { ServiceLocator } from './core/cross-cutting/service-locator.js'
import { SlideService } from './core/services/slide-service.js';
import { SlideRepository } from './infrastructure/repositories/slide-repository.js';
import { HttpAdapter } from './infrastructure/repositories/http-adapter.js';
import { Config } from './core/cross-cutting/config.js';
import { PageCounter } from './web/components/page-counter.js';

// register services
ServiceLocator.register(SlideService.name, () => new SlideService(ServiceLocator.resolve(SlideRepository.name), ServiceLocator.resolve(Config.name)));
ServiceLocator.register(SlideRepository.name, () => new SlideRepository(ServiceLocator.resolve(HttpAdapter.name), ServiceLocator.resolve(Config.name)));
ServiceLocator.register(HttpAdapter.name, () => new HttpAdapter());
ServiceLocator.register(Config.name, () => new Config());

// register components
customElements.define('slide-presenter', SlidePresenter);
customElements.define('slide-view', SlideView);
customElements.define('page-counter', PageCounter);
customElements.define('gimmick-thingy', GimmickThingy);

// add components to page
document.body.appendChild(document.createElement('slide-presenter'));
document.body.appendChild(document.createElement('gimmick-thingy'));