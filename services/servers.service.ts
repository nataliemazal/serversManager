import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import ServerModel from '../models/server.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient ) { }

  public async getAllServers(){
    const servers = await this.http.get<ServerModel[]>(environment.serversUrl).toPromise()
    return servers
  }

  public async getServersSortByDate(){
    const servers = await this.http.get<ServerModel[]>(environment.getServersSortByDate).toPromise()
    return servers
  }


}
