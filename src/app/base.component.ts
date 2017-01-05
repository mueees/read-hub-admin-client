import {Component} from "@angular/core";

@Component({
    template: `
      <nav>
            <a routerLink="/app/home" routerLinkActive="active">Home</a>
            <a routerLink="/app/about" routerLinkActive="active">About (lazy)</a>
      </nav>

    <router-outlet></router-outlet>
`
})
export class BaseComponent {
}