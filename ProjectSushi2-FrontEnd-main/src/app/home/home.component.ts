import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { MenuComponent } from "../menu/menu.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, MenuComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  constructor(){

  }

}
