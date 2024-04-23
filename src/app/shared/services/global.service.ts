import { Injectable } from '@angular/core';
import mockDataJson from 'src/app/data/data.json';

@Injectable({
    providedIn: 'root'
})
export class GlobalService {
    mockData = mockDataJson;
    constructor() {

    }

    getDashboard() {
        return this.mockData.users;
    }
}
