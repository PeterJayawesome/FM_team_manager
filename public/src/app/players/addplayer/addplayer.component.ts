import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../manager.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-addplayer',
  templateUrl: './addplayer.component.html',
  styleUrls: ['./addplayer.component.css']
})
export class AddplayerComponent implements OnInit {
  player ={
    name:"",
    position:""
  }

  constructor(private _router:Router, private _managerService:ManagerService) { }
  onSubmit(){
    this._managerService.createPlayer(this.player);
    this._router.navigate(['players','list']);
    this.player ={
      name:"",
      position:""
    }
  }
  ngOnInit() {
  }

}
