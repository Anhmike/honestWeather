import 'rxjs/add/operator/map';
import { Injectable } from 'angular2/core';
import { Http } from 'angular2/http';

const URL = 'https://api.forecast.io/forecast/086eaa44711f06f855c4b8759970fa6b'

@Injectable()
export class WeatherService {
    constructor(private http: Http) {}

    getWeatherForLatLng(lat, lng) {
        return this.http
            .get(`${URL}/${lat},${lng}`)
            .map(res => res.json());
    }
}
