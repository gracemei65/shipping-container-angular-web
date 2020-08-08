import { Component, OnInit } from '@angular/core';

import { Container } from '@angular/compiler/src/i18n/i18n_ast';

import { ContainerService } from '../container.service';

@Component({
  selector: 'app-container-create',
  templateUrl: './container-create.component.html',
  styleUrls: ['./container-create.component.css']
})
export class ContainerCreateComponent implements OnInit {

  containerStatus:any;
  containerOwnerId:any;
  message:any;

  constructor(private service:ContainerService) { }

  ngOnInit(): void {
    // this.containerOwnerId=1;
  }

  public createContainer(){
    let resp=this.service.createContainer(this.containerOwnerId);
    resp.subscribe((data)=>this.containerStatus=data);
      }

}
