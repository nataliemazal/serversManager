import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit} from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

import ChangeStatus from 'src/app/models/changeStatus.model';
import ServerModel from 'src/app/models/server.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-server-card',
  templateUrl: './server-card.component.html',
  styleUrls: ['./server-card.component.css']
})
export class ServerCardComponent implements OnInit  {
  constructor(private http:HttpClient ) { }
  @Input()
  public server : ServerModel
  public isChecked :boolean;
  public status :string
  public changeStatusObject : ChangeStatus
ngOnInit(){
  this.server.status ===0 ?
    this.isChecked=false :
    this.isChecked=true;

    this.server.status ===0 ?
    this.status="offline" :
    this.status="online";


    this.changeStatusObject = {
      server_id : this.server.server_id,
      status : this.isChecked
    }

    
}

public async changeStatus(event: MatSlideToggleChange){
try {
this.changeStatusObject.status = event.checked
this.changeStatusObject.server_id = this.server.server_id
const res =await this.http.put(environment.serversUrl,this.changeStatusObject).toPromise()
this.isChecked = event.checked
event.checked == true? this.status = "online" : this.status = "offline"
console.log(this.isChecked)
console.log(res)
} catch (error) {
  console.log(error)
}


}

}
