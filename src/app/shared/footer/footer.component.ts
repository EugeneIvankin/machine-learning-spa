import { Component } from '@angular/core';
import { routes } from "@consts";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public readonly routes: typeof routes = routes;
}
