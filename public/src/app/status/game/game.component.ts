import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../manager.service';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  game_id;
  players;
  constructor(private _router:Router, private _managerService:ManagerService, private _route: ActivatedRoute) { }

  updateStatus(id,status){
    this._managerService.updatePlayer(id, status);
    this._managerService.getGamePlayers(this.game_id,(res)=>{
      this.players = res;
    })
  }

  ngOnInit() {
    this._route.paramMap.subscribe((params)=>{
      this.game_id = params.get('id');
      this._managerService.getGamePlayers(this.game_id,(res)=>{
        this.players = res;
      })
    })
  }

}
