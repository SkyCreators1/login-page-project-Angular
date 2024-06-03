import { Component } from '@angular/core';
import { TabsComponent } from './shared/tabs/tabs.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TabsComponent,
    NavbarComponent,
    FooterComponent
  ],
  template: `
    <app-navbar/>
    <app-tabs/>
    <app-footer/>


  `,
  styles: [],
})
export class AppComponent {
  title = 'login-page.project';
}
