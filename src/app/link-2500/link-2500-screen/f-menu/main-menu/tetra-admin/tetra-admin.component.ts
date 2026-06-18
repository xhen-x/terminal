import { Component } from '@angular/core';
import { HeaderComponent } from "../../../../../header/header.component";
import { OptionButtonComponent } from "../../../../../option-button/option-button.component";

@Component({
  selector: 'app-tetra-admin',
  imports: [HeaderComponent, OptionButtonComponent],
  templateUrl: './tetra-admin.component.html',
  styleUrl: './tetra-admin.component.css'
})
export class TetraAdminComponent {

}
