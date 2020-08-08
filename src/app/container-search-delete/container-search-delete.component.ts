import { Component, OnInit } from '@angular/core';
import { ContainerService } from '../container.service';

@Component({
  selector: 'app-container-search-delete',
  templateUrl: './container-search-delete.component.html',
  styleUrls: ['./container-search-delete.component.css']
})
export class ContainerSearchDeleteComponent implements OnInit {

  containers:any;
  msg:any;
  ownerId:number;

  constructor(private service:ContainerService) { }

  public getContainersByOwnerId(){
    let resp= this.service.getContainersByOwner(this.ownerId);
    resp.subscribe((data)=>this.containers=data);
   }
  public deleteContainer(containerId:number){
    let resp= this.service.deleteContainer(containerId);
    resp.subscribe((data)=>{
      this.msg=data ;
      this.ngOnInit();
    });
   }
   
   

  ngOnInit() {
    let resp=this.service.getAllContainers();
    resp.subscribe((data)=>this.containers=data);
  }

}
