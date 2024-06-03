import { Component } from '@angular/core';
import { LoginComponent } from '../../login/login.component';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from '../../register/register.component';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [
    CommonModule,
    LoginComponent,
    RegisterComponent
  ],
  template: `
    <div class="w-full mt-12">
      <div class="flex justify-center">
        <button class="btn sm:btn-sm md:btn-md lg:btn-lg" [ngClass]="{'btn-neutral text-white': tab == 1}" (click)="tab = 1">Login</button>
        <button class="btn sm:btn-sm md:btn-md lg:btn-lg" [ngClass]="{'btn-neutral text-white': tab == 2}" (click)="tab = 2">Register</button>
      </div>
    </div>

    <!--  Contenuti  -->

    <div class="contents">
      @if (tab == 1) {
        <app-login/>
      }@else {
        <div class="py-10 px-6">
          <app-register/>
        </div>
      }
    </div>




  `,
  styles: ``
})
export class TabsComponent {

  tab : number = 1;

}
