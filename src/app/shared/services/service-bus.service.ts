import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceBus {
  constructor(private _httpService: HttpService) { }
}
