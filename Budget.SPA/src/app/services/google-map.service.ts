import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Geocode } from 'app/model/g-map.model.';
// import { IGeocode } from 'app/model/g-map.model.';


@Injectable()
export class GoogleMapService {

    constructor(
        private http: HttpClient
    ) {}

    getGeoById(cityName: string): Observable<Geocode> {

        return this.http.get<Geocode>(`https://maps.googleapis.com/maps/api/geocode/json?address=${cityName}&key=${GMAP_KEY}`);
    }

}


