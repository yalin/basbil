import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { MatchInputComponent } from './match-input/match-input.component'
import { MatchResultComponent } from './match-result/match-result.component'

@NgModule({
  declarations: [AppComponent, MatchInputComponent, MatchResultComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
