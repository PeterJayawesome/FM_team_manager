import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ManagerService {

  constructor(private _http: Http) { }

  getPlayers(callback){
    this._http.get('http://localhost:8000/players').subscribe(
      (response)=>{
          callback(response.json());
      },
      (err)=>{
        console.log("error 1 ");
      }
    )
  }

  createPlayer(data){
    this._http.post('http://localhost:8000/players', data).subscribe(
      (response)=>{
        console.log("success 1 ");
      },
      (err)=>{
        console.log("error 2 ");
      }
    )
  }

  deletePlayer(id){
    this._http.delete('http://localhost:8000/players/destroy/'+id).subscribe(
      (res)=>{
        console.log("success 3 ");
      },
      (err)=>{
        console.log("error 4 ");
      }
    )
  }

  getGamePlayers(id, callback){
    this._http.get('http://localhost:8000/players/game/'+id).subscribe(
      (res)=>{
        console.log("success 4 ");
        callback(res.json());
      },
      (err)=>{
        console.log("error 5 ");
      }
    )
  }

  updatePlayer(id, status){
    this._http.put('http://localhost:8000/players/'+id,{status:status}).subscribe(
      (res)=>{
        console.log("success 5 ");
      },
      (err)=>{
        console.log("error 6 ");
      }
    )
  }


}
