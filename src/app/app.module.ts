import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { CropsListComponent } from './components/crops-list/crops-list.component';
import { FilterSeasonPipe } from './filter-season.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DatePickerComponent,
    CropsListComponent,
    FilterSeasonPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
