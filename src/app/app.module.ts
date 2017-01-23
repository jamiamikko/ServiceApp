import { DigitransitService } from './services/digitransit.service';
import { MediaService } from './services/media.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListMediaComponent } from './list-media/list-media.component';

@NgModule({
  declarations: [
    AppComponent,
    ListMediaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MediaService, DigitransitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
