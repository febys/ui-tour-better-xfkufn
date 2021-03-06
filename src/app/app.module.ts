import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import {
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule
} from "@angular/material";

import { AppComponent } from "./app.component";
import { UiTourModule } from "./ui-tour/ui-tour.module";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    UiTourModule,
    RouterModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
