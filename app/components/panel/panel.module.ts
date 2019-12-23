import { NgModule }      from '@angular/core';
import {CollapseComponent } from './collapse/collapse.component';
import { CollapseGroupComponent } from './collapse-group/collapse-group.component';
import { PanelComponent } from './panel.component';

@NgModule({
    declarations:[CollapseComponent, CollapseGroupComponent, PanelComponent],
    imports: []
})

export class PanelModule{}