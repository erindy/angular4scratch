import { Component } from '@angular/core';
import {CoursesService} from './courses.service';


@Component({
  selector: 'app-courses', // <courses>
  template: `
    <h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
    <img [src]="imageUrl" />
    <table>
      <tr>
        <td [attr.colspan]="colSpan"></td>
      </tr>
    </table>
    <div (click)="onDivClicked()">
      <button (click)="onSave($event)">Save</button>
    </div>
    <!--<input [value]="email" (keyup.enter)="email = $event.target.value; onKeyUp()" />-->
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" /> <br/>
    {{ course.title | uppercase}} <br/>
    {{ course.students | number }} <br/>
    {{ course.rating | number: '1.2-2' }} <br/>
    {{ course.price | currency: 'AUD':true:'3.2-2' }} <br/>
    {{ course.releaseDate | date:'shortDate' }} <br/>
    
    {{ text | summary: 10 }}

    <!--<button [style.backgroundcolor]="isActive ? 'blue' : 'white'" class="btn btn-primary" [class.active]="isActive">Save</button>-->
  `
})
export class CoursesComponent {
  title = 'list of courses';
  courses;
  imageUrl = 'http://lorempixel.com/400/200';
  colSpan = 2;
  email = 'me@example.com';
  isActive = true;
  text = `
    Në dorë armët do t'i mbajmë,
    Të mbrojmë atdheun në çdo kënd,
    Të drejtat tona ne s'i ndajmë;
    Këtu armiqtë s'kanë vënd!
    
    With weapons in our hands a-brandished,
    We will defend our fatherland,
    Our sacred rights we’ll not relinquish,
    The foe has no place in our land.
  `;
  course = {
    title: 'The Complete Angular Course',
    rating: 4.9784,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1)
  };
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
  onSave($event) {
    $event.stopPropagation();
    console.log('Button was clicked!', $event);
  }
  onDivClicked() {
    console.log('Div was clicked!');
  }

  onKeyUp(email) {
    console.log(this.email);
  }

}
