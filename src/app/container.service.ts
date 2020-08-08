import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContainerService {

  constructor(private http:HttpClient) { }

  public createContainer(containerOwnerId:number){
    return this.http.post("http://localhost:9090/shipping/containers/"+containerOwnerId, null);
    //return this.http.post("http://localhost:9090/shipping/containers/1", null);
    //return this.http.post("http://localhost:9090/shipping/containers/", { containerOwnerId: containerOwnerId });
    //return this.http.post("http://localhost:9090/shipping/containers/"+containerOwnerId,  { containerOwnerId: containerOwnerId });
  }

  public getAllContainers(){
    return this.http.get("http://localhost:9090/shipping/containers/");
  }
  public getContainersByOwner(ownerId:number){
    return this.http.get("http://localhost:9090/shipping/containers/"+ownerId);
  }

  public deleteContainer(containerId:number){
    return this.http.delete("http://localhost:9090/shipping/containers/"+containerId);
  }
}
