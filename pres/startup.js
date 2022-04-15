import { SlidePresenter } from './components/slide-presenter.js'
import { GimmickThingy } from './components/gimmick-thingy.js'
import { ServiceLocator } from './cross-cutting/service-locator.js'
import { SlideService } from './services/slide-service.js';
import { SlideRepository } from './repositories/slide-repository.js';
import { HttpAdapter } from './repositories/http-adapter.js';
import { Config } from './cross-cutting/config.js';
import { SlideView } from './components/slide-view.js';

// register services
ServiceLocator.register(SlideService.name, () => new SlideService(ServiceLocator.resolve(SlideRepository.name)));
ServiceLocator.register(SlideRepository.name, () => new SlideRepository(ServiceLocator.resolve(HttpAdapter.name), ServiceLocator.resolve(Config.name)));
ServiceLocator.register(HttpAdapter.name, () => new HttpAdapter());
ServiceLocator.register(Config.name, () => new Config());

// register components
customElements.define('slide-presenter', SlidePresenter);
customElements.define('slide-view', SlideView);
customElements.define('gimmick-thingy', GimmickThingy);

// add components to page
document.body.appendChild(document.createElement('slide-presenter'));
document.body.appendChild(document.createElement('gimmick-thingy'));