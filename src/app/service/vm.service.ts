import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import Vm from '../models/Vm';

@Injectable({
  providedIn: 'root'
})
export class VmService {

  Vms: Array<any> = [];

  constructor(private http: HttpClient) { }


  getVms() {
    const url = environment.apiURL + "VM/getAll";
    return this.http.get(url)
      .toPromise();
  }
}
