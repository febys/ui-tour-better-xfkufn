import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OverlayModule } from "@angular/cdk/overlay";
import { MatButtonModule, MatIconModule } from "@angular/material";

import { UiTourDirective } from "./ui-tour.directive";
import { UiTourStepDirective } from "./ui-tour-step.directive";
import { UiTourDialogComponent } from "./ui-tour-dialog/ui-tour-dialog.component";
import { StartUiTourComponent } from "./start-ui-tour/start-ui-tour.component";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
    MatButtonModule,
    MatIconModule,
    RouterModule
  ],
  declarations: [
    UiTourDirective,
    UiTourStepDirective,
    UiTourDialogComponent,
    StartUiTourComponent
  ],
  exports: [UiTourDirective, UiTourStepDirective],
  entryComponents: [UiTourDialogComponent, StartUiTourComponent]
})
export class UiTourModule {}
