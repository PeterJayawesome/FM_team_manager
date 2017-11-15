import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../manager.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  players;
  constructor(private _managerService:ManagerService) { }

  deleteOne(id){
    this._managerService.deletePlayer(id);
    this._managerService.getPlayers((res)=>{
      this.players = res
    })
  }

  ngOnInit() {
    this._managerService.getPlayers((res)=>{
      this.players = res
    })
    this._managerService.getPlayers((res)=>{
      this.players = res
    })
  }

}
