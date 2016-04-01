import { Page } from 'ionic-angular';
import { WeatherService } from 'services/weather.service';
import * as template from './index.view.html';

@Page({
    template: template
})
export class IndexView {

    constructor(private weatherService: WeatherService) {
        this.weather = {
            currently: {
                temperature: 0
            }
        }
    }

    onPageLoaded() {
        navigator.geolocation.getCurrentPosition(res => {
            console.debug(res);
            const { latitude, longitude } = res.coords;
            this.weatherService.getWeatherForLatLng(latitude, longitude)
                .subscribe(data => Object.assign(this.weather, data);
        })
    }
};


