import { App } from 'ionic-angular';
import { IndexView } from 'pages/index/index.view';
import { WeatherService } from 'services/weather.service';

@App({
    template: '<ion-nav [root]="indexView"></ion-nav>',
    providers: [ WeatherService ]
})

export class HonestWeather {
    constructor() {
        this.indexView = IndexView;
    }
}
