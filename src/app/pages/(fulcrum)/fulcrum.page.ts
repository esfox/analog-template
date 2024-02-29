import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MainLayoutComponent } from '@app/layouts/main-layout/main-layout.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-fulcrum',
  standalone: true,
  imports: [RouterLink, ButtonModule, MainLayoutComponent],
  templateUrl: './fulcrum.page.html',
})
export default class FulcrumPageComponent {}
