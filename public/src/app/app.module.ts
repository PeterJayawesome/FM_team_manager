import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { StatusComponent } from './status/status.component';
import { ListComponent } from './players/list/list.component';
import { AddplayerComponent } from './players/addplayer/addplayer.component';
import { GameComponent } from './status/game/game.component';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule
import { ManagerService } from './manager.service'; // <-- Imported

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    StatusComponent,
    ListComponent,
    AddplayerComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // <-- Include module in our AppModules
		HttpModule, 
  ],
  providers: [ManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
