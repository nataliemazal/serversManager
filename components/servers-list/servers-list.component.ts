import { Component, OnInit } from '@angular/core';
import ServerModel from 'src/app/models/server.model';
import { ServiceService } from 'src/app/services/servers.service';


@Component({
  selector: 'app-servers-list',
  templateUrl: './servers-list.component.html',
  styleUrls: ['./servers-list.component.css']
})
export class ServersListComponent implements OnInit {
public servers:ServerModel[];
  constructor(private myServersService:ServiceService) { }

 async ngOnInit() {
   try{
     this.servers = await this.myServersService.getAllServers()
   }
   catch(err){
     console.log(err)
   }
  }

  public async sortByDate(){
    try{
      this.servers = await this.myServersService.getServersSortByDate()
    }
    catch(err){
      console.log(err)
    }
  }

  async onlineServersOnly() {
    try{
     this.servers = await this.myServersService.getAllServers()
      this.servers= this.servers.filter(s=>s.status === 1)
    }
    catch(err){
      console.log(err)
    }
   }
  

}
